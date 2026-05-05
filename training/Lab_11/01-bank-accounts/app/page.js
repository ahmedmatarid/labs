import * as clients from "@/repos/clients";
import { createClient } from "@/app/actions";

export default async function Home() {
  const data = await clients.read();

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bank Clients</h1>
      <ul className="space-y-2 mb-4">
        {data.map((client) => (
          <li key={client.id} className="border rounded p-3">
            <strong>{client.firstName} {client.lastName}</strong>
            <span className="ml-2 text-gray-500">{client.email}</span>
            <span className="ml-2 text-gray-400">
              {client.accounts.length} account(s)
            </span>
          </li>
        ))}
      </ul>
      <form action={createClient} className="flex gap-2">
        <input name="firstName" placeholder="First"  className="border p-1 rounded" />
        <input name="lastName"  placeholder="Last"   className="border p-1 rounded" />
        <input name="email"     placeholder="Email"  className="border p-1 rounded" />
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
      </form>
    </main>
  );
}