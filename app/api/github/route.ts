import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "roshan3101";

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers,
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => null);
    return NextResponse.json(
      {
        error: errorPayload?.message || "Failed to fetch GitHub profile",
      },
      { status: response.status }
    );
  }

  const payload = await response.json();
  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
    },
  });
}
