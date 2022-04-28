function selectFromInterval(arr, num1, num2) {
  if (
    !Array.isArray(arr) ||
    arr.find((item) => typeof item !== "number") ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    throw new Error("Ошибка!");
  }
  return num1 < num2
    ? arr.filter((item) => item >= num1 && item <= num2)
    : arr.filter((item) => item >= num2 && item <= num1);
}
