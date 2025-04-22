import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function NeedsAssessmentPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Training Needs Assessment</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Customized to Your Organization</h2>
          <p className="mb-4">
            Before we deliver our Strategic AI Training, we conduct a comprehensive needs assessment to ensure the program addresses your organization's specific challenges and objectives.
          </p>
          <p>
            This pre-training consultation helps us tailor the content to maximize relevance and impact for your team.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Our Assessment Process</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">1</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Initial Consultation</h3>
              <p>We begin with a 60-minute meeting with key stakeholders to understand your business context, challenges, and strategic priorities.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">2</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Participant Survey</h3>
              <p>We distribute a brief survey to all participants to gauge their current knowledge, expectations, and areas of interest.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">3</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Organizational Readiness Review</h3>
              <p>We assess your current data infrastructure, technical capabilities, and organizational readiness for AI implementation.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">4</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Customized Curriculum Development</h3>
              <p>Based on our findings, we tailor our core curriculum to address your specific industry context, challenges, and goals.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Benefits of Our Approach</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensures the training directly addresses your organization's specific challenges</li>
            <li>Maximizes relevance by incorporating industry-specific examples and use cases</li>
            <li>Accommodates varying levels of technical expertise within your team</li>
            <li>Creates alignment between the training objectives and your strategic business goals</li>
            <li>Builds a foundation for actionable next steps after the training</li>
          </ul>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Schedule Assessment
          </Link>
        </div>
      </div>
    </Layout>
  )
} 