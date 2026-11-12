import { Bell, Menu } from "lucide-react";

export default function TopBar({ crumb, onMenu }: { crumb: string; onMenu: () => void }) {
  return (
    <header className="topbar">
      <button className="hamb" onClick={onMenu} aria-label="Open menu">
        <Menu size={20} strokeWidth={1.8} color="#16181D" />
      </button>
      <div className="crumb">{crumb}</div>
      <div className="right">
        <div className="logo-clip" aria-label="FORVIA">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/forvia.png" alt="FORVIA" />
        </div>
        <Bell size={16} strokeWidth={1.8} color="#5E6370" className="bell" />
        <button className="btn primary h30" style={{ cursor: "default" }} tabIndex={-1}>
          + New negotiation
        </button>
      </div>
    </header>
  );
}
