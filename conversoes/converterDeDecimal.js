function converterDeDecimal(decimal = 0, base = 2) {
  if (![2, 8, 16].includes(base)) {
    throw new Error("Base não contemplada. Por favor, use 2, 8 ou 16.");
  }
  if (decimal !== Math.floor(decimal)) {
    throw new Error("O parâmetro « decimal » precisa ser Inteiro.");
  }

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  if (decimal > 0) {
    if (decimal < base) {
      return decimal;
    }

    let quociente = decimal;
    const buffer = [];

    while (quociente > 0) {
      buffer.unshift(quociente % base);
      quociente = Math.floor(quociente / base);
    }

    return base === 16
      ? buffer.map((algarismo) => hex[algarismo]).join("")
      : +buffer.join("");
  } else {
    return 0;
  }
}
