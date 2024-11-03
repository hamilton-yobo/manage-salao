// import type { Metadata } from "next";
// import { Counter } from "./components/counter/Counter";
//
// export default function IndexPage() {
//   return <Counter />;
// }
//
// export const metadata: Metadata = {
//   title: "Redux Toolkit",
// };
import Link from "next/link";
import Colors from "./components/Colors";

function salao() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/dashboard" className="p-2 rounded bg-bluePastel">Dashboard</Link>
      <Colors/>
    </>
  );
}

export default salao;
