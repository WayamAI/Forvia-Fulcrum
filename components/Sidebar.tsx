import type { ReactNode } from "react";
import { ArrowRight, BarChart3, Building2, ClipboardList, FileText, Flag, Home, Search, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export type NavId = "home" | "needs" | "negotiations" | "suppliers" | "indices" | "contracts" | "policies" | "audit";

export default function Sidebar({ active, onNav }: { active: NavId; onNav?: (id: NavId) => void }) {
  const item = (id: NavId, label: string, Icon: typeof Home, extra?: ReactNode) => {
    const on = active === id;
    return (
      <div className={`sb-item${on ? " active" : ""}`} role={onNav ? "button" : undefined} onClick={onNav ? () => onNav(id) : undefined} title={label} style={onNav ? { height: 44 } : undefined}>
        <Icon size={16} strokeWidth={1.8} color={id === "home" || on ? "#16181D" : "#5E6370"} className="kv-icon" />
        <span className="lab">{label}</span>
        {extra}
      </div>
    );
  };
  return (
    <nav className="sidebar" aria-label="Main">
      <div className="sb-brand">
        <Logo size={24} />
        <span className="name">Fulcrum</span>
        <span className="team">Seating ▾</span>
      </div>
      <div className="sb-search">
        <Search size={14} strokeWidth={2} color="#8A8F9C" className="kv-icon" />
        <span className="lab">Search suppliers, parts…</span>
      </div>
      <div className="sb-nav">
        {item("home", "Home", Home)}
        {item("needs", "Needs you", Flag, <span className="pill amber grow" style={{ padding: "1px 7px", fontSize: 11, lineHeight: "14px" }}>1</span>)}
        {item(
          "negotiations",
          "Negotiations",
          ArrowRight,
          <span className="grow row" style={{ gap: 5, color: "#0024D3", fontSize: 11, lineHeight: "14px", fontWeight: 400 }}>
            <i className="dot" style={{ width: 6, height: 6, borderRadius: 3 }} />
            4 open
          </span>,
        )}
        <div className="sb-sec">Sourcing</div>
        {item("suppliers", "Suppliers", Building2, <span className="grow" style={{ color: "#8A8F9C", fontSize: 11, lineHeight: "14px", fontWeight: 400 }}>412</span>)}
        {item("indices", "Indices", BarChart3)}
        {item("contracts", "Contracts", FileText)}
        <div className="sb-sec">Workspace</div>
        {item("policies", "Policies", ShieldCheck)}
        {item("audit", "Audit trail", ClipboardList)}
      </div>
      <div className="sb-foot">
        <div className="sb-card">
          <div className="row" style={{ gap: 6 }}>
            <i className="dot green" />
            <span className="sm">FORVIA tenant · private</span>
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="sm mut">Sources connected</span>
            <span className="sm">6 of 6</span>
          </div>
          <div className="bar">
            <i style={{ width: "100%" }} />
          </div>
        </div>
        <div className="sb-user">
          <span className="avatar">B</span>
          <span className="col who">
            <span style={{ fontSize: 13, fontWeight: 500, lineHeight: "16px" }}>Category buyer</span>
            <span style={{ color: "#8A8F9C", fontSize: 11, lineHeight: "14px" }}>Seating · Foam and trim</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
