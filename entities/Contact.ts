export type ContactPayload = {
  name: string
  email: string
  phone?: string
  service_type?: string
  message: string
}

export const Contact = {
  async create(payload: ContactPayload) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error("Failed to submit contact form")
    return res.json()
  },
}
