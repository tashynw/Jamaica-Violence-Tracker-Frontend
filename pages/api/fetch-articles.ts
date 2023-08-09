import axios from "@/local-api/axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await axios.get(`/cron`);

  console.dir(data);
  return res.status(200).json({ message: `CRON Job Successful` });
}
