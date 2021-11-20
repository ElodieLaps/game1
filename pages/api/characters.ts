import type { NextApiRequest, NextApiResponse } from "next";
import characters from "../../mock/characters.json";

// type Data = {
//   characters: any;
// };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse // <Data>
) {
  console.log("req", req);
  res.status(200).json(characters);
}
