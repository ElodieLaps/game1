export const _statisticsId = {
  experience: "EXPERIENCE",
  health: "HEALTH",
  health_regen: "HEALTH_REGEN",
  mana: "MANA",
  mana_regen: "MANA_REGEN",
  strength: "STRENGTH",
  black_magic: "BLACK_MAGIC",
  white_magic: "WHITE_MAGIC",
  armor: "ARMOR",
  protection: "PROTECTION",
  blessing: "BLESSING",
  swiftness: "SWIFTNESS",
  dodge: "DODGE",
  precision: "PRECISION",
};

class Statistic {
  id;
  name;
  maxValue;
  currentValue;
  progress_index;
  color;
  constructor(
    id: string,
    name: string,
    maxValue: number,
    currentValue: number,
    progress_index: number,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.maxValue = maxValue;
    this.currentValue = currentValue;
    this.progress_index = progress_index;
    this.color = color;
  }

  getName = (): string => {
    switch (this.id) {
      case _statisticsId.experience:
        return "Expérience";
      case _statisticsId.experience:
        return "Expérience";
      case _statisticsId.health:
        return "Points de vie";
      case _statisticsId.health_regen:
        return "Récupération";
      case _statisticsId.mana:
        return "Mana";
      case _statisticsId.mana_regen:
        return "Régénération";
      case _statisticsId.strength:
        return "Force";
      case _statisticsId.black_magic:
        return "Magie noire";
      case _statisticsId.white_magic:
        return "Magie blanche";
      case _statisticsId.armor:
        return "Armure";
      case _statisticsId.protection:
        return "Protection";
      case _statisticsId.blessing:
        return "Bénédiction";
      case _statisticsId.swiftness:
        return "Vitesse";
      case _statisticsId.dodge:
        return "Esquive";
      case _statisticsId.precision:
        return "Précision";
      default:
        return "name not found";
    }
  };

  incrementCurrentValue = (value: number): number => {
    if (this.currentValue + value <= this.maxValue) {
      return (this.currentValue = this.currentValue + value);
    } else return (this.currentValue = this.maxValue);
  };

  decrementCurrentValue = (value: number): number => {
    if (this.currentValue - value > 0) {
      return (this.currentValue = this.currentValue - value);
    } else return (this.currentValue = 0);
  };

  resetStatistic = (): number => {
    return (this.currentValue = this.maxValue);
  };
}

export default Statistic;
