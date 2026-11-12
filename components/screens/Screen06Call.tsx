"use client";

import { MessageSquare, ShieldCheck } from "lucide-react";
import AppShell from "../AppShell";
import { PageHeader, Pill } from "../ui";
import type { ScreenProps } from "./types";

const REPLIES = [
  "Ask what payment timing would let them hold the price until Q1.",
  "Offer a quarterly index review instead of a fixed rise.",
  "Share the volume forecast for the next two quarters.",
];

export default function Screen06Call({ onNext }: ScreenProps) {
  const tag = (tone: "blue" | "amber" | "red", label: string, w = 90) => (
    <span style={{ width: w, flex: "none" }}>
      <Pill tone={tone} size="md">{label}</Pill>
    </span>
  );
  return (
    <AppShell
      active="negotiations"
      crumb="Negotiations / PU foam, tier 2 / Call notes"
      dock={{
        mood: "explaining",
        step: 5,
        text: [{ t: "With consent from both sides, I turned the call into structure. Their real need is cash flow, not margin." }],
        onNext,
        pulseNext: true,
      }}
    >
      <PageHeader clay="call-notes" title="Call notes" sub="PU foam, tier 2 · call on Tuesday, 10:30 to 10:55" />

      <div className="row wrapm" style={{ background: "#FFF4DC", borderRadius: 10, padding: "12px 16px", gap: 10 }}>
        <ShieldCheck size={18} strokeWidth={1.8} color="#B87400" className="kv-icon" />
        <span style={{ color: "#B87400", fontSize: 14, fontWeight: 600, lineHeight: "18px" }}>Recorded with consent from both sides</span>
        <span style={{ color: "#B87400", fontSize: 13, marginLeft: "auto" }}>Consent logged 10:30</span>
      </div>

      <div className="row2">
        <div className="l col" style={{ gap: 10, ["--lw" as string]: "640px" }}>
          <div className="t2">Transcript</div>
          {[
            ["10:34", "Supplier", "\"Energy costs jump for us in January. We need help with cash flow this quarter.\"", false],
            ["10:41", "Buyer", "\"Is the 6% about margin, or about timing? Help me understand what drives it.\"", true],
            ["10:48", "Supplier", "\"It is timing. And we cannot plan capacity when your volumes keep changing.\"", false],
          ].map(([time, who, quote, buyer]) => (
            <div
              key={time as string}
              className="col"
              style={{
                gap: 6,
                borderRadius: 10,
                padding: "12px 14px",
                background: buyer ? "#fff" : "#F7F8FB",
                border: buyer ? "1px solid #E8E8EC" : "none",
              }}
            >
              <div className="row">
                <Pill>{time as string}</Pill>
                <span className="sm" style={{ fontWeight: 600, color: buyer ? "#0024D3" : "#16181D" }}>{who as string}</span>
              </div>
              <div className="body14">{quote as string}</div>
            </div>
          ))}
        </div>
        <div className="r card col" style={{ gap: 14, ["--rw" as string]: "420px" }}>
          <div className="row">
            <span className="t2">Structure</span>
            <Pill tone="violet">AI summary</Pill>
          </div>
          {[
            ["blue", "Need", "Cash flow this quarter"],
            ["amber", "Constraint", "Energy contract renews in Q1"],
            ["red", "Objection", "FORVIA volumes are uncertain"],
          ].map(([tone, label, text]) => (
            <div key={label} className="row" style={{ gap: 10 }}>
              {tag(tone as "blue", label)}
              <span className="body14" style={{ lineHeight: "18px" }}>{text}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #E8E8EC", paddingTop: 12, color: "#5E6370", fontSize: 12, lineHeight: "17px" }}>
            Each tag links back to a timestamp in the transcript.
          </div>
        </div>
      </div>

      <div className="row2">
        <div className="l col" style={{ gap: 10, ["--lw" as string]: "640px" }}>
          <div className="row">
            <span className="t2">Suggested replies</span>
            <Pill tone="violet">AI draft</Pill>
          </div>
          <div className="tbl">
            {REPLIES.map((r) => (
              <div key={r} className="tr" style={{ ["--c" as string]: "16px minmax(0,1fr) auto", ["--gap" as string]: "10px", ["--pad" as string]: "8px 14px", minHeight: 44 }}>
                <MessageSquare size={16} strokeWidth={1.8} color="#5E6370" className="kv-icon" />
                <span>{r}</span>
                <span className="btn out use" style={{ cursor: "default" }}>Use</span>
              </div>
            ))}
          </div>
        </div>
        <div className="r panel col" style={{ gap: 12, ["--rw" as string]: "420px" }}>
          <div className="t2">Where each tag goes next</div>
          {[
            ["blue", "Need", "Shapes the payment terms in option C"],
            ["amber", "Constraint", "Covered by the quarterly review in option A"],
            ["red", "Objection", "Why option B needs a volume commitment"],
          ].map(([tone, label, text]) => (
            <div key={label} className="row" style={{ gap: 10 }}>
              {tag(tone as "blue", label, 84)}
              <span style={{ fontSize: 13 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
