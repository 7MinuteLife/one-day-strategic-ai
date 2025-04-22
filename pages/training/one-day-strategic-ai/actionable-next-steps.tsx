import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function ActionableNextStepsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Actionable Next Steps</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">After Your Training</h2>
          <p className="mb-4">
            After completing our one-day strategic AI training, your team will be equipped with practical steps to implement what they've learned.
          </p>
          <p>
            This page outlines key actions to take in the days and weeks following the workshop.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Recommended Actions</h2>
        <ol className="list-decimal pl-5 mb-8 space-y-4">
          <li className="pl-2">
            <h3 className="text-xl font-semibold">AI Opportunity Assessment</h3>
            <p>Conduct a workshop with key stakeholders to identify 3-5 high-potential AI use cases specific to your business.</p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">Data Readiness Evaluation</h3>
            <p>Assess your data infrastructure and identify gaps that need to be addressed before implementing AI solutions.</p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">Pilot Project Selection</h3>
            <p>Choose one small-scale pilot project that can demonstrate value within 60-90 days.</p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">Skill Development Plan</h3>
            <p>Create a targeted upskilling plan for team members who will be directly involved in AI initiatives.</p>
          </li>
        </ol>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Schedule Follow-up Consultation
          </Link>
        </div>
      </div>
    </Layout>
  )
} 