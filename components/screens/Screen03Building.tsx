"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { BarChart3, FileText, MessageSquare, Scale } from "lucide-react";
import AppShell from "../AppShell";
import { Clay, Pill } from "../ui";
import type { ScreenProps } from "./types";

const SOURCES: [string, string, number][] = [
  ["ERP purchase history", "4 years of orders and invoices", 3],
  ["Quality and delivery records", "ppm, late deliveries, 8D reports", 3],
  ["Contract and price clauses", "Price formula and review clause", 2],
  ["Polyol and TDI indices", "Monthly, last 12 months", 2],
  ["Public news, dated", "Trade press and company news", 3],
  ["Past negotiations", "Your closed cases with this supplier", 1],
];
const TOTAL_MS = 4000;

export default function Screen03Building({ onNext }: ScreenProps) {
  const [p, setP] = useState(0); // 0..6 (source index progress)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(6);
      return;
    }
    const t0 = performance.now();
    const id = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / TOTAL_MS);
      setP(k * 6);
      if (k >= 1) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  const done = p >= 6;
  const count = Math.min(14, Math.floor((p / 6) * 14 + 0.0001));
  const pct = (count / 14) * 100;

  return (
    <AppShell
      active="negotiations"
      crumb="Negotiations / PU foam, tier 2 / Building the picture"
      dock={{
        mood: done ? "explaining" : "thinking",
        step: 2,
        text: done
          ? [
              { t: "Brief ready. All 14 sources are read, and every fact I kept has a date and a source. Click " },
              { t: "Next", b: true },
              { t: " to see it." },
            ]
          : [{ t: "I'm reading 14 sources: your ERP, quality records, the contract and public news. Every fact I keep gets a date and a source." }],
        onNext,
        pulseNext: done,
      }}
    >
      <div className="hdr">
        <Clay name="building" />
        <div className="col" style={{ gap: 4, minWidth: 0 }}>
          <div className="t1">{done ? "14 sources read" : "Reading 14 sources"}</div>
          <div className="mut">PU foam, tier 2 · price request +6.0% · started 09:02</div>
        </div>
        <div className="grow grow-wrap">
          <Pill tone={done ? "green" : "blue"} size="lg" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {!done && <i className="dot" />}
            {count} of 14 read
          </Pill>
        </div>
      </div>

      <div className="row2">
        <div className="l" style={{ ["--lw" as string]: "700px" }}>
          <div className="tbl shadow">
            <div className="tr src-row head" style={{ height: "auto", padding: "9px 16px" }}>
              <span />
              <span>Source</span>
              <span className="col-found">Found</span>
              <span>Status</span>
            </div>
            {SOURCES.map(([name, sub, n], i) => {
              const state = p >= i + 1 ? "done" : p >= i ? "run" : "queue";
              const k = Math.min(n, Math.floor((p - i) * n) + 1);
              return (
                <div key={name} className={`tr src-row${state === "run" ? " active" : ""}`}>
                  <span style={{ display: "inline-flex" }}>
                    {state === "done" ? (
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: "#16A06A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                        <Check size={12} strokeWidth={3} color="#fff" />
                      </span>
                    ) : state === "run" ? (
                      <span className="spin blue" style={{ width: 18, height: 18 }} />
                    ) : (
                      <span style={{ width: 18, height: 18, borderRadius: "50%", border: "2.5px solid #D9D9E0" }} />
                    )}
                  </span>
                  <span className="col" style={{ gap: 2 }}>
                    <span className="t3">{name}</span>
                    <span className="sm mut">{sub}</span>
                  </span>
                  <span className="col-found">{state === "run" && n > 1 ? `${k} of ${n} read` : n === 1 ? "1 source" : `${n} sources`}</span>
                  <span>
                    <Pill tone={state === "done" ? "green" : state === "run" ? "blue" : "gray"}>
                      {state === "done" ? "Done" : state === "run" ? "In progress" : "Queued"}
                    </Pill>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="r panel col" style={{ gap: 12, ["--rw" as string]: "330px" }}>
          <div className="row">
            <span className="t3">Supplier brief</span>
            <Pill tone={done ? "green" : "violet"}>{done ? "Ready" : "Drafting"}</Pill>
          </div>
          <div className={`skel${done ? "" : " shimmer"}`} style={{ width: 200, maxWidth: "100%" }} />
          {[0, 1].map((r) => (
            <div key={r} className="row" style={{ gap: 8 }}>
              <div style={{ flex: 1, height: 56, background: "#fff", border: "1px solid var(--line)", borderRadius: 8 }} />
              <div style={{ flex: 1, height: 56, background: "#fff", border: "1px solid var(--line)", borderRadius: 8 }} />
            </div>
          ))}
          {[290, 250, 180].map((w) => (
            <div key={w} className={`skel${done ? "" : " shimmer"}`} style={{ height: 10, borderRadius: 5, width: w, maxWidth: "100%" }} />
          ))}
          <div className="sm mut">Every fact carries a date and a source.</div>
        </div>
      </div>

      <div className="row2">
        <div className="l card col" style={{ gap: 12, ["--lw" as string]: "700px" }}>
          <div className="row base">
            <span className="t2">What Pivot will produce</span>
            <span className="mut">4 outputs, each with its sources</span>
          </div>
          <div className="g outs" style={{ ["--n" as string]: 2 }}>
            {[
              [FileText, "Supplier brief on one page"],
              [BarChart3, "Claim check against the indices"],
              [MessageSquare, "Call notes, once consent is given"],
              [Scale, "Three options on total cost"],
            ].map(([Icon, label], i) => {
              const I = Icon as typeof FileText;
              return (
                <div key={i} className="row">
                  <I size={16} strokeWidth={1.8} color="#5E6370" className="kv-icon" />
                  <span style={{ fontSize: 13 }}>{label as string}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="r panel row" style={{ gap: 12, ["--rw" as string]: "330px" }}>
          <Clay name="timer" />
          <div className="col" style={{ gap: 6, flex: 1 }}>
            <div className="t2">About 2 minutes</div>
            <div className="bar" style={{ background: "#E8E8EC" }}>
              <i style={{ width: `${pct}%`, transition: "width 0.2s linear" }} />
            </div>
            <div className="sm mut">{count} of 14 sources read</div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
