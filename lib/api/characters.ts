import Api from ".";

class CharacterApi extends Api {
  constructor() {
    super();
  }

  getAllCharacters = async () => {
    const res = await fetch(`${this.baseUrl}/api/characters`);
    const allCharacters = await res.json();

    return allCharacters;
  };

  getCharacterById = async (id: string = "not found") => {
    const res = await fetch(`${this.baseUrl}/api/characters/${id}`);
    const character = await res.json();

    return character;
  };
}

export default CharacterApi;
