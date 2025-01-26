'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import type { Dictionary } from '@/types/dictionary'

interface ContactFormProps {
  dict: Dictionary['contact']
}

export function ContactForm({ dict }: ContactFormProps) {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
  }

  if (!mounted) {
    return <div className="min-h-screen" />
  }

  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-[#202F49]">{dict.title}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {dict.form.name}
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {dict.form.email}
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              {dict.form.subject}
            </label>
            <input
              type="text"
              id="subject"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              {dict.form.message}
            </label>
            <textarea
              id="message"
              rows={6}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <Button type="submit">{dict.form.submit}</Button>
        </form>
      </div>
    </Container>
  )
}