import { Component } from '@angular/core';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmpresaFormComponent],
  template: `
    <h1>Demo formulario empresa</h1>
    <empresa-form (submitForm)="onEmpresaSubmit($event)"></empresa-form>
  `,
})
export class AppComponent {
  onEmpresaSubmit(data: any) {
    console.log('Datos enviados desde el formulario aislado:', data);
  }
}
