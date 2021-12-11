import type { NextApiRequest, NextApiResponse } from "next";
import characters from "../../../mock/characters.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.slug;
  const character = characters.find((character) => character.id === id);

  if (req.method === "GET") {
    if (character) {
      return res.status(200).json(character);
    }
    return res.status(404).json({
      error: { code: 404, message: `character not found by id params : ${id}` },
    });
  }
}
