import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function CurriculumEnhancementPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Curriculum Enhancement Options</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Tailored Training Solutions</h2>
          <p className="mb-4">
            Our core 7-hour strategic AI training program can be enhanced with additional modules tailored to your organization's specific needs.
          </p>
          <p>
            These optional enhancement modules can be added to create a more comprehensive training experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Industry-Specific Case Studies</h3>
            <p className="mb-4">Deep dive into AI applications specific to your industry with tailored case studies and examples.</p>
            <p className="text-gray-600">Duration: +2 hours</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Technical Deep Dive</h3>
            <p className="mb-4">For teams with technical members, a more detailed exploration of AI technologies and implementation considerations.</p>
            <p className="text-gray-600">Duration: +3 hours</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">AI Ethics Workshop</h3>
            <p className="mb-4">Interactive session focused on ethical considerations, risk management, and governance of AI initiatives.</p>
            <p className="text-gray-600">Duration: +2 hours</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Strategic Planning Session</h3>
            <p className="mb-4">Facilitated workshop to develop a preliminary AI strategy roadmap specific to your organization.</p>
            <p className="text-gray-600">Duration: +4 hours</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Multi-Day Options</h2>
          <p className="mb-4">
            For organizations seeking a more immersive experience, we offer extended 2-3 day programs that combine our core training with multiple enhancement modules and hands-on workshops.
          </p>
          <p>
            Contact us to discuss a custom multi-day curriculum tailored to your specific organizational needs and objectives.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Discuss Custom Options
          </Link>
        </div>
      </div>
    </Layout>
  )
} 