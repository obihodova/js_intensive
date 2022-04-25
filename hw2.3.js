myIterable[Symbol.iterator] = function () {
  if (
    !this.from ||
    !this.to ||
    typeof this.from !== "number" ||
    typeof this.to !== "number" ||
    this.to < this.from
  ) {
    throw new Error("Ошибка!");
  }

  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
