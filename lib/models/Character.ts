import Equipments from "./Equipments";
import Race from "./Race";
import Role from "./Role";
import Statistics from "./Statistics";

export type CharacterType = {
  id: string;
  name: string;
  gender: string;
  status: any;
  race: Race;
  role: Role;
  statistics: Statistics;
  abilities: any;
  equipments: Equipments;
  inventory: any;
};

class Character {
  id;
  name;
  gender;
  status;
  race;
  role;
  statistics;
  abilities;
  equipments;
  inventory;
  constructor({
    id,
    name,
    gender,
    status,
    race,
    role,
    statistics,
    abilities,
    equipments,
    inventory,
  }: CharacterType) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.status = status;
    this.race = race;
    this.role = role;
    this.statistics = statistics;
    this.abilities = abilities;
    this.equipments = equipments;
    this.inventory = inventory;
  }
}

export default Character;
