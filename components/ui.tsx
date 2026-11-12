import type { CSSProperties, ReactNode } from "react";
import { Check, X } from "lucide-react";

export const ICON = { size: 16, strokeWidth: 1.8, color: "#5E6370" } as const;

export function Pill({ tone = "gray", size, children, style }: { tone?: "gray" | "green" | "amber" | "red" | "blue" | "violet" | "solid"; size?: "lg" | "md"; children: ReactNode; style?: CSSProperties }) {
  return (
    <span className={`pill ${tone}${size ? " " + size : ""}`} style={style}>
      {children}
    </span>
  );
}

export function Clay({ name, size }: { name: string; size?: "s32" | "s36" | "s40" }) {
  return <span className={`clay${size ? " " + size : ""}`} style={{ backgroundImage: `url(/assets/clay-${name}.png)` }} aria-hidden />;
}

export function Tick({ ok = true, size = 16 }: { ok?: boolean; size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: ok ? "#E7F6EF" : "#FDECEC",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
      }}
    >
      {ok ? <Check size={size - 6} strokeWidth={2.6} color="#16A06A" /> : <X size={size - 6} strokeWidth={2.6} color="#E5484D" />}
    </span>
  );
}

export function SolidTick({ size = 16 }: { size?: number }) {
  return (
    <span aria-hidden style={{ width: size, height: size, borderRadius: "50%", background: "#16A06A", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
      <Check size={size - 6} strokeWidth={2.8} color="#fff" />
    </span>
  );
}

export function PageHeader({ clay, children, title, sub, right }: { clay?: string; children?: ReactNode; title: ReactNode; sub?: ReactNode; right?: ReactNode }) {
  return (
    <div className="hdr">
      {clay && <Clay name={clay} />}
      {children}
      <div className="col" style={{ gap: 4, minWidth: 0 }}>
        <div className="t1">{title}</div>
        {sub && <div className="mut">{sub}</div>}
      </div>
      {right && <div className="grow grow-wrap">{right}</div>}
    </div>
  );
}

/** Table row whose columns are given as fr weights so it keeps proportions on any width. */
export function Tr({ cols, className = "", children, pad, gap }: { cols: string; className?: string; children: ReactNode; pad?: string; gap?: string }) {
  return (
    <div className={`tr ${className}`} style={{ ["--c" as string]: cols, ...(pad ? { ["--pad" as string]: pad } : {}), ...(gap ? { ["--gap" as string]: gap } : {}) }}>
      {children}
    </div>
  );
}
