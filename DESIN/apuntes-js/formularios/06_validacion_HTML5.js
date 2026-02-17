// =====================================================
// VALIDACIÓN HTML5
// =====================================================

// Atributos importantes:
// minlength, maxlength
// min, max, step
// required
// pattern
// disabled, readonly

// Pseudoclases CSS:
// :valid
// :invalid
// :required

// Ejemplo típico:
<input type="text" minlength="5" maxlength="20" required>
<input type="password" minlength="10" required>
<input type="text" pattern="^\\d{7,8}[A-Za-z]$" required>
