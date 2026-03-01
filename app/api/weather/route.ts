import { NextResponse } from "next/server";

const OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location")?.trim();

  if (!location) {
    return NextResponse.json(
      { error: "Missing required query param: location" },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server weather API is not configured." },
      { status: 500 }
    );
  }

  try {
    const url = `${OPENWEATHER_URL}?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: `Upstream weather request failed (${response.status})`, details: text.slice(0, 200) },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      name: data?.name,
      country: data?.sys?.country,
      temp: data?.main?.temp,
      feels_like: data?.main?.feels_like,
      humidity: data?.main?.humidity,
      wind_speed: data?.wind?.speed,
      condition: data?.weather?.[0]?.main,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch weather data.", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

