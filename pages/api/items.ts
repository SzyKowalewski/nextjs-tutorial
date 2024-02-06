// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Item = {
  name: string;
};

const lista =[{name:"zupa"}, {name:"kotlet"}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item []>,
) {
  res.status(200).json( lista );
}
