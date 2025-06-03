document.getElementById('tcoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const cuota1 = parseFloat(document.getElementById('cuota1').value);
  const cuota2 = parseFloat(document.getElementById('cuota2').value);
  const kmsSemana = parseFloat(document.getElementById('kmsSemana').value);
  const cargasSemana = parseInt(document.getElementById('cargasSemana').value);
  const cargasGratis = parseInt(document.getElementById('cargasGratis').value);
  const precioCombustible = parseFloat(document.getElementById('precioCombustible').value);
  const precioKwh = parseFloat(document.getElementById('precioKwh').value);

  const consumoCombustible = 0.06; // litros/km
  const consumoElectrico = 0.15; // kWh/km
  const semanasPorMes = 4.33;

  const costeMensual1 = cuota1 + (kmsSemana * consumoCombustible * precioCombustible * semanasPorMes);
  const costeMensual2 = cuota2 + ((Math.max(0, cargasSemana - cargasGratis) * consumoElectrico * precioKwh * (kmsSemana / cargasSemana)) * semanasPorMes);

  const ahorro = costeMensual1 - costeMensual2;
  const resultado = `El modelo 2 permite un ahorro estimado de €${ahorro.toFixed(2)} al mes frente al modelo 1.`;

  document.getElementById('resultadoTexto').textContent = resultado;
  document.getElementById('resultados').classList.remove('hidden');
});
