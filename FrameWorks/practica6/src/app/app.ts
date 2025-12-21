import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TelefonoValidator } from './validators/telefono.validator';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  registroEventosForm!: FormGroup;
  jsonResult: string | null = null;
  formSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registroEventosForm = this.fb.group({
      datosEvento: this.fb.group({
        titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
        fecha: ['', [Validators.required]],
        aforo: ['', [Validators.required, Validators.min(1), Validators.max(5000)]]
      }),
      ubicacionEvento: this.fb.group({
        pais: ['', [Validators.required]],
        ciudad: ['', [Validators.required]]
      }),
      preferenciasOrganizador: this.fb.group({
        gratuito: [false],
        modalidad: ['', [Validators.required]],
        categoria: ['', [Validators.required]]
      }),
      datosOrganizador: this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required, TelefonoValidator.validarTelefonoEspanol]]
      }),
      aceptacion: this.fb.group({
        terminos: [false, [Validators.requiredTrue]]
      })
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.registroEventosForm.valid) {
      this.jsonResult = JSON.stringify(this.registroEventosForm.value, null, 2);
      console.log('Formulario válido:', this.registroEventosForm.value);
    } else {
      console.log('Formulario inválido');
      this.marcarTodosComoTocados();
    }
  }

  marcarTodosComoTocados(): void {
    Object.keys(this.registroEventosForm.controls).forEach(key => {
      const control = this.registroEventosForm.get(key);
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(subKey => {
          control.get(subKey)?.markAsTouched();
        });
      } else {
        control?.markAsTouched();
      }
    });
  }

  // Métodos auxiliares para validación en el template
  getControl(groupName: string, controlName: string) {
    return this.registroEventosForm.get(`${groupName}.${controlName}`);
  }

  isFieldInvalid(groupName: string, controlName: string): boolean {
    const control = this.getControl(groupName, controlName);
    return !!(control && control.invalid && (control.touched || this.formSubmitted));
  }

  getErrorMessage(groupName: string, controlName: string): string {
    const control = this.getControl(groupName, controlName);

    if (control?.errors) {
      if (control.errors['required']) return `El campo ${controlName} es requerido`;
      if (control.errors['minlength']) return `Mínimo ${control.errors['minlength'].requiredLength} caracteres`;
      if (control.errors['maxlength']) return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
      if (control.errors['min']) return `El valor mínimo es ${control.errors['min'].min}`;
      if (control.errors['max']) return `El valor máximo es ${control.errors['max'].max}`;
      if (control.errors['email']) return 'Email inválido';
      if (control.errors['telefonoInvalido']) return 'El teléfono debe tener el formato +34 y 9 dígitos';
    }

    return '';
  }
}
