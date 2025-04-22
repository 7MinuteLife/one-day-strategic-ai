import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function CommunityScalingPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Community & Scaling Options</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Expand Your AI Knowledge Network</h2>
          <p className="mb-4">
            The impact of our Strategic AI Training extends beyond the one-day program through our community engagement and extended learning opportunities.
          </p>
          <p>
            Discover how your organization can build ongoing AI capabilities through our community resources and scaled training options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">AI Leadership Community</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Quarterly virtual roundtables with industry peers</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Private online community for ongoing discussion</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Early access to new research and case studies</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Exclusive webinars with AI thought leaders</span>
              </li>
            </ul>
            <p className="text-gray-600 text-sm">
              Included for all training participants for the first 6 months. Annual membership available thereafter.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Enterprise Scaling Programs</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Train-the-trainer certification programs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom LMS integration with your learning platform</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Department-specific curriculum adaptations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Volume pricing for organization-wide deployment</span>
              </li>
            </ul>
            <p className="text-gray-600 text-sm">
              Ideal for organizations looking to build AI capabilities across multiple teams or departments.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Alumni Success Stories</h2>
          <div className="space-y-4">
            <blockquote className="italic">
              "After our initial training, we leveraged the community resources to build a center of excellence for AI within our organization. The ongoing support was instrumental in our successful implementation."
              <p className="text-gray-600 mt-2 not-italic">— CIO, Global Manufacturing Company</p>
            </blockquote>
            <blockquote className="italic">
              "We started with one department and have now trained over 200 employees using the enterprise scaling program. Having consistent AI fluency across our organization has been transformative."
              <p className="text-gray-600 mt-2 not-italic">— Director of Innovation, Healthcare Provider</p>
            </blockquote>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Discuss Scaling Options
          </Link>
        </div>
      </div>
    </Layout>
  )
} 