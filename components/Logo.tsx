import { useId } from "react";

/** Fulcrum mark. */
export default function Logo({ size = 24 }: { size?: number }) {
  const id = "lg" + useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", flexShrink: 0 }} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3D5BFF" />
          <stop offset="1" stopColor="#0018A8" />
        </linearGradient>
      </defs>
      <rect width="84" height="84" rx="20" fill={`url(#${id})`} />
      <rect x="16" y="30" width="52" height="8" rx="4" fill="#FFFFFF" />
      <path d="M42 40 L56 62 L28 62 Z" fill="#FFFFFF" />
      <circle cx="22" cy="24" r="5" fill="#7DF9FF" />
      <circle cx="62" cy="24" r="5" fill="#FFFFFF" />
    </svg>
  );
}
