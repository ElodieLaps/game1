import Statistic from "./Statistic";

class Equipment {
  id;
  type;
  position;
  statistics;
  abilities;
  constructor(
    id: string,
    type: string,
    position: string,
    statistics: Statistic[],
    abilities: any[]
  ) {
    this.id = id;
    this.type = type;
    this.position = position;
    this.statistics = statistics;
    this.abilities = abilities;
  }
}

export default Equipment;
