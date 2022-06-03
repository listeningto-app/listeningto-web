import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `${process.env.API_URL}/user/login`;

  const data = typeof req.body == "string" ? JSON.parse(req.body) : req.body;
  const { email_or_username, password } = data;

  try {
    const ares = await axios.post(url, {
      email_or_username,
      password,
    });
    
    res.status(ares.status).json(ares.data);
  } catch (e: any) {
    res.status(e.response.status).json(e.response.data);
  }
};
