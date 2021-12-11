import Statistic from "./Statistic";

class Statistics {
  level;
  experience;
  statictics;
  constructor(level: number, experience: Statistic, statistics: Statistic[]) {
    this.level = level;
    this.experience = experience;
    this.statictics = statistics;
  }

  levelUp = (): number => {
    return this.level + 1;
  };
}

export default Statistics;
