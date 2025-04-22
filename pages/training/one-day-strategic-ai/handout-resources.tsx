// pages/training/one-day-strategic-ai/handout-resources.tsx
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function HandoutResourcesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Handout & Resource Development</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Supporting Materials</h2>
          <p className="mb-4">
            Our training program includes comprehensive resources to help participants apply what they've learned.
          </p>
          <p>
            These practical tools are designed to accelerate implementation and maximize the value of your training investment.
          </p>
        </div>
        
        <ul className="list-disc pl-5 mb-8 space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Prompt Engineering Framework</h3>
            <p>Our S.T.A.R.T. template with before/after examples for rapid prompt iteration.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">AI Tool Selection Matrix</h3>
            <p>Compare ChatGPT, Claude, Perplexity, Gamma by function, cost, strengths, and limitations.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Industry-Specific Prompt Libraries</h3>
            <p>Ready-to-use prompts for mortgage, recruiting, coaching, and more.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Implementation Worksheets</h3>
            <p>Task identification, ROI calculator, 90-day plan templates to jump-start your AI rollout.</p>
          </li>
        </ul>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Digital Access</h2>
          <p className="mb-4">
            All resources are provided in both print and digital formats. Participants receive lifetime access to our resource portal where materials are regularly updated with new tools and examples.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Request Sample Materials
          </Link>
        </div>
      </div>
    </Layout>
  )
}
