<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use App\Models\Cliente;
use App\Models\Servicio;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    public function index(Request $request)
    {
        $usuario = auth()->user();

        // Actualizar citas pasadas a "completada"
        Cita::where('usuario_id', $usuario->id)
            ->where('estado', 'activa')
            ->where(function ($query) {
                $query->where('fecha', '<', date('Y-m-d'))
                    ->orWhere(function ($q) {
                        $q->where('fecha', date('Y-m-d'))
                            ->where('hora', '<', date('H:i'));
                    });
            })
            ->update(['estado' => 'completada']);

        // Ahora cargamos las citas ya actualizadas
        $citas = $usuario->citas()
            ->with(['cliente', 'servicio'])
            ->orderBy('fecha', 'desc')
            ->orderBy('hora', 'desc')
            ->paginate(10);

        return view('citas.index', compact('citas'));
    }


    public function create()
    {

        $clientes = Cliente::where('activo', true)->orderBy('nombre')->get();
        $servicios = Servicio::where('activo', true)->orderBy('nombre')->get();

        return view('citas.form', [
            'cita' => new Cita(),
            'clientes' => $clientes,
            'servicios' => $servicios,
        ]);
    }

    public function store(Request $request)
    {
        //1. Validación de campos
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'servicio_id' => 'required|exists:servicios,id',
            'fecha' => 'required|date|after_or_equal:today',
            'hora' => 'required',
            'notas' => 'nullable|string',
        ]);

        // 2. Validación de fecha y hora
        $fecha = $request->fecha;
        $hora = $request->hora;

        $ahoraFecha = date('Y-m-d');
        $ahoraHora = date('H:i');

        // Si la fecha es hoy, la hora debe ser mayor a la actual
        if ($fecha === $ahoraFecha && $hora <= $ahoraHora) {
            return back()
                ->withErrors(['hora' => 'No puedes reservar una hora que ya ha pasado'])
                ->withInput();
        }


        // Validación de solape: mismo cliente, misma fecha y hora, cita activa
        $solape = Cita::where('cliente_id', $request->cliente_id)
            ->where('fecha', $request->fecha)
            ->where('hora', $request->hora)
            ->where('estado', 'activa')
            ->exists();

        if ($solape) {
            return redirect()
                ->route('citas.create')
                ->withErrors(['hora' => 'El cliente ya tiene una cita en esa franja horaria'])
                ->withInput();
        }

        Cita::create([
            'usuario_id' => auth()->id(),
            'cliente_id' => $request->cliente_id,
            'servicio_id' => $request->servicio_id,
            'fecha' => $request->fecha,
            'hora' => $request->hora,
            'notas' => $request->notas,
            'estado' => 'activa',
        ]);

        return redirect()
            ->route('citas.index')
            ->with('success', 'Cita creada correctamente');
    }

    public function edit(Cita $cita)
    {
        if ($cita->estado === 'completada') {
            return redirect()->route('citas.index')->withErrors(['cita' => 'No se puede editar una cita completada']);
        }

        $clientes = Cliente::where('activo', true)->orderBy('nombre')->get();
        $servicios = Servicio::where('activo', true)->orderBy('nombre')->get();

        return view('citas.form', [
            'cita' => $cita,
            'clientes' => $clientes,
            'servicios' => $servicios,
        ]);
    }

    public function update(Request $request, Cita $cita)
    {

        if ($cita->estado === 'completada') {
            return redirect()->route('citas.index')->withErrors(['cita' => 'No se puede actualizar una cita completada']);
        }

        // Validacion de campos
        $request->validate([
            'cliente_id' => 'required|exists:clientes,id',
            'servicio_id' => 'required|exists:servicios,id',
            'fecha' => 'required|date|after_or_equal:today',
            'hora' => 'required',
            'notas' => 'nullable|string',
        ]);

        // Validación de fecha y hora
        $fecha = $request->fecha;
        $hora = $request->hora;

        $ahoraFecha = date('Y-m-d');
        $ahoraHora = date('H:i');

        // Si la fecha es hoy, la hora debe ser mayor a la actual
        if ($fecha === $ahoraFecha && $hora <= $ahoraHora) {
            return back()
                ->withErrors(['hora' => 'No puedes reservar una hora que ya ha pasado'])
                ->withInput();
        }

        $solape = Cita::where('cliente_id', $request->cliente_id)
            ->where('fecha', $request->fecha)
            ->where('hora', $request->hora)
            ->where('estado', 'activa')
            ->where('id', '!=', $cita->id)
            ->exists();

        if ($solape) {
            return redirect()
                ->route('citas.edit', $cita)
                ->withErrors(['hora' => 'El cliente ya tiene una cita en esa franja horaria'])
                ->withInput();
        }

        $cita->update([
            'cliente_id' => $request->cliente_id,
            'servicio_id' => $request->servicio_id,
            'fecha' => $request->fecha,
            'hora' => $request->hora,
            'notas' => $request->notas,
        ]);

        return redirect()
            ->route('citas.index')
            ->with('success', 'Cita actualizada correctamente');
    }

    public function cancel(Cita $cita)
    {
        if ($cita->estado === 'completada') {
            return redirect()->route('citas.index')->withErrors(['cita' => 'No se puede cancelar una cita completada']);
        }

        if ($cita->estado === 'activa') {
            $cita->estado = 'cancelada';
            $cita->save();
        }

        return redirect()
            ->route('citas.index')
            ->with('success', 'Cita cancelada');
    }
}
