class Effect {}

class Ability {
  id;
  effects;
  constructor(id: string, effects: Effect[]) {
    this.id = id;
    this.effects = effects;
  }
}

export default Ability;
