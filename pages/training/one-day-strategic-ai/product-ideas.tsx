import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function ProductIdeasPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Product Ideation Workshop</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">From Strategy to Innovation</h2>
          <p className="mb-4">
            A specialized extension of our core Strategic AI Training, this workshop focuses specifically on identifying and developing AI-powered product and service ideas.
          </p>
          <p>
            Perfect for product teams, innovation departments, and executives looking to create new market offerings leveraging AI capabilities.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Workshop Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
              <div className="text-xl font-bold mb-2">4 Hours</div>
              <div className="text-gray-600">Workshop Duration</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
              <div className="text-xl font-bold mb-2">6-12</div>
              <div className="text-gray-600">Ideal Participants</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
              <div className="text-xl font-bold mb-2">3+</div>
              <div className="text-gray-600">Product Concepts Developed</div>
            </div>
          </div>
          
          <p className="mb-4">
            This hands-on workshop guides participants through a structured process to identify market opportunities, conceptualize AI-powered solutions, and evaluate their feasibility and potential impact.
          </p>
          <p>
            Can be delivered as a standalone session or as a follow-up to our core Strategic AI Training program.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Workshop Modules</h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">1. Market Opportunity Mapping</h3>
              <p>Identify unmet needs and pain points in your market that could be addressed with AI solutions.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">2. AI Capability Assessment</h3>
              <p>Match market opportunities with appropriate AI technologies and capabilities.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">3. Concept Development</h3>
              <p>Develop detailed product concepts including value proposition, feature set, and user experience.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">4. Feasibility Analysis</h3>
              <p>Evaluate concepts based on technical feasibility, resource requirements, and potential ROI.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">5. Roadmap Development</h3>
              <p>Create an implementation roadmap for taking the most promising concepts forward.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>3+ validated AI product or service concepts</li>
            <li>Prioritized opportunity assessment based on market potential</li>
            <li>Technical requirements and implementation considerations</li>
            <li>Initial development roadmap for top concepts</li>
            <li>Documentation of all workshop outputs in a comprehensive report</li>
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Book Product Workshop
          </Link>
        </div>
      </div>
    </Layout>
  )
} 