function halves(x) {
  const middle = Math.floor(x.length / 2);

  return [x.substr(0, middle), x.substr(middle)];
}

function add(x, y, description) {
  const maxSize = Math.max(x.length, y.length);
  const [xDigits, yDigits] = [x, y].map((v) => v.padStart(maxSize).split(""));
  const sumDigits = Array(xDigits.length).fill("");

  let overflow = 0;
  for (let i = xDigits.length - 1; i >= 0; i--) {
    const xi = xDigits[i];
    const yi = yDigits[i];

    console.log(`x${i}=${xi}, y${i}=${yi}, overflow=${overflow}`);
    const sum = +xi + +yi + overflow;
    overflow = Number(sum > 9);
    sumDigits[i] = `${sum % 10}`;
  }
  if (overflow === 1) {
    sumDigits.unshift("1");
  }

  const result = sumDigits.join("");
  console.log(
    `${description.result} = ${description.x} + ${description.y} = ${x} + ${y} = ${result}`
  );
  return result;
}

function zeros(length) {
  return Array(length).fill(0).join("");
}

function withoutLeadingZeros(x) {
  let i = 0;

  while (x[i] === "0") {
    i++;
  }

  return x.substr(i);
}

function mult(x, y) {
  if (x.length === 1 && y.length === 1) {
    return `${+x * +y}`.padStart(2, "0");
  }

  const [a, b] = halves(x);
  const [c, d] = halves(y);

  const ac = mult(a, c);
  const ad = mult(a, d);
  const bc = mult(b, c);
  const bd = mult(b, d);

  console.log(`ac=${ac}, ad=${ad}, bc=${bc}, bd=${bd}`);

  const adbc = add(ad, bc, { x: "ad", y: "bc", result: "adbc" });
  const ac00_plus_adbc = add(`${ac}${zeros(a.length)}`, adbc, {
    x: "ac00",
    y: "adbc",
    result: "ac00_plus_adbc",
  });
  const xy = add(`${ac00_plus_adbc}${zeros(b.length)}`, bd, {
    x: "ac0000_plus_adbc00",
    y: "bd",
    result: "xy",
  });

  return xy;
}

const result = withoutLeadingZeros(
  mult(
    "98765432",
    "12345678"
  )
);

console.log(`result=${result}`); // 1219326221002896
