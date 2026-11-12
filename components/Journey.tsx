"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import Screen01SignIn from "./screens/Screen01SignIn";
import Screen02Home from "./screens/Screen02Home";
import Screen03Building from "./screens/Screen03Building";
import Screen04Brief from "./screens/Screen04Brief";
import Screen05Claim from "./screens/Screen05Claim";
import Screen06Call from "./screens/Screen06Call";
import Screen07Options from "./screens/Screen07Options";
import Screen08Decide from "./screens/Screen08Decide";
import Screen09Counter from "./screens/Screen09Counter";
import Screen10Agreed from "./screens/Screen10Agreed";

const SCREENS = [
  Screen01SignIn,
  Screen02Home,
  Screen03Building,
  Screen04Brief,
  Screen05Claim,
  Screen06Call,
  Screen07Options,
  Screen08Decide,
  Screen09Counter,
  Screen10Agreed,
];
const LAST = SCREENS.length;

export default function Journey() {
  const router = useRouter();
  const params = useSearchParams();
  const raw = parseInt(params.get("step") ?? "1", 10);
  const step = Number.isFinite(raw) ? Math.min(LAST, Math.max(1, raw)) : 1;

  const [approved, setApproved] = useState(false);
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent">("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const go = useCallback(
    (n: number) => {
      clearTimers();
      setApproved(false);
      setSendState("idle");
      const t = Math.min(LAST, Math.max(1, n));
      router.push(`/?step=${t}`, { scroll: false });
    },
    [router],
  );

  // Each step's primary action. Approve and Send run a short state before moving on.
  const next = useCallback(() => {
    if (step === 8) {
      if (approved) return;
      setApproved(true);
      later(() => go(9), 800);
      return;
    }
    if (step === 9) {
      if (sendState !== "idle") return;
      setSendState("sending");
      later(() => setSendState("sent"), 900);
      later(() => go(10), 1700);
      return;
    }
    if (step >= LAST) {
      go(1);
      return;
    }
    go(step + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, approved, sendState, go]);

  const back = useCallback(() => {
    if (step > 1) go(step - 1);
  }, [step, go]);

  useEffect(() => clearTimers, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "Enter") {
        // Enter on a focused button already clicks it
        if (tag === "BUTTON" || tag === "A") return;
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        back();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, back]);

  const Screen = SCREENS[step - 1];

  return (
    <>
      <Screen key={step} onNext={next} approved={approved} sendState={sendState} onRestart={() => go(1)} />
      <div className="tourbar" role="group" aria-label="Tour controls">
        <button onClick={back} disabled={step === 1} aria-label="Back">
          <ChevronLeft size={14} strokeWidth={2} />
        </button>
        <span className="n">
          {step} / {LAST}
        </span>
        <button onClick={() => go(step + 1)} disabled={step === LAST} aria-label="Skip to next screen">
          <ChevronRight size={14} strokeWidth={2} />
        </button>
        <button onClick={() => go(1)} aria-label="Restart tour" title="Restart tour">
          <RotateCcw size={13} strokeWidth={2} />
        </button>
      </div>
    </>
  );
}
