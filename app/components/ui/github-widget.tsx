"use client";

import { useEffect, useMemo, useState } from "react";

type GitHubResponse = {
  public_repos: number;
  followers: number;
  created_at: string;
};

type Badge = { name: string; icon: string };

const badgeRules: Badge[] = [
  { name: "10+ Repos", icon: "ri-folder-open-fill" },
  { name: "Popular", icon: "ri-user-heart-fill" },
  { name: "Contributor", icon: "ri-medal-line" },
];

const rankIcons = [
  { title: "Open Sourcer", icon: "ri-git-repository-fill" },
  { title: "Star Developer", icon: "ri-star-smile-fill" },
];

export default function GitHubWidget({ username ="roshan3101"}: { username?: string }) {
  const [data, setData] = useState<GitHubResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    let canceled = false;
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/github?username=${encodeURIComponent(username)}`);
        if (!res.ok) {
          throw new Error(`Status ${res.status}`);
        }
        const payload = (await res.json()) as GitHubResponse;
        if (!canceled) {
          setData(payload);
          setStatus("loaded");
        }
      } catch (error) {
        console.error("GitHub API error", error);
        if (!canceled) {
          setStatus("error");
        }
      }
    };
    fetchData();
    return () => {
      canceled = true;
    };
  }, [username]);

  const rank = useMemo(() => {
    if (!data) {
      return rankIcons[0];
    }
    return data.followers > 20 ? rankIcons[1] : rankIcons[0];
  }, [data]);

  const badges = useMemo(() => {
    if (!data) {
      return badgeRules;
    }
    return badgeRules.filter((badge) => {
      if (badge.name.includes("10+")) {
        return data.public_repos >= 10;
      }
      if (badge.name === "Popular") {
        return data.followers > 10;
      }
      return true;
    });
  }, [data]);

  const contributionValue = data
    ? `${data.public_repos * 20 + data.followers * 5}+`
    : "--";

  const joinedText = data
    ? new Date(data.created_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "--";

  return (
    <div className="reveal flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
        <div className="w-8 h-8 bg-neo-green border-2 border-white flex items-center justify-center">
          <i className="ri-github-fill text-lg text-black"></i>
        </div>
        <h3 className="text-2xl font-black uppercase text-white">GITHUB</h3>
      </div>

      <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <i className="ri-github-fill text-3xl text-neo-green"></i>
            <div>
              <h4 className="text-xl font-black text-white leading-tight">{username}</h4>
              <p className="text-[10px] font-mono text-neo-green uppercase tracking-widest">Midnight Coder</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-neo-green tracking-tighter">{contributionValue}</div>
            <p className="text-[8px] font-mono text-gray-500 uppercase">Commits</p>
          </div>
        </div>

        <div className="mb-8 border-2 border-white/20 p-4 bg-neo-black/60 relative group shadow-[4px_4px_0_rgba(51,255,87,0.1)] hover:border-neo-green transition-colors duration-500 h-auto md:h-[160px] flex flex-col">
          <div className="text-[9px] font-mono text-neo-green uppercase tracking-widest opacity-70 mb-3 flex items-center justify-between">
            <span>Trophy_Room</span>
            <span
              className={
                "text-[9px] font-mono uppercase tracking-widest " +
                (status === "loading" ? "animate-pulse text-neo-yellow" : status === "error" ? "text-neo-red" : "text-neo-green")
              }
            >
              {status === "loading" ? "Fetching..." : status === "error" ? "Failed" : "Loaded"}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 flex-1">
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-dashed border-white/10 pb-4 md:pb-0 md:pr-4">
              <div className="text-[8px] font-mono text-gray-400 uppercase mb-2">Highest Rank</div>
              <div className="relative w-full h-full min-h-[60px] flex flex-col items-center justify-center">
                <div className="relative w-12 h-12 mb-2 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full border-2 border-neo-green flex items-center justify-center bg-neo-green/10">
                    <i className={`${rank.icon} text-neo-green text-2xl drop-shadow-[0_0_8px_rgba(51,255,87,0.5)]`}></i>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-white text-center leading-tight max-w-[90px] truncate" title={rank.title}>
                  {rank.title}
                </span>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col relative overflow-hidden">
              <div className="text-[8px] font-mono text-gray-400 uppercase mb-2">Achievements</div>
            <div className="relative w-full flex-1">
                <div className="flex flex-wrap gap-4">
                  {badges.length > 0 ? (
                    badges.map((badge) => (
                      <div
                        key={badge.name}
                        className="min-w-[120px] flex flex-col items-center group/badge bg-white/5 border border-white/10 rounded-lg p-3"
                      >
                        <div className="w-10 h-10 mb-2 flex items-center justify-center border-2 border-white/20 rounded-full bg-white/5">
                          <i className={`${badge.icon} text-neo-green text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]`}></i>
                        </div>
                        <span className="text-[9px] font-mono text-gray-300 font-bold text-center w-full" title={badge.name}>
                          {badge.name}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-[10px] font-mono text-gray-500 w-full text-center py-4">
                      No history awards
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 uppercase">
          <StatCard label="Repositories" value={data?.public_repos ?? "--"} />
          <StatCard label="Followers" value={data?.followers ?? "--"} />
          <StatCard label="Commits" value={contributionValue} />
          <StatCard label="Joined" value={joinedText} />
        </div>

        <div className="flex-1 flex flex-col justify-center mb-8">
          <div className="bg-black border-2 border-neo-green/30 p-2 overflow-hidden shadow-[4px_4px_0_rgba(51,255,87,0.1)] group hover:border-neo-green transition-colors duration-500 relative">
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-neo-green rounded-full animate-pulse"></div>
            <p className="text-[8px] font-mono text-neo-green/50 uppercase tracking-[0.2em] mb-1">Matrix_Output</p>
            <img
              src={`https://ghchart.rshah.org/33FF57/${username}`}
              alt="GitHub Contribution Graph"
              className="w-full h-auto filter brightness-110"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between text-neo-green p-3 border-2 border-white/10 bg-neo-black font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-white/30">$</span>
            <span className="text-neo-green">gh --stats</span>
            <span className="animate-pulse">_</span>
          </div>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            className="text-neo-green px-3 py-1 font-black uppercase border border-neo-green hover:bg-neo-green hover:text-black transition-all"
          >
            VIEW_GH →
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="border-2 border-neo-green/30 bg-neo-black/60 p-4 relative group overflow-hidden hover:border-neo-green transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]">
      <div className="text-[9px] font-mono text-neo-green mb-1 uppercase tracking-widest opacity-70">{label}</div>
      <div className="text-white font-black text-3xl tracking-tighter">{value}</div>
    </div>
  );
}
