const REPLICATE_VERSION =
  "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa";
const startGeneration = async (prompt: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/predictions`,
    {
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        version: REPLICATE_VERSION,
        input: { text: prompt },
      }),
    }
  );
  return response.json();
};

const getGeneration = async (id: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/predictions/${id}`,
    {
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );
  return result.json();
};
export default async function handler(req: any, res: any) {
  const { prompt } = req.body;
  if (!prompt) {
    res.status(400).json("No promt provided");
  }
  const predictions = await startGeneration(prompt);
  let generatedImage;
  while (!generatedImage) {
    const result = await getGeneration(predictions.id);
    if (result.status === "succeeded") {
      [generatedImage] = result.output;
    } else if (result.status === "starting") {
      console.log("starting....");
    } else if (result.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  res
    .status(200)
    .json(generatedImage ? generatedImage : "Failed to generate an image");
}
