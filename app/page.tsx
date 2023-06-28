import Image from "next/image";
import Dummy from "./dummy/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dummy />
    </main>
  );
}
