"use client";

import Logo from "../Logo";
import Pivot from "../Pivot";
import type { ScreenProps } from "./types";

export default function Screen01SignIn({ onNext }: ScreenProps) {
  return (
    <div className="signin">
      <div className="left">
        <div className="row" style={{ gap: 10 }}>
          <Logo size={30} />
          <span style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", lineHeight: "24px" }}>Fulcrum</span>
          <span style={{ color: "#8A8F9C", marginLeft: 6 }}>for FORVIA Purchasing</span>
        </div>
        <div className="hero" style={{ backgroundImage: "url(/assets/signin-hero.png)" }}>
          <div className="bubblewrap">
            <Pivot mood="hello" size={64} />
            <div className="bubble">
              <span style={{ fontWeight: 700 }}>Pivot:</span> Sign in and I&apos;ll walk you through one negotiation, start to finish.
            </div>
          </div>
        </div>
        <div className="col" style={{ gap: 10 }}>
          <div className="headline" style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: "36px" }}>
            Know the supplier. Check the claim.
            <br />
            Decide the price.
          </div>
          <div style={{ color: "#5E6370", fontSize: 14, lineHeight: "21px" }}>
            Supplier history, contract indices, call notes and total cost in one place. Every fact is dated, every step is logged, and a person always decides.
          </div>
        </div>
      </div>
      <div className="right">
        <div className="form">
          <div className="col" style={{ gap: 4 }}>
            <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: "32px" }}>Sign in</div>
            <div style={{ color: "#5E6370", fontSize: 14, lineHeight: "18px" }}>to FORVIA Purchasing · Seating</div>
          </div>
          <button className="sso" onClick={onNext}>
            <svg width="15" height="15" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="10" height="10" fill="#F25022" />
              <rect x="12" width="10" height="10" fill="#7FBA00" />
              <rect y="12" width="10" height="10" fill="#00A4EF" />
              <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
            </svg>
            <span>Continue with FORVIA SSO</span>
          </button>
          <div className="sep">
            <i />
            <span>or with your work email</span>
            <i />
          </div>
          <div className="col" style={{ gap: 6 }}>
            <div className="lab">Work email</div>
            <div className="field focus">category.buyer@forvia.com</div>
          </div>
          <div className="col" style={{ gap: 6 }}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="lab">Password</span>
              <span className="lab" style={{ color: "#5E6370" }}>Forgot?</span>
            </div>
            <div className="field" style={{ fontSize: 16, letterSpacing: "0.18em", lineHeight: "20px" }}>
              ••••••••••
            </div>
          </div>
          <button className="btn primary h44 pulse" style={{ width: "100%" }} onClick={onNext}>
            Sign in
          </button>
        </div>
        <div className="logo-tr" aria-label="FORVIA">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/forvia.png" alt="FORVIA" />
        </div>
        <div className="legal">
          <span>Runs in FORVIA&apos;s own tenant · session cookie only</span>
          <span>Privacy</span>
          <span>Status</span>
        </div>
      </div>
    </div>
  );
}
