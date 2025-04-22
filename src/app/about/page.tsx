import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Our Training</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="mb-4">
          Our Strategic AI Training program was developed by industry experts with decades of experience
          implementing AI solutions across various sectors including finance, healthcare, and technology.
        </p>
        <p className="mb-4">
          We believe that AI literacy is becoming essential for business leaders, and our training
          provides practical, actionable knowledge that can be immediately applied to your business.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Dr. Jane Smith</h3>
            <p className="text-gray-600 mb-2">AI Strategy Expert</p>
            <p>
              With 15+ years of experience in implementing AI solutions for Fortune 500 companies,
              Dr. Smith specializes in translating technical capabilities into business value.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">John Johnson</h3>
            <p className="text-gray-600 mb-2">Technical Director</p>
            <p>
              A former lead engineer at major tech companies, John bridges the gap between
              technical implementation and strategic thinking in AI adoption.
            </p>
          </div>
        </div>
      </div>
      
      <Link href="/contact" className="btn-primary inline-block mb-4">
        Book Your Training
      </Link>
      
      <div className="mt-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 