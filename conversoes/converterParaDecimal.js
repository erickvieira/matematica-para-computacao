function converterParaDecimal(numero = 0, base = 2) {
  if (![2, 8, 16].includes(base)) {
    throw new Error("Please, use one of these bases: 2, 8 or 16");
  }
  const hex = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  if (numero > 0 || (base === 16 && numero.length > 0)) {
    const algarismos = `${numero}`
      .split("")
      .map((alg) => hex[alg.toUpperCase()]);
    const pesos = algarismos.map((algarismo, i, { length }) => ({
      algarismo: +algarismo,
      peso: length - i - 1,
    }));
    return pesos.reduce(
      (acc, { algarismo, peso }) => acc + algarismo * Math.pow(base, peso),
      0
    );
  } else {
    return 0;
  }
}
