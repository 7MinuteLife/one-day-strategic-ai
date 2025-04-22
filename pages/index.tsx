import Link from 'next/link'
import { Layout } from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold">One‑Day Strategic AI Training</h1>
        <p className="mt-4 text-lg">Level up your team's AI skills in just 8 hours.</p>
        <Link
          href="/training/one-day-strategic-ai"
          className="btn-primary mt-6 inline-block"
        >
          Learn More
        </Link>
      </section>
    </Layout>
  )
} 