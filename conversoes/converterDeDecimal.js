function converterDeDecimal(decimal = 0, base = 2) {
  if (decimal > 0) {
    if (decimal < base) {
      return decimal;
    }

    let quociente = Math.floor(decimal / base);
    const buffer = [decimal % base];

    while (quociente >= base) {
      quociente = Math.floor(quociente / base);
      buffer.unshift(quociente % base);
    }

    buffer.push(Math.floor(quociente / base));

    return +buffer.join("");
  } else {
    return 0;
  }
}
