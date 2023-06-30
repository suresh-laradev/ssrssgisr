import Image from "next/image";
import Dummy from "./dummy/page";
import Loading from "@/components/loading";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loading />}>
        <Dummy />
      </Suspense>
    </main>
  );
}
