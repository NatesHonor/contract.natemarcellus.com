"use client"

import { useState, FormEvent } from "react"

export default function HireModal() {
  const [open, setOpen] = useState(false)
  const [contactMethod, setContactMethod] = useState("")
  const [pricingType, setPricingType] = useState("")
  const [statusMessage, setStatusMessage] = useState("")
  const [statusType, setStatusType] = useState<"success" | "error" | "">("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value
    const services = (form.elements.namedItem("services") as HTMLTextAreaElement).value

    let contactValue = ""
    if (contactMethod === "email") {
      contactValue = (form.elements.namedItem("email") as HTMLInputElement).value
    }
    if (contactMethod === "text") {
      const cc = (form.elements.namedItem("countryCode") as HTMLInputElement).value
      const num = (form.elements.namedItem("phone") as HTMLInputElement).value
      contactValue = `${cc} ${num}`
    }
    if (contactMethod === "discord") {
      contactValue = (form.elements.namedItem("discord") as HTMLInputElement).value
    }

    let pricingAmount = ""
    if (pricingType === "hourly") {
      pricingAmount = (form.elements.namedItem("hourlyRate") as HTMLInputElement).value
    }
    if (pricingType === "fixed") {
      pricingAmount = (form.elements.namedItem("fixedPrice") as HTMLInputElement).value
    }

    // hCaptcha token
    const token = (form.elements.namedItem("h-captcha-response") as HTMLInputElement)?.value

    if (!token) {
      setStatusType("error")
      setStatusMessage("Please complete the captcha.")
      return
    }

    try {
      const res = await fetch("https://api.natemarcellus.com/jobs/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          contactMethod,
          contactValue,
          services,
          pricingType,
          pricingAmount,
          token
        })
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatusType("error")
        setStatusMessage(data.error || "Something went wrong.")
        return
      }

      if (data.sent) {
        setStatusType("success")
        setStatusMessage("Your request has been sent successfully.")
        form.reset()
        setContactMethod("")
        setPricingType("")
      } else {
        setStatusType("error")
        setStatusMessage("Unexpected response from server.")
      }
    } catch (err) {
      setStatusType("error")
      setStatusMessage("Network error — could not reach the server.")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Hire Me
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-lg p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-white">
              Project Inquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
              />

              <select
                required
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
              >
                <option value="" disabled>
                  Preferred Contact Method
                </option>
                <option value="email">Email</option>
                <option value="text">Text Message</option>
                <option value="discord">Discord</option>
              </select>

              {contactMethod === "email" && (
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
                />
              )}

              {contactMethod === "text" && (
                <div className="flex gap-3">
                  <input
                    name="countryCode"
                    type="text"
                    placeholder="+1"
                    required
                    className="w-24 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
                  />
                </div>
              )}

              {contactMethod === "discord" && (
                <input
                  name="discord"
                  type="text"
                  placeholder="Discord Username (e.g. nate#1234)"
                  required
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
                />
              )}

              <textarea
                name="services"
                placeholder="Services You Need"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
              />

              <select
                required
                value={pricingType}
                onChange={(e) => setPricingType(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
              >
                <option value="" disabled>
                  Pricing Type
                </option>
                <option value="hourly">Hourly Rate</option>
                <option value="fixed">Fixed Price</option>
              </select>

              {pricingType === "hourly" && (
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400">$</span>
                  <input
                    name="hourlyRate"
                    type="number"
                    placeholder="Rate per hour"
                    required
                    className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
                  />
                  <span className="text-zinc-400">/hr</span>
                </div>
              )}

              {pricingType === "fixed" && (
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400">$</span>
                  <input
                    name="fixedPrice"
                    type="number"
                    placeholder="Total project price"
                    required
                    className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100"
                  />
                </div>
              )}

              <div
                className="h-captcha"
                data-sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                data-theme="dark"
              ></div>

              <script src="https://js.hcaptcha.com/1/api.js" async defer></script>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>

            {statusType && (
              <div
                className={`mt-4 px-4 py-3 rounded-md text-sm font-medium ${
                  statusType === "success"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
