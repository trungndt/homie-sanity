'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setLoading(false)
    if (res.ok) alert('Message sent!')
    else alert('Error sending message.')
  }

  return (
    <div className="form-container p-5 md:p-10 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Tên của bạn *"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-white/30 text-white/80 bg-transparent rounded-md px-4 py-3"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-white/30 text-white/80 bg-transparent rounded-md px-4 py-3"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Điện thoại"
          value={form.phone}
          onChange={handleChange}
          className="w-full border border-white/30 text-white/80 bg-transparent rounded-md px-4 py-3"
        />
        <textarea
          name="message"
          placeholder="Chúng tôi có thể giúp gì cho bạn?"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-white/30 text-white/80 bg-transparent rounded-md px-4 py-3"
          rows={4}
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-gray px-6 py-2 rounded hover:bg-white/20 transition"
        >
          {loading ? 'Đang gửi...' : 'Gửi yêu cầu'}
        </button>
      </form>
    </div>

  )
}
