import Link from 'next/link'
import { FaHome, FaEnvelope} from 'react-icons/fa'

export default function NotFound() {
  const quickLinks = [
    {
      title: "Mining",
      description: "Explore stories from the mining industry",
    },
    {
      title: "Faith",
      description: "Read about spiritual journeys and reflections",
    },
    {
      title: "Travel",
      description: "Discover travel experiences and adventures",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-3xl">
        <h1 className="text-8xl font-bold text-purple-950 mb-4">404</h1>
        <div className="w-16 h-1 bg-purple-700 mx-auto mb-8"></div>
        
        <h2 className="text-2xl font-semibold text-purple-800 mb-6">
          Oops! This Gem Seems to be Hidden
        </h2>
        
        <p className="text-gray-600 mb-12 max-w-md mx-auto">
          The page you are looking for might have been moved or does not exist. 
          But do not worry, there are plenty more treasures to discover!
        </p>

        {/* Quick Action Buttons */}
        <div className="flex justify-center gap-6 mb-16">
          <Link 
            href="/"
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <FaHome />
            Home
          </Link>
          <Link 
            href="/contact-us"
            className="flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-lg hover:bg-purple-200 transition-colors duration-300"
          >
            <FaEnvelope />
            Contact
          </Link>
        </div>

        {/* Popular Categories */}
        <div className="text-left">
          <h3 className="text-xl font-semibold text-purple-900 mb-6 text-center">
            Explore Popular Categories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="font-semibold text-purple-800 mb-2">
                  {link.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {link.description}
                </p>
                <Link 
                  href={`/?category=${link.title}`}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}