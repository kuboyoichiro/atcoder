const inspectInput = (input) => {
  if (input < 1 || input > 1000) {
    throw new Error("input error");
  }
}

// inputに入力データ全体が入る
const main = (input) => {
  input = input.split("\n");
  tmp = input[1].split(" ");

  const a = parseInt(input[0], 10);
  inspectInput(a);
  const b = parseInt(tmp[0], 10);
  inspectInput(b);
  const c = parseInt(tmp[1], 10);
  inspectInput(c);
  const s = input[2];
  //出力
  console.log('%d %s',a+b+c,s);
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
