<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Usuario;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Usuario::create([
            'dni' => 'TEST0001',
            'nombre' => 'Victor',
            'apellidos' => 'Prueba',
            'email' => 'victor@fp.com',
            'telefono' => '600123456',
            'contrasena' => bcrypt('123456'),
            'activo' => 1,
            'direccion' => 'Calle Ejemplo 1',
            'ciudad' => 'Valladolid',
            'provincia' => 'Castilla y León',
            'codigo_postal' => '47001',
            'ruta_cv' => null,
            'fecha_nacimiento' => '2000-01-01',
            'perfil' => 'Alumno'
        ]);

        Usuario::create([
            'dni' => 'TEST0002',
            'nombre' => 'Ana',
            'apellidos' => 'García',
            'email' => 'ana@fp.com',
            'telefono' => '600987654',
            'contrasena' => bcrypt('654321'),
            'activo' => 1,
            'direccion' => 'Calle Ejemplo 2',
            'ciudad' => 'Madrid',
            'provincia' => 'Madrid',
            'codigo_postal' => '28001',
            'ruta_cv' => null,
            'fecha_nacimiento' => '1998-05-15',
            'perfil' => 'Profesor'
        ]);

        Usuario::create([
            'dni' => 'TEST0003',
            'nombre' => 'Luis',
            'apellidos' => 'Fernández',
            'email' => 'luis@fp.com',
            'telefono' => '600555444',
            'contrasena' => bcrypt('abcdef'),
            'activo' => 0,
            'direccion' => 'Calle Ejemplo 3',
            'ciudad' => 'Barcelona',
            'provincia' => 'Cataluña',
            'codigo_postal' => '08001',
            'ruta_cv' => null,
            'fecha_nacimiento' => '1995-09-20',
            'perfil' => 'Alumno'
        ]);
    }
}
