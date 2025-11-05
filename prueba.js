var uniqueInOrder = function (iterable) {
  const caracteres = iterable.toLowerCase().split('');
  let yaVisto = [];
  let repetidos = [];

  for (const char of caracteres) {
    if (yaVistos.includes(char)) {
      if (!duplicados.includes(char)) {
        duplicados.push(char);
      }
    } else {
      yaVistos.push(char);
    }
  }

  return duplicados;
}

function contarRepetidosConArray(texto) {
  const caracteres = texto.toLowerCase().split('');
  const yaVistos = [];
  const duplicados = [];

  for (const char of caracteres) {
    if (yaVistos.includes(char)) {
      if (!duplicados.includes(char)) {
        duplicados.push(char);
      }
    } else {
      yaVistos.push(char);
    }
  }

  return duplicados.length;
}