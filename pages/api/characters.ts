import type { NextApiRequest, NextApiResponse } from "next";
import characters from "../../mock/characters.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(characters);
  }
}
