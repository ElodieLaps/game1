class Character {
  id;
  name;
  level;
  attacks;
  constructor(id: string, name: string, level: number, attacks: any[]) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.attacks = attacks;
  }
}

export default Character;
