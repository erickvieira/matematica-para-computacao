function converterParaDecimal(numero = 0, base = 2) {
  if (numero > 0) {
    const algarismos = `${numero}`.split("");
    const pesos = algarismos.map((algarismo, i, { length }) => ({
      algarismo: +algarismo,
      peso: length - i - 1
    }));
    return pesos.reduce((acc, { algarismo, peso }) => (
      acc + (algarismo * Math.pow(base, peso))
    ), 0)
  } else {
    return 0;
  }
}
