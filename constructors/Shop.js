//Shop Constructor in place
export default class Shop {
  constructor(name, one, two, three) {
    this.name = name;
    this.availableItems = { one: one, two: two, three: three };
  }
}
