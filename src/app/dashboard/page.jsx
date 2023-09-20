import Link from "next/link";

export default function page() {
   return (
      <>
         <Link href="/">Home</Link>
         <h1>Dashboard</h1>
         <div>/dashboard/</div>
         <div>This code was written after failing CI workflow and fixing up the problem</div>
         <nav>added navbar</nav>
      </>
   );
}
