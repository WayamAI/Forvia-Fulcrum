"use client";

import { useState, type ReactNode } from "react";
import Sidebar, { type NavId } from "./Sidebar";
import TopBar from "./TopBar";
import PivotDock, { type Seg } from "./PivotDock";
import type { Mood } from "./Pivot";

export type DockProps = {
  mood: Mood;
  step: number;
  text: Seg[];
  buttonLabel?: string;
  onNext: () => void;
  pulseNext?: boolean;
};

export default function AppShell({
  active,
  crumb,
  dock,
  children,
}: {
  active: NavId;
  crumb: string;
  dock: DockProps;
  children: ReactNode;
}) {
  const [drawer, setDrawer] = useState(false);
  return (
    <div className="shell">
      <Sidebar active={active} />
      <div className="main">
        <TopBar crumb={crumb} onMenu={() => setDrawer(true)} />
        <div className="page">
          <div className="page-in">{children}</div>
        </div>
      </div>
      <PivotDock {...dock} />
      <div className={`drawer-wrap${drawer ? " open" : ""}`} onClick={() => setDrawer(false)}>
        <div className="scrim" />
        <div onClick={(e) => e.stopPropagation()}>
          <Sidebar active={active} onNav={() => setDrawer(false)} />
        </div>
      </div>
    </div>
  );
}
