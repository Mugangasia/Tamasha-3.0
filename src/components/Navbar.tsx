import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-[#A41E34]" aria-label="Tamasha Africa Home">
            Tamasha Africa
          </Link>
          
          <div className="hidden md:flex space-x-8" role="navigation">
            <Link href="/cultures" className="text-gray-700 hover:text-[#A41E34]">
              Cultures
            </Link>
            <Link href="/experiences" className="text-gray-700 hover:text-[#A41E34]">
              Book Experience
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#A41E34]">
              About Us
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-[#A41E34]">
              Testimonials
            </Link>
          </div>

          <button 
            className="md:hidden"
            aria-label="Toggle mobile menu"
            title="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - we'll implement this later with state management */}
      <div className="hidden md:hidden" role="navigation" aria-label="Mobile navigation">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/cultures" className="block px-3 py-2 text-gray-700">
            Cultures
          </Link>
          <Link href="/experiences" className="block px-3 py-2 text-gray-700">
            Book Experience
          </Link>
          <Link href="/about" className="block px-3 py-2 text-gray-700">
            About Us
          </Link>
          <Link href="/testimonials" className="block px-3 py-2 text-gray-700">
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
}