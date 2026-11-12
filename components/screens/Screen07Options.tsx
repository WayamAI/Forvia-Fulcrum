"use client";

import { Info } from "lucide-react";
import AppShell from "../AppShell";
import { PageHeader, Pill, Tick, Tr } from "../ui";
import type { ScreenProps } from "./types";

type Opt = { id: string; title: string; big: string; sub: string; items: [boolean, string][]; rec?: boolean; bigColor?: string };

const OPTS: Opt[] = [
  {
    id: "A",
    rec: true,
    title: "+2.9% index-linked, reviewed quarterly",
    big: "+EUR 244k",
    sub: "a year",
    bigColor: "#0024D3",
    items: [
      [true, "Backed by the contract index"],
      [true, "Quarterly review covers their energy renewal"],
      [false, "Price still moves with the indices"],
    ],
  },
  {
    id: "B",
    title: "+3.5% fixed for a 24-month volume commitment",
    big: "+EUR 294k",
    sub: "a year",
    items: [
      [true, "Price certainty for 24 months"],
      [false, "Commits FORVIA volumes that are uncertain"],
      [false, "EUR 50k a year more than A"],
    ],
  },
  {
    id: "C",
    title: "Hold price, payment terms 60 to 45 days",
    big: "+EUR 0 price",
    sub: "cash cost about EUR 70k a year",
    items: [
      [true, "Unit price stays flat"],
      [true, "Speaks to their cash flow need"],
      [false, "Does not cover their Q1 energy renewal"],
    ],
  },
];

const SC = "200fr 180fr 180fr 200fr";

export default function Screen07Options({ onNext }: ScreenProps) {
  return (
    <AppShell
      active="negotiations"
      crumb="Negotiations / PU foam, tier 2 / Options"
      dock={{
        mood: "explaining",
        step: 6,
        text: [{ t: "Three options, each priced on total cost. A is backed by the contract index, and the quarterly review covers their energy renewal." }],
        onNext,
        pulseNext: true,
      }}
    >
      <PageHeader
        clay="options"
        title="Options"
        sub="Three counters, priced as annual cost impact on EUR 8.4M spend"
        right={<Pill tone="gray" size="lg">Ask was +6.0%, EUR 504k a year</Pill>}
      />

      <div className="g gap16 c3ok" style={{ ["--n" as string]: 3 }}>
        {OPTS.map((o) => (
          <div key={o.id} className={`card ${o.rec ? "ring" : ""} col`} style={{ gap: 12 }}>
            <div className="row">
              <span style={{ fontSize: 13, fontWeight: 600 }}>Option {o.id}</span>
              {o.rec && <Pill tone="solid">Recommended</Pill>}
            </div>
            <div className="opt-title" style={{ fontSize: 16, fontWeight: 600, lineHeight: "22px", minHeight: 44 }}>{o.title}</div>
            <div className="col" style={{ gap: 2 }}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: "34px", color: o.bigColor ?? "#16181D" }}>{o.big}</div>
              <div className="sm mut">{o.sub}</div>
            </div>
            <div className="col" style={{ gap: 8, borderTop: "1px solid #E8E8EC", paddingTop: 12 }}>
              {o.items.map(([ok, t]) => (
                <div key={t} className="row top">
                  <Tick ok={ok} />
                  <span style={{ fontSize: 13, lineHeight: "18px" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="row2">
        <div className="l col" style={{ gap: 24, ["--lw" as string]: "760px" }}>
          <div className="row" style={{ background: "#F7F8FB", borderRadius: 10, padding: "12px 16px", gap: 10, flexWrap: "wrap" }}>
            <i className="dot" />
            <span className="t3">Total cost of ownership, not unit price.</span>
            <span className="mut">Each option includes price, payment terms and volume terms.</span>
          </div>
          <div className="col" style={{ gap: 10 }}>
            <div className="row base">
              <span className="t2">Sensitivity</span>
              <span className="mut">if the indices move by 1 point</span>
            </div>
            <div className="tbl">
              <Tr cols={SC} className="head" pad="9px 14px">
                <span>Option</span>
                <span>Indices fall 1 point</span>
                <span>Today</span>
                <span>Indices rise 1 point</span>
              </Tr>
              <Tr cols={SC} pad="10px 14px">
                <b style={{ color: "#0024D3", fontWeight: 600 }}>A, index-linked</b>
                <span>+EUR 160k</span>
                <b style={{ fontWeight: 600 }}>+EUR 244k</b>
                <span>+EUR 328k</span>
              </Tr>
              <Tr cols={SC} pad="10px 14px">
                <b style={{ fontWeight: 600 }}>B, fixed 24 months</b>
                <span>+EUR 294k</span>
                <b style={{ fontWeight: 600 }}>+EUR 294k</b>
                <span>+EUR 294k</span>
              </Tr>
              <Tr cols={SC} pad="10px 14px">
                <b style={{ fontWeight: 600 }}>C, hold price</b>
                <span>about EUR 70k cash</span>
                <b style={{ fontWeight: 600 }}>about EUR 70k cash</b>
                <span>about EUR 70k cash</span>
              </Tr>
            </div>
            <div className="row">
              <Info size={16} strokeWidth={1.8} color="#5E6370" className="kv-icon" />
              <span className="mut">Option A stays below option B unless the indices rise by about 0.6 points more.</span>
            </div>
          </div>
        </div>
        <div className="r panel col" style={{ gap: 10, padding: "14px 16px", ["--rw" as string]: "320px" }}>
          <div className="t3">Why Pivot recommends A</div>
          {["Matches the two indices in the contract", "EUR 260k a year below the ask", "Quarterly review answers the energy renewal"].map((t) => (
            <div key={t} className="row top">
              <Tick />
              <span style={{ fontSize: 13, lineHeight: "18px" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
