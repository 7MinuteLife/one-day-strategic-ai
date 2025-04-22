import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Book Your Training</h2>
        <p className="mb-4">
          Fill out the form below to schedule your One-Day Strategic AI Training session.
        </p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full border rounded px-3 py-2"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border rounded px-3 py-2"
              placeholder="your.email@company.com"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block mb-1">Company</label>
            <input 
              type="text" 
              id="company" 
              className="w-full border rounded px-3 py-2"
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full border rounded px-3 py-2"
              placeholder="Tell us about your team and training needs"
            ></textarea>
          </div>
          
          <button type="submit" className="btn-primary">
            Submit Request
          </button>
        </form>
      </div>
      
      <Link href="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
} 