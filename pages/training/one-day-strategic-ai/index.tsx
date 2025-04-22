// pages/training/one-day-strategic-ai/index.tsx
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function OverviewPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">One-Day Strategic AI Training</h1>
        <p className="text-lg mb-8">
          In 8 hours you'll learn core AI concepts, master strategic prompting, run hands-on labs,
          and leave with a personalized 90-day AI action plan.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Program Overview</h2>
          <p className="mb-4">
            Our intensive 7-hour program helps your team understand and leverage AI for strategic business advantage.
          </p>
          <p>
            This hands-on workshop covers everything from AI fundamentals to practical implementation strategies.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Training Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/training/one-day-strategic-ai/key-insights" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Key Insights</h3>
            <p className="text-gray-600">Discover the transformative insights from our training program</p>
          </Link>
          
          <Link href="/training/one-day-strategic-ai/needs-assessment" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Needs Assessment</h3>
            <p className="text-gray-600">Learn how we customize the training to your organization</p>
          </Link>
          
          <Link href="/training/one-day-strategic-ai/handout-resources" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Training Materials</h3>
            <p className="text-gray-600">Overview of the comprehensive resources provided</p>
          </Link>
          
          <Link href="/training/one-day-strategic-ai/actionable-next-steps" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Actionable Next Steps</h3>
            <p className="text-gray-600">What to do after completing the training program</p>
          </Link>
          
          <Link href="/training/one-day-strategic-ai/curriculum-enhancement" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Curriculum Enhancements</h3>
            <p className="text-gray-600">Options to expand and customize the core training</p>
          </Link>
          
          <Link href="/training/one-day-strategic-ai/community-scaling" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Community & Scaling</h3>
            <p className="text-gray-600">Ongoing support and enterprise-wide implementation</p>
          </Link>
          
          <Link href="/training/one-day-strategic-ai/product-ideas" className="block p-4 border rounded-lg hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Product Ideation Workshop</h3>
            <p className="text-gray-600">Specialized workshop for developing AI product ideas</p>
          </Link>
        </div>
        
        <Link href="/contact" className="btn-primary inline-block">
          Book Your Training
        </Link>
      </div>
    </Layout>
  )
}
