"use client";

import AppShell from "../AppShell";
import Pivot from "../Pivot";
import { Clay, Pill, Tr } from "../ui";
import type { ScreenProps } from "./types";

const CARDS: [string, string, string][] = [
  ["supplier-brief", "Supplier brief", "History, delivery, quality and dated news."],
  ["claim-check", "Claim check", "Ask versus the indices in the contract."],
  ["call-notes", "Call notes", "Needs, constraints and objections, with consent."],
  ["options", "Options and TCO", "Counters priced on total cost of ownership."],
  ["approve", "Approve and send", "Policy checks, approval, logged trail."],
];

export default function Screen02Home({ onNext }: ScreenProps) {
  return (
    <AppShell
      active="home"
      crumb="Home"
      dock={{
        mood: "explaining",
        step: 1,
        text: [
          { t: "A foam supplier wants 6% more. Before you reply, let me pull together everything we know. Click " },
          { t: "Build the full picture", b: true },
          { t: "." },
        ],
        onNext,
      }}
    >
      <div className="hdr">
        <Pivot mood="hello" size={46} bare />
        <div className="t1">Good morning, what are we negotiating today?</div>
      </div>

      <div className="card" style={{ display: "flex", flexDirection: "column", gap: 14, padding: 16, boxShadow: "0 1px 2px #16181D0D" }}>
        <div style={{ color: "#8A8F9C", fontSize: 15, lineHeight: "22px" }}>
          Paste a supplier email or describe the situation… e.g. &quot;Foam supplier wants +6% from Q1, citing raw materials.&quot; Type @ to pick a supplier.
        </div>
        <div className="row wrapm" style={{ gap: 8 }}>
          <span className="chip">
            <i className="dot" />
            @PU foam, tier 2
          </span>
          <span className="chip">Contract SF-2291 ▾</span>
          <span className="chip">Attach email</span>
          <button className="btn primary pulse" style={{ marginLeft: "auto" }} onClick={onNext}>
            Build the full picture
          </button>
        </div>
      </div>

      <div className="g" style={{ ["--n" as string]: 5 }}>
        {CARDS.map(([img, title, sub]) => (
          <div key={title} className="panel p14 col" style={{ gap: 6 }}>
            <Clay name={img} size="s40" />
            <div className="t3">{title}</div>
            <div style={{ color: "#5E6370", fontSize: 12, lineHeight: "17px" }}>{sub}</div>
          </div>
        ))}
      </div>

      <div className="col maxw" style={{ gap: 10 }}>
        <div className="row base">
          <span className="t2">Needs you</span>
          <span className="mut">1 waiting · reply due in 5 working days</span>
        </div>
        <div className="card hi col" style={{ gap: 10, padding: "14px 16px", boxShadow: "0 0 0 4px #0024D314" }}>
          <div className="row">
            <Pill tone="amber" size="md" style={{ padding: "2px 9px" }}>Price request</Pill>
            <span className="sm" style={{ marginLeft: "auto", color: "#8A8F9C" }}>Received 08:12</span>
          </div>
          <div className="body14">
            <b>PU foam, tier 2</b> asks for <b style={{ color: "#0024D3" }}>+6.0%</b> from next quarter, citing raw materials. 23 parts, EUR 8.4M a year:{" "}
            <b style={{ color: "#E5484D" }}>+EUR 504k</b> if accepted.
          </div>
          <div className="row wrapm">
            <button className="btn dark" onClick={onNext}>
              Build the full picture
            </button>
            <span className="btn out h30" style={{ cursor: "default" }}>Open the email</span>
          </div>
        </div>
      </div>

      <div className="col maxw" style={{ gap: 10 }}>
        <div className="t2">Recent negotiations</div>
        <div className="tbl">
          <Tr cols="250fr 150fr 150fr 186fr" className="head" pad="9px 12px">
            <span>Supplier</span>
            <span>Asked</span>
            <span>Agreed</span>
            <span>Status</span>
          </Tr>
          {[
            ["Seat frames, tier 1", "+4.2%", "+1.9%"],
            ["Trim fabric, tier 2", "+3.0%", "Hold"],
          ].map(([a, b, c]) => (
            <Tr key={a} cols="250fr 150fr 150fr 186fr">
              <span>{a}</span>
              <span>{b}</span>
              <span>{c}</span>
              <span>
                <Pill tone="green">Closed</Pill>
              </span>
            </Tr>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
