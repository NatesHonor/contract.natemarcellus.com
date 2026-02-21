"use client"

import { useState, FormEvent } from "react"

export default function HireModal() {
  const [open, setOpen] = useState(false)
  const [contactMethod, setContactMethod] = useState("")
  const [pricingType, setPricingType] = useState("")

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOpen(false)
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
                type="text"
                placeholder="First Name"
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
              />

              <select
                required
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
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
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
                />
              )}

              {contactMethod === "text" && (
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="+1"
                    required
                    className="w-24 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
                  />
                </div>
              )}

              {contactMethod === "discord" && (
                <input
                  type="text"
                  placeholder="Discord Username (e.g. nate#1234)"
                  required
                  className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
                />
              )}

              <textarea
                placeholder="Services You Need"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
              />

              <select
                required
                value={pricingType}
                onChange={(e) => setPricingType(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
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
                    type="number"
                    placeholder="Rate per hour"
                    required
                    className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
                  />
                  <span className="text-zinc-400">/hr</span>
                </div>
              )}

              {pricingType === "fixed" && (
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400">$</span>
                  <input
                    type="number"
                    placeholder="Total project price"
                    required
                    className="flex-1 px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 focus:border-blue-600 outline-none transition"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
