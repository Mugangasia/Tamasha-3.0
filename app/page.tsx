import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-image.jpg"
          alt="African cultural performance"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Africa's Heartbeat, Your Doorstep
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Book Authentic Cultural Experiences Today!
          </p>
          <a
            href="/explore"
            className="bg-[#A41E34] hover:bg-[#8A1929] text-white font-bold py-4 px-8 rounded-full text-lg transition-colors"
          >
            Explore Experiences
          </a>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Tamasha Africa, we connect you with authentic African cultural ambassadors 
            to celebrate the beauty, diversity, and richness of Africa's ethnic traditions. 
            No stereotypes, just real stories and experiences.
          </p>
        </div>
      </section>

      {/* Featured Cultures */}
      <section className="py-20 bg-[#F4E3C1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Cultures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Maasai', 'Yoruba', 'Zulu'].map((culture) => (
              <div key={culture} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={`/${culture.toLowerCase()}.jpg`}
                    alt={`${culture} culture`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{culture}</h3>
                  <a
                    href={`/cultures/${culture.toLowerCase()}`}
                    className="text-[#A41E34] hover:text-[#8A1929] font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#228B22] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bring the Maasai, Yoruba, or Zulu to Your Next Event
          </h2>
          <a
            href="mailto:INFO@TAMASHAAFRICA.COM"
            className="inline-block bg-white text-[#228B22] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
