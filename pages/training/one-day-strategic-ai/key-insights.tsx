import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function KeyInsightsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Key Insights from Our Training</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
          <p className="mb-4">
            Our strategic AI training provides critical insights that transform how business leaders think about AI implementation.
          </p>
          <p>
            Here are some of the key perspectives you'll gain during our intensive 7-hour program.
          </p>
        </div>
        
        <div className="space-y-8 mb-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">AI is Not a Technology Problem</h3>
            <p>Successful AI implementation is 20% about technology and 80% about people, processes, and organizational culture.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">Start Small, Think Big</h3>
            <p>The most successful AI initiatives begin with focused pilot projects that demonstrate value quickly, then scale methodically.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">Data Strategy is Critical</h3>
            <p>Without quality data and a coherent data strategy, even the most sophisticated AI technologies will fail to deliver value.</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold mb-2">The Ethical Dimension</h3>
            <p>Ethical considerations should be built into AI initiatives from the beginning, not added as an afterthought.</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">From Our Participants</h2>
          <blockquote className="italic border-l-4 border-gray-300 pl-4 py-2 mb-4">
            "This training completely changed my perspective on how AI can be strategically implemented in our organization. The frameworks provided were immediately applicable."
            <p className="text-gray-600 mt-2">— Marketing Director, Fortune 500 Company</p>
          </blockquote>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Book Your Training
          </Link>
        </div>
      </div>
    </Layout>
  )
} 