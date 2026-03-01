"use client";

import { useEffect, useState } from "react";

type LeetCodeBadge = {
  displayName: string;
  icon: string;
  creationDate?: string;
};

type LeetCodePayload = {
  activeBadge?: LeetCodeBadge;
  badges?: LeetCodeBadge[];
};

export default function LeetCodeWidget({ username = "roshanSahu3101" }: { username?: string }) {
  const [data, setData] = useState<LeetCodePayload | null>(null);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    let canceled = false;

    const fetchBadges = async () => {
      try {
        const response = await fetch(`/api/leetcode?username=${encodeURIComponent(username)}`);
        if (!response.ok) {
          throw new Error("API error");
        }
        const payload = (await response.json()) as LeetCodePayload;
        if (!canceled) {
          setData(payload);
          setStatus("loaded");
        }
      } catch (error) {
        console.error("LeetCode API error", error);
        if (!canceled) {
          setStatus("error");
        }
      }
    };

    fetchBadges();
    return () => {
      canceled = true;
    };
  }, [username]);

  const badges = data?.badges?.slice(0, 3) ?? [];
  const statusLabel =
    status === "loading" ? "FETCHING" : status === "error" ? "FAILED" : "LOADED";

  return (
    <div className="reveal flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
        <div className="w-8 h-8 bg-neo-orange border-2 border-white flex items-center justify-center">
          <i className="ri-code-box-fill text-lg text-black"></i>
        </div>
        <h3 className="text-2xl font-black uppercase text-white">LEETCODE</h3>
      </div>

      <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="ri-code-box-line text-3xl text-neo-orange"></i>
            <div>
              <h4 className="text-xl font-black text-white leading-tight">{username}</h4>
              <p className="text-[10px] font-mono text-neo-orange uppercase tracking-widest">Problem solver</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-neo-orange tracking-tighter">#Top 7.8%</div>
            <p className="text-[8px] font-mono text-gray-500 uppercase">Ranking</p>
          </div>
        </div>

        <div className="mt-6 border-2 border-white/20 p-4 bg-neutral-950/40 rounded-lg">
          <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.4em] text-gray-400">
            <span>Performance_Badges</span>
            <span
              className={`text-[8px] font-mono uppercase tracking-[0.5em] ${
                status === "loading"
                  ? "animate-pulse text-neo-yellow"
                  : status === "error"
                  ? "text-neo-red"
                  : "text-neo-green"
              }`}
            >
              {statusLabel}
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr,2fr] relative">
            <div className="flex flex-col justify-between gap-4 border border-white/10 bg-[#050505] p-4 min-h-[190px] rounded-md">
              <div className="text-[8px] font-mono text-gray-400 uppercase tracking-[0.4em]">
                Active Badge
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-16 h-16 rounded-full border-2 border-neo-orange flex items-center justify-center bg-neo-orange/10">
                  <i className="ri-lock-2-line text-3xl text-neo-orange drop-shadow-[0_0_10px_rgba(255,156,38,0.6)]"></i>
                </div>
                <span className="text-[11px] font-black uppercase text-white text-center leading-tight">
                  {data?.activeBadge?.displayName ?? "Locked"}
                </span>
                {data?.activeBadge?.creationDate && (
                  <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-gray-500">
                    {data.activeBadge.creationDate}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col border border-white/10 bg-[#050505] p-4 rounded-md min-h-[190px]">
              <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.4em] text-gray-400 mb-4">
                <span>History Awards</span>
                <span className="text-[8px] font-black text-white/60">{badges.length} FOUND</span>
              </div>
              <div className="grid grid-cols-3 gap-3 flex-1">
                {badges.length > 0 ? (
                  badges.map((badge, index) => (
                    <div
                      key={`${badge.displayName}-${index}`}
                      className="flex flex-col items-center p-3 border border-white/10 rounded-md bg-white/5 text-center gap-2"
                    >
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-neo-orange/10">
                        <i className="ri-vip-diamond-fill text-neo-orange text-xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"></i>
                      </div>
                      <span className="text-[9px] font-mono text-gray-300 font-bold truncate" title={badge.displayName}>
                        {badge.displayName}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-[10px] font-mono text-gray-500 col-span-full text-center py-4">
                    No history awards
                  </div>
                )}
              </div>
            </div>

            <span className="hidden md:block absolute inset-y-8 left-[31%] w-px bg-white/20" />
          </div>
        </div>

        <div className="mt-6 border-2 border-neo-orange/30 p-4 overflow-hidden bg-black shadow-[4px_4px_0_rgba(255,107,0,0.15)] group hover:border-neo-orange transition-colors duration-500 relative">
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-neo-orange rounded-full animate-pulse"></div>
          <img
            src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Ubuntu&ext=heatmap`}
            alt="LeetCode Stats"
            className="w-full h-auto object-contain filter contrast-125"
          />
        </div>

        <div className="mt-6 flex items-center justify-between text-neo-orange p-3 border-2 border-white/10 bg-neo-black font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-white/30">$</span>
            <span className="text-neo-orange">leetcode --u</span>
            <span className="animate-pulse">_</span>
          </div>
          <a
            href={`https://leetcode.com/u/${username}/`}
            target="_blank"
            className="text-neo-orange px-3 py-1 font-black uppercase border border-neo-orange hover:bg-neo-orange hover:text-black transition-all"
          >
            VIEW_LC →
          </a>
        </div>
      </div>
    </div>
  );
}
