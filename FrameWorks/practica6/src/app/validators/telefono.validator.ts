import { AbstractControl, ValidationErrors } from '@angular/forms';

export class TelefonoValidator {
    static validarTelefonoEspanol(control: AbstractControl): ValidationErrors | null {
        if (!control.value) {
            return null; // El required se maneja con Validators.required
        }

        const telefonoStr = control.value.toString();
        const regex = /^\+34\d{9}$/;

        if (!regex.test(telefonoStr)) {
            return { telefonoInvalido: true };
        }

        return null;
    }
}
