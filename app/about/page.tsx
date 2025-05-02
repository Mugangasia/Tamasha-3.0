import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarah Omondi',
    role: 'Founder & Cultural Director',
    bio: 'With over 15 years of experience in cultural preservation, Sarah founded Tamasha Africa to bridge the gap between African traditions and global audiences.',
    image: '/team/sarah.jpg'
  },
  {
    name: 'John Mbeki',
    role: 'Performance Coordinator',
    bio: 'A former professional dancer, John works directly with cultural ambassadors to create authentic and engaging performances.',
    image: '/team/john.jpg'
  },
  {
    name: 'Amina Hassan',
    role: 'Educational Programs Manager',
    bio: 'Amina develops educational content and workshops that make African cultures accessible to students and organizations.',
    image: '/team/amina.jpg'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Mission Section */}
      <section className="bg-[#A41E34] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl leading-relaxed">
            Tamasha Africa was born from a vision to preserve and share authentic African 
            cultural traditions with the world. We believe in creating meaningful 
            connections through direct experiences with genuine cultural ambassadors.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F4E3C1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We work directly with cultural keepers to ensure genuine representation 
                of African traditions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F4E3C1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cultural Preservation</h3>
              <p className="text-gray-600">
                We are committed to preserving and promoting African cultural heritage 
                for future generations.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#F4E3C1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="text-gray-600">
                We believe in creating immersive learning experiences that foster 
                cultural understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#F4E3C1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#A41E34] mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join Us in Celebrating African Culture</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're an organization looking to host a cultural event or a 
            cultural ambassador interested in joining our network, we'd love to hear from you.
          </p>
          <a
            href="mailto:INFO@TAMASHAAFRICA.COM"
            className="inline-block bg-[#228B22] text-white px-8 py-3 rounded-full hover:bg-[#1B6B1B] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}