"use client";

import { ArrowRight, Calendar, Check, FileText, User } from "lucide-react";
import AppShell from "../AppShell";
import Pivot from "../Pivot";
import { PageHeader, Pill, Tr } from "../ui";
import type { ScreenProps } from "./types";

export default function Screen08Decide({ onNext, approved }: ScreenProps) {
  const mini = (Icon: typeof User, label: string, tail?: string) => (
    <div className="row" style={{ gap: 8 }}>
      <Icon size={16} strokeWidth={1.8} color="#5E6370" className="kv-icon" />
      <span style={{ flex: 1, fontSize: 13 }}>{label}</span>
      {tail && <span className="sm mut">{tail}</span>}
    </div>
  );
  return (
    <AppShell
      active="negotiations"
      crumb="Negotiations / PU foam, tier 2 / Decide"
      dock={{
        mood: "needs",
        step: 7,
        text: [
          { t: "Everything checks out, with one flag: four parts are single-source. A person decides here. Click " },
          { t: "Approve", b: true },
          { t: " when you are ready." },
        ],
        onNext,
        pulseNext: !approved,
      }}
    >
      <PageHeader
        clay="approve"
        title="Decide"
        sub="Policy checks for option A before anything leaves the building"
        right={
          approved ? (
            <Pill tone="green" size="lg">Approved by category manager</Pill>
          ) : (
            <Pill tone="amber" size="lg">Waiting for the category manager</Pill>
          )
        }
      />

      <div className="row2">
        <div className="l col" style={{ gap: 10, ["--lw" as string]: "640px" }}>
          <div className="row base">
            <span className="t2">Checks</span>
            <span className="mut">2 passed · 1 flagged</span>
          </div>
          <div className="tbl">
            {[
              ["Within category guardrail", "Max +3.5% without director sign-off. This deal: +2.9%", true],
              ["Supply risk for this supplier", "Stable", true],
              ["Single-source parts", "4 of 23 parts have no second supplier", false],
            ].map(([t, s, ok]) => (
              <div key={t as string} className="tr" style={{ ["--c" as string]: "minmax(0,1fr) auto", ["--gap" as string]: "12px", ["--pad" as string]: "12px 16px" }}>
                <span className="col" style={{ gap: 2 }}>
                  <span className="t3">{t as string}</span>
                  <span className="sm mut">{s as string}</span>
                </span>
                <Pill tone={ok ? "green" : "red"}>{ok ? "Pass" : "Flag"}</Pill>
              </div>
            ))}
          </div>
          <div className="row" style={{ background: "#FDECEC", borderRadius: 10, padding: "10px 14px", gap: 12 }}>
            <Pivot mood="concerned" size={32} float={false} />
            <div style={{ fontSize: 13, lineHeight: "19px" }}>
              <b>Pivot is concerned.</b> If this supplier slows down, four parts have no fallback. Worth a note in the decision.
            </div>
          </div>
        </div>

        <div className="r card hi col" style={{ gap: 12, ["--rw" as string]: "430px" }}>
          <div className="row">
            <Pill tone="amber" size="md" style={{ padding: "2px 9px" }}>Needs you</Pill>
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, lineHeight: "24px" }}>Approve option A, +2.9% index-linked</div>
          <div className="body13">+EUR 244k a year on EUR 8.4M, against an ask of EUR 504k. Reviewed quarterly against polyol and TDI.</div>
          <div className="row" style={{ borderTop: "1px solid #E8E8EC", paddingTop: 12 }}>
            <span className="avatar" style={{ width: 22, height: 22 }}>C</span>
            <span className="mut">
              Approver: <b style={{ color: "#16181D", fontWeight: 600 }}>Category manager</b>
            </span>
          </div>
          <div className="row wrapm">
            <button className={`btn primary h40${approved ? " green" : " pulse"}`} style={{ paddingInline: 28 }} onClick={onNext} disabled={approved}>
              {approved && <Check size={16} strokeWidth={2.4} />}
              {approved ? "Approved" : "Approve"}
            </button>
            <span className="btn out h40" style={{ cursor: "default" }}>Ask for changes</span>
          </div>
        </div>
      </div>

      <div className="g gap16 w3" style={{ ["--n" as string]: 3 }}>
        <div className="panel col" style={{ gap: 10, padding: "14px 16px" }}>
          <div className="t3">What the supplier gets</div>
          {mini(ArrowRight, "+2.9%, linked to polyol and TDI")}
          {mini(Calendar, "A review every quarter")}
          {mini(FileText, "Payment terms stay at 60 days")}
        </div>
        <div className="panel col" style={{ gap: 10, padding: "14px 16px" }}>
          <div className="t3">Who is notified</div>
          {mini(User, "Category manager", "approves")}
          {mini(User, "Supplier contact", "after you send")}
          {mini(User, "Seating director", "copy only")}
        </div>
        <div className="card col" style={{ gap: 10, padding: "14px 16px", boxShadow: "none" }}>
          <div className="row">
            <span className="t3">Audit preview</span>
            <span className="sm mut">last 3 entries</span>
          </div>
          {[
            ["09:02", "Brief built, 14 sources"],
            ["10:30", "Call notes, consent logged"],
            ["11:15", "Options A, B, C costed"],
          ].map(([t, s]) => (
            <div key={t} className="row" style={{ gap: 10 }}>
              <span className="sm mut" style={{ width: 44, flex: "none" }}>{t}</span>
              <span style={{ flex: 1, fontSize: 13 }}>{s}</span>
              <Pill tone="blue">Sealed</Pill>
            </div>
          ))}
        </div>
      </div>

      <div className="col maxw" style={{ gap: 8, ["--w" as string]: "700px" }}>
        <div className="row base">
          <span className="t3">Past decisions with this supplier</span>
          <span className="sm mut">all logged in the audit trail</span>
        </div>
        <div className="tbl">
          <Tr cols="160fr 160fr 366fr" className="head" pad="7px 14px">
            <span className="sm">Year</span>
            <span className="sm">Price rise agreed</span>
            <span className="sm">Decided by</span>
          </Tr>
          {[
            ["2023", "+2.1%"],
            ["2024", "+1.8%"],
            ["2025", "+2.4%"],
          ].map(([y, r]) => (
            <Tr key={y} cols="160fr 160fr 366fr" pad="8px 14px">
              <span>{y}</span>
              <span>{r}</span>
              <span>Category manager</span>
            </Tr>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

