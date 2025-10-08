import type { ContactPayload } from "@/entities/Contact"
import { Contact } from "@/entities/Contact"

export async function createContact(payload: ContactPayload) {
  // Delegate to existing entity method to avoid duplication
  return Contact.create(payload)
}
