import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function HandoutResourcesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Training Materials & Resources</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Comprehensive Learning Resources</h2>
          <p className="mb-4">
            Participants in our Strategic AI Training receive a complete set of materials to support their learning during and after the session.
          </p>
          <p>
            These resources are designed to provide ongoing reference and practical tools for implementing what you've learned.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">What You'll Receive</h2>
        
        <div className="space-y-8 mb-8">
          <div className="flex items-start border-b pb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Workbook</h3>
              <p>A 50+ page workbook containing all presentation slides, exercise worksheets, and supplementary materials organized by module.</p>
            </div>
          </div>
          
          <div className="flex items-start border-b pb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Strategic Assessment Templates</h3>
              <p>Ready-to-use templates for conducting AI opportunity assessments, data readiness evaluations, and pilot project planning.</p>
            </div>
          </div>
          
          <div className="flex items-start border-b pb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Digital Resource Library</h3>
              <p>Access to our digital library containing additional case studies, research papers, and implementation guides (6-month access included).</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Training Recording</h3>
              <p>A video recording of your session (available for organizational use) to share with team members who couldn't attend or for refresher training.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Post-Training Support</h2>
          <p className="mb-4">
            All participants receive 30 days of email support following the training to address questions that arise as they begin implementing what they've learned.
          </p>
          <p>
            Extended consulting support packages are available for organizations seeking ongoing guidance through their AI implementation journey.
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