export default class Place {
  constructor(name, shops, activities) {
    this.name = name;
    this.shops = [...shops];
    this.availableActivities = [...activities];
  }
}
