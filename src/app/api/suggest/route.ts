import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that recommends movies based on user input.",
          },
          {
            role: "user",
            content: `Suggest some movies based on: ${prompt}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const json = await openaiRes.json();

    return NextResponse.json({
      result: json.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "An error occurred while generating recommendations." },
      { status: 500 }
    );
  }
}
