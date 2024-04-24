'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function formAction(_: FormState, data: FormData) {
  const payload = await getPayloadHMR({ config })

  const form = await payload.create({
    collection: 'forms',
    data: {
      name: data.get('name') as string,
      email: data.get('email') as string,
      phone: data.get('phone') as string,
      subject: data.get('subject') as string,
      message: data.get('message') as string,
    },
  })
  return {
    name: form.name,
    email: form.email,
    phone: form.phone,
    subject: form.subject,
    message: form.message,
  }
}
