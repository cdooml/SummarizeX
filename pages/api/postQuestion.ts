import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, question } = req.body;
  if (!question) {
    res.status(400).json({
      answer: "something went wrong!",
    });
    return;
  }
  const response = await fetch(
    "http://ec2-52-91-29-8.compute-1.amazonaws.com:8080/query",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        query: question,
      }),
    }
  );

  console.log(response.body);

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let reviewHolder = "";
  let done = false;
  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    reviewHolder += decoder.decode(value);
  }
  console.log(JSON.parse(reviewHolder));
  res.status(200).json({ answer: JSON.parse(reviewHolder).answer });
}
