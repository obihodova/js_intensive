class Calculator {
  constructor(numX, numY) {
    this.numX = numX;
    this.numY = numY;
    if (
      !isFinite(this.numX) ||
      !isFinite(this.numY) ||
      typeof this.numX !== "number" ||
      typeof this.numY !== "number"
    ) {
      throw new Error("Ошибка!");
    }
  }

  setX(num) {
    if (!isFinite(num) || typeof num !== "number") {
      throw new Error("Ошибка!");
    }
    this.numX = num;
  }

  setY(num) {
    if (!isFinite(num) || typeof num !== "number") {
      throw new Error("Ошибка!");
    }
    this.numY = num;
  }

  logSum() {
    console.log(this.numX + this.numY);
  }

  logMul() {
    console.log(this.numX * this.numY);
  }

  logSub() {
    console.log(this.numX - this.numY);
  }

  logDiv() {
    if (this.numY === 0) {
      throw new Error("Ошибка!");
    }
    console.log(this.numX / this.numY);
  }
}
