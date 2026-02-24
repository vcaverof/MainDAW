import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'empresa-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss'],
})
export class EmpresaFormComponent implements OnChanges {
  @Input() initialData: any = null;
  @Output() submitForm = new EventEmitter<any>();

  // Esto lo podrás sustituir por datos reales de la API si quieres
  ciclosDisponibles = ['1ºDAM', '1ºDAW', '1ºASIR', '1ºSMR', '2ºDAM', '2ºDAW', '2ºASIR', '2ºSMR'];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // De momento lo dejamos vacío, luego añadimos los campos reales
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', Validators.required],
      descripcion: [''],
      sector: ['', Validators.required],
      modalidad: ['', Validators.required],
      horario: [''],
      ciclos: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialData'] && this.initialData) {
      this.form.patchValue(this.initialData);
      if (this.initialData.ciclos) {
        const ciclosArray = this.form.get('ciclos') as FormArray;
        ciclosArray.clear();
        this.initialData.ciclos.forEach((c: string) => ciclosArray.push(this.fb.control(c)));
      }
    }
  }

  toggleCiclo(ciclo: string, event: any) {
    const ciclosArray = this.form.get('ciclos') as FormArray;
    if (event.target.checked) {
      ciclosArray.push(this.fb.control(ciclo));
    } else {
      const index = ciclosArray.controls.findIndex((ctrl) => ctrl.value === ciclo);
      ciclosArray.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
