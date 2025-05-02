import Image from 'next/image';

const testimonials = [
  {
    name: 'Emily Thompson',
    role: 'School Principal',
    organization: 'Lincoln High School',
    quote: 'The Maasai cultural program was an incredible experience for our students. The authenticity and engagement level was beyond our expectations.',
    image: '/testimonials/emily.jpg',
    culture: 'Maasai'
  },
  {
    name: 'Michael Chen',
    role: 'Event Coordinator',
    organization: 'Global Cultural Festival',
    quote: 'The Yoruba performance was the highlight of our festival. The cultural ambassadors brought such energy and authenticity to their presentation.',
    image: '/testimonials/michael.jpg',
    culture: 'Yoruba'
  },
  {
    name: 'David Williams',
    role: 'Corporate Training Director',
    organization: 'Tech Innovations Inc',
    quote: 'Our team building workshop with the Zulu cultural ambassadors was transformative. It brought new perspectives to our workplace culture.',
    image: '/testimonials/david.jpg',
    culture: 'Zulu'
  },
  {
    name: 'Sarah Martinez',
    role: 'Museum Curator',
    organization: 'City Cultural Center',
    quote: 'Working with Tamasha Africa has been exceptional. Their commitment to authentic representation sets them apart.',
    image: '/testimonials/sarah.jpg',
    culture: 'Multiple Programs'
  }
];

const statistics = [
  { number: '50+', label: 'Cultural Events' },
  { number: '10K+', label: 'Participants' },
  { number: '15+', label: 'Partner Organizations' },
  { number: '4.9/5', label: 'Average Rating' }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#A41E34] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Stories</h1>
          <p className="text-xl">
            Hear from organizations and individuals who have experienced the power 
            of authentic African cultural experiences
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#A41E34] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-[#F4E3C1]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#A41E34]">{testimonial.organization}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm text-gray-500">
                  Experience: {testimonial.culture}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the many organizations that have experienced the richness of African cultures
          </p>
          <a
            href="/experiences"
            className="inline-block bg-[#228B22] text-white px-8 py-3 rounded-full hover:bg-[#1B6B1B] transition-colors"
          >
            Book an Experience
          </a>
        </div>
      </section>
    </div>
  );
}