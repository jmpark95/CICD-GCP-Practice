import Link from "next/link";

export default function Page() {
   return (
      <>
         <Link href="/dashboard">Dashboard</Link>
         <h1>Home page</h1>
         <div>Testing CD for cloud build and cloud run</div>
         <div>changed cloud build trigger to only trigger on push to main</div>
         <div>Testing what happens when cloud build fails. Deliberately failing lint</div>
      </>
   );
}
