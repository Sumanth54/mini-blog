const { NextResponse } = require("next/server");

const likes = {}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const count = likes[id] ?? 0;
  return NextResponse.json({ likes: count });
}

export async function POST(request) {
  const { id } = await request.json();
  likes[id] = (likes[id] ?? 0) + 1;
  return NextResponse.json({ likes: likes[id] });
}