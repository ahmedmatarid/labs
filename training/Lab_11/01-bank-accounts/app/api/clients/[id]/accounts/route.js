"use server";
import * as clients from "@/repos/clients";
import { revalidatePath } from "next/cache";

export async function createClient(formData) {
  try {
    await clients.create({
      firstName: formData.get("first-name"),
      lastName:  formData.get("last-name"),
      email:     formData.get("email"),
    });
    revalidatePath("/");  // ALWAYS required after data change
  } catch (e) {
    console.error(e.message);
  }
}

export async function deleteClient(formData) {
  try {
    await clients.remove(formData.get("id"));
    revalidatePath("/");
  } catch (e) {
    console.error(e.message);
  }
}
