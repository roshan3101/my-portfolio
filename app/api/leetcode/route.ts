import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "roshanSahu3101";

  try {
    const response = await fetch(
      `https://alfa-leetcode-api.onrender.com/${username}/badges`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(10_000),
      }
    );

    const raw = await response.text();
    let payload: unknown = null;
    try {
      payload = raw ? JSON.parse(raw) : null;
    } catch {
      payload = null;
    }

    if (!response.ok) {
      const errorMessage =
        typeof payload === "object" &&
        payload !== null &&
        "error" in payload &&
        typeof (payload as { error?: unknown }).error === "string"
          ? (payload as { error: string }).error
          : `LeetCode API failure (${response.status})`;

      return NextResponse.json(
        {
          error: errorMessage,
          details: payload ? undefined : raw.slice(0, 220),
        },
        { status: response.status }
      );
    }

    if (!payload || typeof payload !== "object") {
      return NextResponse.json(
        {
          error: "LeetCode API returned invalid JSON.",
          details: raw.slice(0, 220),
        },
        { status: 502 }
      );
    }

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch LeetCode data.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502 }
    );
  }
}
