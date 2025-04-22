// pages/training/one-day-strategic-ai/curriculum-enhancement.tsx
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function CurriculumEnhancementPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Curriculum Enhancement Options</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Opportunities for Curriculum Improvement</h2>
          <p className="mb-4">
            Our core training program can be enhanced with additional modules and learning approaches to better serve different learning styles and organizational needs.
          </p>
        </div>
        
        <ul className="list-disc pl-5 mb-8 space-y-4">
          <li>
            <strong className="text-xl font-semibold">Structured Learning Paths</strong>
            <p className="mt-1">Guide learners step-by-step from fundamentals through advanced topics, with quizzes and check-ins.</p>
          </li>
          <li>
            <strong className="text-xl font-semibold">Practical Hands-On Exercises</strong>
            <p className="mt-1">Breakout labs where participants build prompts and workflows live, cementing their skills.</p>
          </li>
          <li>
            <strong className="text-xl font-semibold">Industry-Specific Use Cases</strong>
            <p className="mt-1">Tailored tracks (mortgage, recruiting, coaching, L&D) that directly address each sector's unique challenges.</p>
          </li>
          <li>
            <strong className="text-xl font-semibold">Ethical Considerations Deep-Dive</strong>
            <p className="mt-1">Expanded section on data privacy, compliance, and bias mitigation.</p>
          </li>
          <li>
            <strong className="text-xl font-semibold">Technical Support Materials</strong>
            <p className="mt-1">Clear setup guides, troubleshooting tips, and pre-session checklists to reduce friction.</p>
          </li>
        </ul>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Custom Curriculum Development</h2>
          <p className="mb-4">
            We can work with your leadership team to develop a completely customized curriculum that aligns perfectly with your organization's specific AI strategy and implementation goals.
          </p>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/training/one-day-strategic-ai" className="text-blue-600 hover:underline">
            Back to Training Overview
          </Link>
          <Link href="/contact" className="btn-primary">
            Discuss Curriculum Options
          </Link>
        </div>
      </div>
    </Layout>
  )
}

