"use client";

import { useEffect, useId, useRef, useState } from "react";

export type Mood =
  | "hello"
  | "thinking"
  | "explaining"
  | "found"
  | "needs"
  | "concerned"
  | "celebrating";

export const MOOD_META: Record<Mood, { label: string; color: string }> = {
  hello: { label: "Hello", color: "#7DF9FF" },
  thinking: { label: "Thinking", color: "#6E8BFF" },
  explaining: { label: "Explaining", color: "#7DF9FF" },
  found: { label: "Found something", color: "#E8A317" },
  needs: { label: "Needs you", color: "#14A06A" },
  concerned: { label: "Concerned", color: "#E5484D" },
  celebrating: { label: "Celebrating", color: "#7DF9FF" },
};

function Face({ mood, gid, bare }: { mood: Mood; gid: string; bare?: boolean }) {
  const grad = (a: string, b: string, c: string) => (
    <defs>
      <radialGradient id={gid} cx="35%" cy="30%" r="80%">
        <stop offset="0" stopColor={a} />
        <stop offset=".5" stopColor={b} />
        <stop offset="1" stopColor={c} />
      </radialGradient>
    </defs>
  );
  const shine = (o = 0.4) => (
    <ellipse cx="60" cy="50" rx="16" ry="9" transform="rotate(-28 60 50)" fill="#FFFFFF" opacity={o} />
  );
  const visor = <rect x="44" y="66" width="72" height="36" rx="18" fill="#0A1033" />;
  const body = (
    <circle cx="80" cy="80" r="56" fill={`url(#${gid})`} />
  );

  switch (mood) {
    case "hello":
      return (
        <>
          <defs>
            <radialGradient id={gid} cx="35%" cy="30%" r="80%">
              <stop offset="0" stopColor="#C9D5FF" />
              <stop offset=".5" stopColor="#4F69FF" />
              <stop offset="1" stopColor="#1A2FD0" />
            </radialGradient>
          </defs>
          {!bare && <circle cx="80" cy="80" r="70" fill="none" stroke="#7DF9FF" strokeWidth="5" />}
          <circle cx="80" cy="80" r="58" fill={`url(#${gid})`} />
          <ellipse cx="60" cy="50" rx="16" ry="9" transform="rotate(-28 60 50)" fill="#FFFFFF" opacity=".45" />
          {visor}
          <path d="M58 89 q8 -11 16 0 M86 89 q8 -11 16 0" fill="none" stroke="#7DF9FF" strokeWidth="6" strokeLinecap="round" />
        </>
      );
    case "thinking":
      return (
        <>
          {grad("#A9BBFF", "#2F4CF0", "#0018A8")}
          <circle cx="80" cy="80" r="68" fill="none" stroke="#6E8BFF" strokeWidth="3" strokeDasharray="10 9" opacity=".7" />
          {body}
          {shine()}
          {visor}
          <circle className="eye" cx="73" cy="79" r="5.5" fill="#7DF9FF" />
          <circle className="eye" cx="99" cy="79" r="5.5" fill="#7DF9FF" />
          <circle cx="128" cy="30" r="6" fill="#6E8BFF" />
          <circle cx="143" cy="19" r="4.5" fill="#6E8BFF" opacity=".7" />
          <circle cx="153" cy="10" r="3" fill="#6E8BFF" opacity=".45" />
        </>
      );
    case "explaining":
      return (
        <>
          {grad("#A9BBFF", "#2F4CF0", "#0018A8")}
          <circle cx="80" cy="80" r="68" fill="none" stroke="#0024D3" strokeWidth="3" opacity=".6" />
          {body}
          {shine()}
          {visor}
          <circle className="eye" cx="66" cy="84" r="6.5" fill="#7DF9FF" />
          <circle className="eye" cx="94" cy="84" r="6.5" fill="#7DF9FF" />
          <circle cx="68" cy="82" r="2" fill="#FFFFFF" />
          <circle cx="96" cy="82" r="2" fill="#FFFFFF" />
        </>
      );
    case "found":
      return (
        <>
          {grad("#A9BBFF", "#2F4CF0", "#0018A8")}
          <circle className="ringpulse" cx="80" cy="80" r="68" fill="none" stroke="#E8A317" strokeWidth="3.5" opacity=".8" />
          {body}
          {shine()}
          {visor}
          <circle className="eye" cx="66" cy="84" r="8.5" fill="#7DF9FF" />
          <circle className="eye" cx="94" cy="84" r="8.5" fill="#7DF9FF" />
          <circle cx="68" cy="81" r="2.5" fill="#FFFFFF" />
          <circle cx="96" cy="81" r="2.5" fill="#FFFFFF" />
          <circle cx="128" cy="30" r="15" fill="#E8A317" />
          <rect x="126" y="20" width="4.5" height="12" rx="2.2" fill="#FFFFFF" />
          <circle cx="128.2" cy="37.5" r="2.6" fill="#FFFFFF" />
        </>
      );
    case "needs":
      return (
        <>
          {grad("#A9BBFF", "#2F4CF0", "#0018A8")}
          <circle cx="80" cy="80" r="68" fill="none" stroke="#14A06A" strokeWidth="3" opacity=".7" />
          <circle cx="80" cy="80" r="76" fill="none" stroke="#14A06A" strokeWidth="1.5" opacity=".3" />
          {body}
          {shine()}
          {visor}
          <rect x="58" y="82" width="16" height="6" rx="3" fill="#7DF9FF" />
          <rect x="86" y="82" width="16" height="6" rx="3" fill="#7DF9FF" />
          <circle cx="128" cy="30" r="15" fill="#14A06A" />
          <path d="M121 30 l5 5 l9 -10" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case "concerned":
      return (
        <>
          {grad("#A9BBFF", "#2F4CF0", "#0018A8")}
          <circle cx="80" cy="80" r="68" fill="none" stroke="#E5484D" strokeWidth="4" opacity=".7" />
          {body}
          {shine()}
          {visor}
          <path d="M57 76 l15 6 M103 76 l-15 6" fill="none" stroke="#FF9A9A" strokeWidth="4.5" strokeLinecap="round" />
          <circle className="eye" cx="66" cy="90" r="5" fill="#FF9A9A" />
          <circle className="eye" cx="94" cy="90" r="5" fill="#FF9A9A" />
        </>
      );
    case "celebrating":
      return (
        <>
          {grad("#A9BBFF", "#2F4CF0", "#0018A8")}
          <circle cx="80" cy="80" r="68" fill="none" stroke="#7DF9FF" strokeWidth="3.5" opacity=".8" />
          {body}
          {shine()}
          {visor}
          <path d="M57 89 q9 -13 18 0 M85 89 q9 -13 18 0" fill="none" stroke="#7DF9FF" strokeWidth="5.5" strokeLinecap="round" />
          <rect x="18" y="20" width="8" height="14" rx="2" transform="rotate(-25 22 27)" fill="#0024D3" />
          <rect x="132" y="14" width="8" height="14" rx="2" transform="rotate(30 136 21)" fill="#7DF9FF" />
          <rect x="142" y="56" width="7" height="12" rx="2" transform="rotate(-15 145 62)" fill="#E8A317" />
          <circle cx="30" cy="58" r="4" fill="#6E8BFF" />
          <circle cx="120" cy="6" r="3.5" fill="#14A06A" />
        </>
      );
  }
}

function Svg({ mood, size, bare }: { mood: Mood; size: number; bare?: boolean }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }} aria-hidden>
      <Face mood={mood} gid={`pg${gid}`} bare={bare} />
    </svg>
  );
}

/** Pivot, the assistant. Moods crossfade; the whole mark floats and blinks. */
export default function Pivot({
  mood,
  size = 48,
  float = true,
  bare = false,
}: {
  mood: Mood;
  size?: number;
  float?: boolean;
  bare?: boolean;
}) {
  const last = useRef<Mood>(mood);
  const [prev, setPrev] = useState<Mood | null>(null);

  useEffect(() => {
    if (last.current === mood) return;
    const old = last.current;
    last.current = mood;
    setPrev(old);
    const t = setTimeout(() => setPrev(null), 380);
    return () => clearTimeout(t);
  }, [mood]);

  return (
    <span
      className={`pivot${float ? " float" : ""}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Pivot, ${MOOD_META[mood].label}`}
    >
      {prev && (
        <span className="layer out" key={`p-${prev}`}>
          <Svg mood={prev} size={size} bare={bare} />
        </span>
      )}
      <span className={prev ? "layer in" : "layer"} key={`c-${mood}`}>
        <Svg mood={mood} size={size} bare={bare} />
      </span>
    </span>
  );
}
