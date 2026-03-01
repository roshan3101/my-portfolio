import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "roshanSahu3101";

  const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/badges`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    console.log("LeetCode API error", payload);
    return NextResponse.json(
      { error: payload?.error || "LeetCode API failure" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
    },
  });
}
