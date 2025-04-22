import Link from 'next/link'

export default function TrainingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">One-Day Strategic AI Training</h1>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Training Overview</h2>
        <p className="mb-4">
          Our intensive 8-hour program helps your team understand and leverage AI for strategic business advantage.
        </p>
        <p>
          This hands-on workshop covers everything from AI fundamentals to practical implementation strategies.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
      <ul className="list-disc pl-5 mb-8 space-y-2">
        <li>AI foundations and key terminology</li>
        <li>Strategic frameworks for AI implementation</li>
        <li>Identifying high-impact AI opportunities</li>
        <li>Practical tools for non-technical professionals</li>
        <li>Ethical considerations and best practices</li>
      </ul>
      
      <Link href="/contact" className="btn-primary">
        Book Your Training
      </Link>
    </div>
  )
} 