// pages/training/one-day-strategic-ai/key-insights.tsx
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function KeyInsightsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Key Insights & Themes</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">What You'll Gain</h2>
          <p className="mb-4">
            Our Strategic AI Training delivers powerful insights that will transform how your team approaches AI implementation.
          </p>
          <p>
            These key themes run throughout our program and form the foundation of effective AI strategy.
          </p>
        </div>
        
        <ol className="list-decimal pl-5 mb-8 space-y-6">
          <li className="pl-2">
            <h3 className="text-xl font-semibold">The Fundamental Shift from Single-Shot to Strategic Prompting</h3>
            <p>
              Moving beyond one-off questions to multi-step, goal-driven prompts unlocks far better results—
              participants had "light-bulb moments" once they structured their queries.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">AI as Workforce Amplifier, Not Replacement</h3>
            <p>
              AI boosts output so people can focus on creative, high-value work. "Your son with AI is now
              worth double what he was worth," as one attendee put it.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">The Value of AI Literacy in All Industries</h3>
            <p>
              Understanding how AI works—and not just how to use it—is becoming essential across sectors,
              from mortgage to coaching.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">The Emergence of "Agentic" AI Systems</h3>
            <p>
              We can spin up AI "agents" (e.g. a dedicated social-media marketer or CFO) that function like
              specialized team members.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="text-xl font-semibold">Tool Selection Hierarchy</h3>
            <p>
              Different tools for different tasks: ChatGPT for creative writing, Claude for formal docs,
              Perplexity for research, Gamma for slides, etc.
            </p>
          </li>
        </ol>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Participant Feedback</h2>
          <blockquote className="italic border-l-4 border-gray-300 pl-4 py-2 mb-4">
            "The insights gained from this training completely changed how our team approaches AI integration. We're now achieving results we didn't think were possible six months ago."
            <p className="text-gray-600 mt-2 not-italic">— Marketing Director, Financial Services</p>
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
