export default class Place {
  constructor(name, one, two, three) {
    this.name = name;
    this.availableActivities = { one: one, two: two, three: three };
  }
}
