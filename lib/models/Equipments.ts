import Equipment from "./Equipment";

class Equipments {
  head;
  arms;
  hands;
  body;
  legs;
  feet;
  weapon;
  shield;
  jewel;
  constructor(
    head: Equipment,
    arms: Equipment,
    hands: Equipment,
    body: Equipment,
    legs: Equipment,
    feet: Equipment,
    weapon: Equipment,
    shield: Equipment,
    jewel: Equipment
  ) {
    this.head = head;
    this.arms = arms;
    this.hands = hands;
    this.body = body;
    this.legs = legs;
    this.feet = feet;
    this.weapon = weapon;
    this.shield = shield;
    this.jewel = jewel;
  }
}

export default Equipments;
