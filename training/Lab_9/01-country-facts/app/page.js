// app/page.jsx — SERVER COMPONENT
import { read } from "@/repos/countries";
import Countries from "@/components/Countries";
export default async function Home() {
  const data = await read();

  return (
    <main className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Countries</h1>
      <Countries countries={data} />
    </main>
  );
}