// =====================================================
// URLSearchParams
// =====================================================

// Crear parámetros desde string
const params = new URLSearchParams("nombre=Pepe&edad=20");

for (const p of params) console.log(p);

// Crear parámetros manualmente
const p2 = new URLSearchParams();
p2.append("nombre", "Pepe García");
p2.append("edad", 30);

console.log(p2.toString());

// Métodos útiles:
// append(), get(), set(), has(), delete()
