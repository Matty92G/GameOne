export default class Player {
  constructor(
    name,
    place,
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma,
    Athletics,
    Acrobatics,
    SleightHand,
    Stealth,
    Arcana,
    History,
    Investigation,
    Nature,
    Religion,
    AnimalHandling,
    Insight,
    Medicine,
    Perception,
    Survival,
    Deception,
    Intimidation,
    Performance,
    Persuasion,
    gold,
    inspiration
  ) {
    this.name = name;
    this.place = place;
    this.stats = [
      Strength,
      Dexterity,
      Constitution,
      Intelligence,
      Wisdom,
      Charisma,
    ];
    this.skills = [
      Athletics,
      Acrobatics,
      SleightHand,
      Stealth,
      Arcana,
      History,
      Investigation,
      Nature,
      Religion,
      AnimalHandling,
      Insight,
      Medicine,
      Perception,
      Survival,
      Deception,
      Intimidation,
      Performance,
      Persuasion,
    ];
    this.gold = gold;
    this.inspiration = inspiration;
  }
  updatePlace(place) {
    return (this.place = place);
  }
  updateStr(Str) {
    return (this.stats[0] = stats[0] + Str);
  }
  updateDex(Dex) {
    return (this.stats[1] = stats[1] + Dex);
  }
  updateCon(Con) {
    return (this.stats[2] = stats[2] + Con);
  }
  updateInt(Int) {
    return (this.stats[3] = stats[3] + Int);
  }
  updateWis(Wis) {
    return (this.stats[4] = stats[4] + Wis);
  }
  updateCha(Cha) {
    return (this.stats[5] = stats[5] + Cha);
  }
  updateGold(g) {
    return (this.gold = gold + g);
  }
  updateInspiration(inspiration) {
    return (this.inspiration = !inspiration);
  }
}
