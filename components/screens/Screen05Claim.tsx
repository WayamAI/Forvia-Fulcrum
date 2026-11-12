"use client";

import { useEffect, useState } from "react";
import AppShell from "../AppShell";
import { Clay, PageHeader, Pill, Tr } from "../ui";
import type { ScreenProps } from "./types";

const HISTORY = [
  ["Q4 last year", "+0.6", "+0.5", "+0.5"],
  ["Q1", "+0.9", "+0.7", "+0.8"],
  ["Q2", "+1.0", "+0.6", "+0.8"],
  ["Q3", "+0.9", "+0.8", "+0.8"],
];
const COLS = "140fr 100fr 100fr 100fr";

export default function Screen05Claim({ onNext }: ScreenProps) {
  const [found, setFound] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setFound(true), reduce ? 0 : 2300);
    return () => clearTimeout(t);
  }, []);

  const f = { fontFamily: "var(--font)" } as const;

  return (
    <AppShell
      active="negotiations"
      crumb="Negotiations / PU foam, tier 2 / Claim check"
      dock={{
        mood: found ? "found" : "explaining",
        step: 4,
        text: [{ t: "Found something. The indices in the contract moved about 3%. The ask is 6%. That 3.1 point gap is your leverage." }],
        onNext,
        pulseNext: found,
      }}
    >
      <PageHeader
        clay="claim-check"
        title="Claim check"
        sub="The ask against the two indices written into the contract"
        right={<Pill tone="amber" size="lg">Gap found</Pill>}
      />

      <div className="g" style={{ ["--n" as string]: 4 }}>
        <div className="tile"><span className="sm mut">Ask</span><span className="num">+6.0%</span></div>
        <div className="tile"><span className="sm mut">Index movement</span><span className="num" style={{ color: "#0024D3" }}>+2.9%</span></div>
        <div className="tile amber"><span className="sm" style={{ color: "#B87400" }}>Gap</span><span className="num" style={{ color: "#B87400" }}>3.1 points</span></div>
        <div className="tile"><span className="sm mut">Unexplained increase</span><span className="num" style={{ color: "#E5484D" }}>EUR 260k a year</span></div>
      </div>

      <div className="card chartcard" style={{ display: "flex", gap: 24, padding: "16px 20px" }}>
        <div className="col chartcol" style={{ gap: 8, flex: "0 1 700px", minWidth: 0 }}>
          <div className="t3">Price change, next quarter</div>
          <svg className="chart" viewBox="0 0 700 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ask of 6.0 percent against index movement of 2.9 percent, a gap of 3.1 points">
            <line x1="30" y1="210" x2="690" y2="210" stroke="#E8E8EC" />
            <rect className="bar-grow" style={{ ["--dl" as string]: "0.1s" }} x="60" y="108" width="80" height="102" rx="6" fill="#6E8BFF" />
            <rect className="bar-grow" style={{ ["--dl" as string]: "0.25s" }} x="170" y="132" width="80" height="78" rx="6" fill="#6E8BFF" />
            <rect className="bar-grow" style={{ ["--dl" as string]: "0.4s" }} x="280" y="123" width="80" height="87" rx="6" fill="#0024D3" />
            <rect className="bar-grow" style={{ ["--dl" as string]: "0.7s" }} x="440" y="30" width="90" height="180" rx="6" fill="#C9CCD6" />
            <g className="fade-late" style={{ ["--dl" as string]: "1.0s", ...f }} fontSize="14" fontWeight="700">
              <text x="100" y="98" textAnchor="middle" fill="#16181D">+3.4%</text>
              <text x="210" y="122" textAnchor="middle" fill="#16181D">+2.6%</text>
              <text x="320" y="113" textAnchor="middle" fill="#0024D3">+2.9%</text>
              <text x="485" y="20" textAnchor="middle" fill="#16181D">+6.0%</text>
            </g>
            <g style={f} fontSize="13" fill="#5E6370">
              <text x="100" y="230" textAnchor="middle">Polyol</text>
              <text x="210" y="230" textAnchor="middle">TDI</text>
              <text x="320" y="230" textAnchor="middle">Weighted</text>
              <text x="485" y="230" textAnchor="middle">Ask</text>
            </g>
            <g className="fade-late" style={{ ["--dl" as string]: "1.7s" }}>
              <line x1="360" y1="123" x2="585" y2="123" stroke="#E8A317" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="530" y1="30" x2="585" y2="30" stroke="#E8A317" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="575" y1="34" x2="575" y2="119" stroke="#E8A317" strokeWidth="2.5" />
              <path d="M570 41 L575 32 L580 41 M570 112 L575 121 L580 112" fill="none" stroke="#E8A317" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="590" y="72" style={f} fontSize="14" fontWeight="700" fill="#B87400">3.1 point gap</text>
              <text x="590" y="90" style={f} fontSize="12" fill="#B87400">no index explains it</text>
            </g>
          </svg>
        </div>
        <div className="col chartnotes" style={{ gap: 14, flex: "1 1 0", minWidth: 0, paddingTop: 26 }}>
          <div className="body13"><b style={{ color: "#16181D" }}>Polyol and TDI</b> are the two indices named in the contract.</div>
          <div className="body13"><b style={{ color: "#16181D" }}>Weighted +2.9%</b> is what the contract formula supports.</div>
          <div className="body13"><b style={{ color: "#B87400" }}>3.1 points</b> on EUR 8.4M is about EUR 260k a year.</div>
        </div>
      </div>

      <div className="row2">
        <div className="l" style={{ ["--lw" as string]: "440px" }}>
          <div className="tbl">
            <div className="row" style={{ background: "#F7F8FB", padding: "10px 14px" }}>
              <span className="t3">Index history</span>
              <span className="sm mut">change per quarter, %</span>
            </div>
            <Tr cols={COLS} className="" pad="7px 14px">
              <span className="sm mut">Quarter</span>
              <span className="sm mut">Polyol</span>
              <span className="sm mut">TDI</span>
              <span className="sm mut">Weighted</span>
            </Tr>
            {HISTORY.map((r) => (
              <Tr key={r[0]} cols={COLS} pad="7px 14px">
                {r.map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </Tr>
            ))}
            <Tr cols={COLS} className="foot" pad="8px 14px">
              <span>12 months</span>
              <span>+3.4</span>
              <span>+2.6</span>
              <span style={{ color: "#0024D3" }}>+2.9</span>
            </Tr>
          </div>
        </div>
        <div className="r panel col" style={{ gap: 10, padding: "14px 16px", ["--rw" as string]: "310px" }}>
          <div className="row">
            <Clay name="contract" size="s32" />
            <span className="t3">Contract formula</span>
          </div>
          <div className="row"><span style={{ flex: 1, fontSize: 13 }}>Polyol index</span><b style={{ fontWeight: 600, fontSize: 13 }}>40%</b></div>
          <div className="row"><span style={{ flex: 1, fontSize: 13 }}>TDI index</span><b style={{ fontWeight: 600, fontSize: 13 }}>60%</b></div>
          <div style={{ color: "#5E6370", fontSize: 12, lineHeight: "17px" }}>Reviewed every quarter. 40% of +3.4% and 60% of +2.6% gives +2.9%.</div>
        </div>
      </div>

      <div className="row wrapm maxw" style={{ ["--w" as string]: "770px", gap: 8 }}>
        <span className="mut">Sources</span>
        {["Polyol index · 30 Sep", "TDI index · 30 Sep", "Contract SF-2291 · price clause", "Request email · 08:12"].map((s) => (
          <Pill key={s} size="md">{s}</Pill>
        ))}
      </div>
    </AppShell>
  );
}
