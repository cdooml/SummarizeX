import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.body;
  if (!url) {
    res.status(400).json({
      answer:
        "Please proide a prompt! Or no database connection! or no balance!",
    });
    return;
  }
  const response = await fetch(
    "http://ec2-52-91-29-8.compute-1.amazonaws.com:8080/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    }
  );

  console.log(response.body);

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let done = false;
  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;

    console.log(decoder.decode(value));
  }
  res.status(200).json({ answer: "success " });
}
