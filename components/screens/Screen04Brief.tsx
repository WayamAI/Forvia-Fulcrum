"use client";

import { Building2, FileText, Info, ArrowRight } from "lucide-react";
import AppShell from "../AppShell";
import { Clay, PageHeader, Pill } from "../ui";
import type { ScreenProps } from "./types";

export default function Screen04Brief({ onNext }: ScreenProps) {
  return (
    <AppShell
      active="negotiations"
      crumb="Negotiations / PU foam, tier 2 / Supplier brief"
      dock={{
        mood: "explaining",
        step: 3,
        text: [
          { t: "Here is the whole relationship on one page. Notice the " },
          { t: "contract", b: true },
          { t: " is linked to two raw-material indices. That matters next." },
        ],
        onNext,
        pulseNext: true,
      }}
    >
      <PageHeader
        clay="supplier-brief"
        title="Supplier · PU foam, tier 2"
        sub="Relationship 4 years · 23 foam parts · EUR 8.4M a year"
        right={<Pill tone="green" size="lg">Brief ready · 14 sources, all dated</Pill>}
      />

      <div className="g" style={{ ["--n" as string]: 4 }}>
        <div className="tile"><span className="sm mut">On-time delivery</span><span className="num">94%</span><span className="sm mut">last 12 months</span></div>
        <div className="tile"><span className="sm mut">Quality</span><span className="num">38 ppm</span><span className="sm" style={{ color: "#16A06A", fontWeight: 600 }}>improving</span></div>
        <div className="tile"><span className="sm mut">Past price rises</span><span className="num">3</span><span className="sm mut">2023 +2.1% · 2024 +1.8% · 2025 +2.4%</span></div>
        <div className="tile"><span className="sm mut">Share of category spend</span><span className="num">31%</span><span className="sm mut">of foam and trim</span></div>
      </div>

      <div className="row2">
        <div className="l col" style={{ gap: 10, ["--lw" as string]: "640px" }}>
          <div className="row">
            <Clay name="signals" size="s32" />
            <span className="t2">Public signals</span>
            <span className="mut">2 new this quarter</span>
          </div>
          <div className="tbl">
            {[
              ["Signed a new energy contract", "14 Aug", "Trade press"],
              ["Added a second line at its Pune plant", "2 Sep", "Company news"],
            ].map(([a, d, t]) => (
              <div key={a} className="tr" style={{ ["--c" as string]: "7px minmax(0,1fr) auto auto", ["--gap" as string]: "12px", ["--pad" as string]: "14px 16px", fontSize: 14, lineHeight: "18px" }}>
                <i className="dot" />
                <span>{a}</span>
                <Pill>{d}</Pill>
                <Pill tone="blue">{t}</Pill>
              </div>
            ))}
          </div>
          <div className="sm mut">Every signal keeps its date and source.</div>
        </div>
        <div className="r card ring col" style={{ gap: 12, ["--rw" as string]: "420px" }}>
          <div className="row">
            <Clay name="contract" size="s32" />
            <span className="t2">Contract</span>
            <span className="mut">SF-2291</span>
          </div>
          <div className="body14">
            Price is <b>indexed to polyol and TDI</b>, with a <b>quarterly review clause</b>.
          </div>
          <div className="row wrapm">
            <Pill tone="blue" size="md">Polyol index</Pill>
            <Pill tone="blue" size="md">TDI index</Pill>
            <Pill size="md">Review every quarter</Pill>
          </div>
        </div>
      </div>

      <div className="row2">
        <div className="l card col" style={{ gap: 8, ["--lw" as string]: "640px" }}>
          <div className="row base">
            <span className="t2">Price rises, last three years</span>
            <span className="mut">against this ask</span>
          </div>
          <svg className="chart" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 600 }} role="img" aria-label="Price rises of 2.1, 1.8 and 2.4 percent against this ask of 6.0 percent">
            <line x1="20" y1="120" x2="580" y2="120" stroke="#E8E8EC" />
            <rect x="60" y="78" width="70" height="42" rx="5" fill="#6E8BFF" />
            <rect x="170" y="84" width="70" height="36" rx="5" fill="#6E8BFF" />
            <rect x="280" y="72" width="70" height="48" rx="5" fill="#6E8BFF" />
            <rect x="430" y="0" width="70" height="120" rx="5" fill="#E8A317" />
            <g style={{ fontFamily: "var(--font)" }} fontWeight="700" fontSize="13">
              <text x="95" y="70" textAnchor="middle" fill="#16181D">+2.1%</text>
              <text x="205" y="76" textAnchor="middle" fill="#16181D">+1.8%</text>
              <text x="315" y="64" textAnchor="middle" fill="#16181D">+2.4%</text>
              <text x="395" y="20" textAnchor="end" fill="#B87400">+6.0%</text>
            </g>
            <g style={{ fontFamily: "var(--font)" }} fontSize="12">
              <text x="95" y="140" textAnchor="middle" fill="#5E6370">2023</text>
              <text x="205" y="140" textAnchor="middle" fill="#5E6370">2024</text>
              <text x="315" y="140" textAnchor="middle" fill="#5E6370">2025</text>
              <text x="465" y="140" textAnchor="middle" fill="#B87400">This ask</text>
            </g>
          </svg>
        </div>
        <div className="r panel col" style={{ gap: 12, ["--rw" as string]: "420px" }}>
          <div className="t2">Parts at stake</div>
          {[
            [Building2, "Foam parts supplied", "23", "#16181D"],
            [Info, "Single-source parts", "4", "#E5484D"],
            [ArrowRight, "Annual spend", "EUR 8.4M", "#16181D"],
            [FileText, "If the ask is accepted", "+EUR 504k a year", "#E5484D"],
          ].map(([Icon, label, val, col]) => {
            const I = Icon as typeof Building2;
            return (
              <div key={label as string} className="row" style={{ gap: 10 }}>
                <I size={16} strokeWidth={1.8} color="#5E6370" className="kv-icon" />
                <span className="body14" style={{ flex: 1, lineHeight: "18px" }}>{label as string}</span>
                <span className="t3" style={{ color: col as string }}>{val as string}</span>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
