import Statistics from "./Statistics";

class Character {
  id;
  name;
  gender;
  race;
  role;
  statistics;
  equipments;
  inventory;
  constructor(
    id: string,
    name: string,
    gender: string,
    race: any,
    role: any,
    statistics: Statistics,
    equipments: any,
    inventory: any
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.race = race;
    this.role = role;
    this.statistics = statistics;
    this.equipments = equipments;
    this.inventory = inventory;
  }
}

export default Character;
