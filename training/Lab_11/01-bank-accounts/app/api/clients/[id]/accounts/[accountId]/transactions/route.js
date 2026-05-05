// In a server component — form calls the server action directly
import { createClient } from "@/app/actions";

export default function CreateClientForm() {
  return (
    <form action={createClient}>
      <input name="first-name" placeholder="First Name" />
      <input name="last-name"  placeholder="Last Name" />
      <input name="email"      placeholder="Email" />
      <button type="submit">Create Client</button>
    </form>
  );
}

// Note: name attribute on each input MUST match formData.get("...") in the action
