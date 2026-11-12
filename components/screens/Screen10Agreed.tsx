"use client";

import { useMemo } from "react";
import { Bell, Calendar, Check, ShieldCheck, Upload } from "lucide-react";
import AppShell from "../AppShell";
import { Clay, Pill } from "../ui";
import type { ScreenProps } from "./types";

const TRAIL: [string, string, boolean][] = [
  ["09:02", "Brief built, 14 sources", false],
  ["10:30", "Call notes, consent logged", false],
  ["11:15", "Options A, B, C costed", false],
  ["11:40", "Approved by category manager", false],
  ["11:48", "Sent from Outlook", false],
  ["Thursday", "Supplier accepted", true],
];

function Confetti() {
  const bits = useMemo(() => {
    const colors = ["#0024D3", "#7DF9FF", "#E8A317", "#6E8BFF", "#14A06A", "#E5484D"];
    // fixed pseudo-random sequence so server and client markup match
    return Array.from({ length: 46 }, (_, i) => {
      const r = (n: number) => ((i * 9301 + n * 49297) % 233280) / 233280;
      return {
        left: `${Math.round(r(1) * 100)}%`,
        color: colors[i % colors.length],
        d: `${(1.8 + r(2) * 1.4).toFixed(2)}s`,
        dl: `${(r(3) * 0.5).toFixed(2)}s`,
        x: `${Math.round((r(4) - 0.5) * 160)}px`,
        rot: `${Math.round(360 + r(5) * 540)}deg`,
        w: 6 + Math.round(r(6) * 4),
      };
    });
  }, []);
  return (
    <div className="confetti" aria-hidden>
      {bits.map((b, i) => (
        <i key={i} style={{ left: b.left, background: b.color, width: b.w, ["--d" as string]: b.d, ["--dl" as string]: b.dl, ["--x" as string]: b.x, ["--r" as string]: b.rot }} />
      ))}
    </div>
  );
}

export default function Screen10Agreed({ onNext, onRestart }: ScreenProps) {
  return (
    <>
      <AppShell
        active="audit"
        crumb="Audit trail / PU foam, tier 2 / Agreed and logged"
        dock={{
          mood: "celebrating",
          step: 9,
          text: [{ t: "Done. A week of work, finished before lunch, and every step is on the record. Want to try another request?" }],
          buttonLabel: "Restart tour",
          onNext: onRestart ?? onNext,
          pulseNext: true,
        }}
      >
        <div className="hdr">
          <span style={{ width: 44, height: 44, borderRadius: "50%", background: "#E7F6EF", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#16A06A", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              <Check size={18} strokeWidth={2.6} color="#fff" />
            </span>
          </span>
          <div className="col" style={{ gap: 4, minWidth: 0 }}>
            <div className="t1">Agreed at +2.9%, index-linked</div>
            <div className="mut">PU foam, tier 2 · supplier accepted on Thursday</div>
          </div>
        </div>

        <div className="g maxw" style={{ ["--n" as string]: 3, ["--w" as string]: "760px" }}>
          <div className="tile"><span className="sm mut">Asked</span><span className="num">+6.0%</span></div>
          <div className="tile"><span className="sm mut">Agreed</span><span className="num" style={{ color: "#0024D3" }}>+2.9%</span></div>
          <div className="tile green"><span className="sm" style={{ color: "#16A06A" }}>Avoided</span><span className="num" style={{ color: "#16A06A" }}>EUR 260k a year</span></div>
        </div>

        <div className="row2">
          <div className="l col" style={{ gap: 10, ["--lw" as string]: "760px" }}>
            <div className="t2">Audit trail</div>
            <div className="tbl">
              {TRAIL.map(([t, s, last]) => (
                <div key={t} className="tr" style={{ ["--c" as string]: "90px 7px minmax(0,1fr) auto", ["--gap" as string]: "12px", ["--pad" as string]: "0 16px", minHeight: 40, background: last ? "#F7FBF9" : undefined }}>
                  <span className="mut">{t}</span>
                  <i className={`dot${last ? " green" : ""}`} />
                  <span style={{ fontSize: 14, lineHeight: "18px", fontWeight: last ? 600 : 400 }}>{s}</span>
                  <Pill tone="blue">Sealed</Pill>
                </div>
              ))}
            </div>
          </div>
          <div className="r col" style={{ gap: 14, ["--rw" as string]: "300px" }}>
            <div className="card col" style={{ gap: 8, padding: "14px 16px" }}>
              <div className="row">
                <ShieldCheck size={18} strokeWidth={1.8} color="#16A06A" className="kv-icon" />
                <span className="t3">Chain verified</span>
              </div>
              <div style={{ color: "#5E6370", fontSize: 12, lineHeight: "18px" }}>6 of 6 entries sealed. No entry has been changed since it was written.</div>
            </div>
            <div className="row wrapm">
              <span className="btn out" style={{ cursor: "default" }}>Export trail</span>
              <button className="btn primary" onClick={onRestart ?? onNext}>Back to home</button>
            </div>
            <div className="panel col" style={{ gap: 10, padding: "14px 16px" }}>
              <div className="row" style={{ gap: 10 }}>
                <Clay name="next-steps" size="s36" />
                <span className="t3">Next steps</span>
              </div>
              {[
                [Calendar, "Schedule quarterly review"],
                [Bell, "Set an index alert at +3.5%"],
                [Upload, "Share summary with the director"],
              ].map(([Icon, label]) => {
                const I = Icon as typeof Bell;
                return (
                  <span key={label as string} className="btn out" style={{ justifyContent: "flex-start", cursor: "default", gap: 8, padding: "0 12px", height: 34 }}>
                    <I size={16} strokeWidth={1.8} color="#5E6370" />
                    {label as string}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="card col maxw" style={{ gap: 10, padding: "14px 16px", ["--w" as string]: "760px" }}>
          <div className="row base">
            <span className="t3">Increase avoided, year to date</span>
            <span className="sm mut">all negotiations, Seating</span>
          </div>
          <div className="row base wrapm" style={{ gap: 10 }}>
            <span className="mut">EUR 1.9M this morning</span>
            <span style={{ color: "#16A06A", fontSize: 26, fontWeight: 700, lineHeight: "32px" }}>EUR 2.16M now</span>
            <Pill tone="green">+EUR 260k from this deal</Pill>
          </div>
          <div style={{ display: "flex", height: 6, borderRadius: 3, overflow: "hidden", background: "#EFEFF2" }}>
            <div style={{ width: "88%", background: "#6E8BFF" }} />
            <div style={{ width: "12%", background: "#16A06A" }} />
          </div>
        </div>
      </AppShell>
      <Confetti />
    </>
  );
}
