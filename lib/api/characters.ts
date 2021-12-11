import Api from ".";
import Character from "../models/Character";

class CharacterApi extends Api {
  constructor() {
    super();
  }

  getAllCharacters = async () => {
    const res = await fetch(`${this.baseUrl}/api/characters`);
    const allCharacters = await res.json();

    return allCharacters;
  };

  getCharacterById = async (id: string = "") => {
    const res = await fetch(`${this.baseUrl}/api/characters/${id}`);
    const character = await res.json();

    return character;
  };

  createCharacter = async (character: Character) => {
    const res = await fetch(`${this.baseUrl}/api/characters/new`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
    const content = await res.json();
    console.log(content);
  };
}

export default CharacterApi;
