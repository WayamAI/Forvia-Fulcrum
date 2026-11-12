"use client";

import { Paperclip, FileText } from "lucide-react";
import AppShell from "../AppShell";
import { PageHeader, SolidTick } from "../ui";
import type { ScreenProps } from "./types";

export default function Screen09Counter({ onNext, sendState = "idle" }: ScreenProps) {
  const busy = sendState !== "idle";
  return (
    <>
      <AppShell
        active="negotiations"
        crumb="Negotiations / PU foam, tier 2 / Counter-proposal"
        dock={{
          mood: "needs",
          step: 8,
          text: [
            { t: "I drafted the reply in your words, with the evidence attached. Edit anything, then click " },
            { t: "Send from Outlook", b: true },
            { t: "." },
          ],
          onNext,
          pulseNext: !busy,
        }}
      >
        <PageHeader clay="counter" title="Counter-proposal" sub="Drafted in your voice, ready for you to edit and send" />

        <div className="row2">
          <div className="l card" style={{ padding: 0, overflow: "hidden", ["--lw" as string]: "760px" }}>
            <div className="row" style={{ background: "#F7F8FB", minHeight: 40, padding: "0 16px", gap: 12 }}>
              <span className="mut" style={{ width: 60, flex: "none" }}>To</span>
              <span className="chip" style={{ height: "auto", padding: "2px 10px", fontSize: 13, background: "#fff" }}>Supplier · PU foam, tier 2</span>
            </div>
            <div className="row" style={{ borderTop: "1px solid #E8E8EC", minHeight: 40, padding: "6px 16px", gap: 12 }}>
              <span className="mut" style={{ width: 60, flex: "none" }}>Subject</span>
              <span className="t3">Price revision request: our proposal</span>
            </div>
            <div className="col" style={{ borderTop: "1px solid #E8E8EC", gap: 10, padding: 16 }}>
              <div className="body14">Hello,</div>
              <div className="body14">Thank you for the call on Tuesday. We understand the pressure from energy costs and your need for cash flow this quarter.</div>
              <div className="body14">We propose a price revision of +2.9%, linked to the polyol and TDI indices named in our contract, with a quarterly review. The attached index check and supplier brief show how we arrived at this figure.</div>
              <div className="body14">I am happy to talk this through on a call this week.</div>
              <div className="body14">
                Kind regards,
                <br />
                Category buyer, Seating
              </div>
            </div>
            <div className="row wrapm" style={{ borderTop: "1px solid #E8E8EC", padding: "12px 16px" }}>
              <Paperclip size={14} strokeWidth={1.8} color="#5E6370" className="kv-icon" />
              <span className="chip file">Index check.pdf</span>
              <span className="chip file">Supplier brief.pdf</span>
            </div>
            <div className="row wrapm" style={{ background: "#F7F8FB", borderTop: "1px solid #E8E8EC", padding: "12px 16px" }}>
              <button className={`btn primary${busy ? "" : " pulse"}`} onClick={onNext} disabled={busy}>
                <span className="outlook-ico" aria-hidden />
                {sendState === "sending" ? "Sending..." : sendState === "sent" ? "Sent" : "Send from Outlook"}
              </button>
              <span className="btn out" style={{ cursor: "default" }}>Edit</span>
              <span className="sm mut" style={{ marginLeft: "auto" }}>Nothing is sent until you click Send.</span>
            </div>
          </div>

          <div className="r col" style={{ gap: 12, ["--rw" as string]: "300px" }}>
            <div className="row" style={{ background: "#E7F6EF", borderRadius: 10, padding: "10px 14px" }}>
              <SolidTick />
              <span style={{ color: "#16A06A", fontSize: 13, fontWeight: 600 }}>Approved by category manager · 11:40</span>
            </div>
            <div style={{ color: "#5E6370", fontSize: 12, lineHeight: "18px" }}>
              The draft quotes only figures from the claim check and the approved option. Every attachment is sealed in the audit trail.
            </div>
            <div className="panel col" style={{ gap: 10, padding: "14px 16px" }}>
              <div className="t3">Delivery check</div>
              {["Recipient matches the contract contact", "Figures match the approved option", "2 attachments, no internal notes", "Sent from your own mailbox"].map((t) => (
                <div key={t} className="row">
                  <SolidTick />
                  <span style={{ fontSize: 13 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="g maxw" style={{ ["--n" as string]: 2, ["--w" as string]: "760px" }}>
          {[
            ["Index check.pdf", "2 pages · ask against polyol and TDI"],
            ["Supplier brief.pdf", "1 page · history, contract, signals"],
          ].map(([a, b]) => (
            <div key={a} className="panel row" style={{ gap: 12, padding: "12px 14px" }}>
              <FileText size={26} strokeWidth={1.6} color="#E5484D" className="kv-icon" />
              <div className="col" style={{ gap: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{a}</span>
                <span className="sm mut">{b}</span>
              </div>
            </div>
          ))}
        </div>
      </AppShell>
      {sendState !== "idle" && (
        <div className="toast" role="status">
          {sendState === "sending" ? (
            <>
              <span className="spin" />
              Sending...
            </>
          ) : (
            <>
              <SolidTick />
              Sent
            </>
          )}
        </div>
      )}
    </>
  );
}
