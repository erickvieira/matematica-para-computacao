function converterDeDecimal(decimal = 0, base = 2) {
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

    return +buffer.join("");
  } else {
    return 0;
  }
}
