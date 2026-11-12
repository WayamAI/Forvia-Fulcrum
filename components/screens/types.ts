export type ScreenProps = {
  /** Advance the tour (or run the step's own action, such as Approve). */
  onNext: () => void;
  approved?: boolean;
  sendState?: "idle" | "sending" | "sent";
  onRestart?: () => void;
};
