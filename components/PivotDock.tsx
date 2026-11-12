"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Pivot, { MOOD_META, type Mood } from "./Pivot";

export type Seg = { t: string; b?: boolean };

function reduced() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Typed({ segs, textKey }: { segs: Seg[]; textKey: string }) {
  const total = segs.reduce((n, s) => n + s.t.length, 0);
  const [n, setN] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (reduced()) {
      setN(total);
      return;
    }
    setN(0);
    let i = 0;
    timer.current = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= total && timer.current) clearInterval(timer.current);
    }, 25);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textKey, total]);

  const skip = () => {
    if (timer.current) clearInterval(timer.current);
    setN(total);
  };

  let left = n;
  const parts = segs.map((s, i) => {
    const take = Math.max(0, Math.min(left, s.t.length));
    left -= take;
    const txt = s.t.slice(0, take);
    return s.b ? <b key={i}>{txt}</b> : <span key={i}>{txt}</span>;
  });
  const full = segs.map((s) => s.t).join("");

  return (
    <div className="say" onClick={skip} title="Click to show all" aria-label={full}>
      <span aria-hidden>{parts}</span>
    </div>
  );
}

export default function PivotDock({
  mood,
  step,
  text,
  buttonLabel = "Next",
  onNext,
  pulseNext = false,
}: {
  mood: Mood;
  step: number;
  text: Seg[];
  buttonLabel?: string;
  onNext: () => void;
  pulseNext?: boolean;
}) {
  const [open, setOpen] = useState(true);
  const meta = MOOD_META[mood];
  const key = text.map((s) => s.t).join("");

  return (
    <aside className={`dock${open ? "" : " collapsed"}`} aria-label="Pivot, your assistant">
      <div className="head">
        <button className="headbtn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Show or hide Pivot">
          <Pivot mood={mood} size={48} />
          <span className="col" style={{ textAlign: "left" }}>
            <span className="who">Pivot</span>
            <span className="mood" style={{ color: meta.color }}>{meta.label}</span>
          </span>
        </button>
        <span className="stepno">Step {step} of 9</span>
        <span className="collapse" aria-hidden>
          {open ? <ChevronDown size={18} strokeWidth={1.8} /> : <ChevronUp size={18} strokeWidth={1.8} />}
        </span>
      </div>
      <Typed segs={text} textKey={key} />
      <div className="foot">
        <div className="prog">
          <i style={{ width: `${Math.round((step / 9) * 100)}%` }} />
        </div>
        <button className={`next${pulseNext ? " pulse" : ""}`} onClick={onNext}>
          {buttonLabel}
        </button>
      </div>
    </aside>
  );
}
