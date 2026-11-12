import { Suspense } from "react";
import Journey from "@/components/Journey";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Journey />
    </Suspense>
  );
}
