import { notFound } from 'next/navigation';
import VirtualTour from '@/src/components/VirtualTour';
import Image from 'next/image';

type CultureData = {
  name: string;
  region: string;
  description: string;
  traditions: string[];
  virtualTour: {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
  };
  gallery: string[];
};

const culturalData: Record<string, CultureData> = {
  maasai: {
    name: "Maasai",
    region: "East Africa",
    description: "The Maasai are among Africa's most recognized cultural groups, known for their distinctive customs, dress, and the famous jumping dance (adumu).",
    traditions: [
      "Warrior tradition and rites of passage",
      "Intricate beadwork and jewelry making",
      "Traditional cattle herding practices",
      "Ceremonial jumping dance (adumu)"
    ],
    virtualTour: {
      title: "Experience Maasai Dance Ceremony",
      description: "Take a virtual tour of a traditional Maasai dance ceremony and witness the powerful adumu jumping dance.",
      videoUrl: "/cultures/maasai/virtual-tour.mp4",
      thumbnailUrl: "/cultures/maasai/ceremony-thumbnail.jpg"
    },
    gallery: [
      "/cultures/maasai/gallery-1.jpg",
      "/cultures/maasai/gallery-2.jpg",
      "/cultures/maasai/gallery-3.jpg"
    ]
  },
  yoruba: {
    name: "Yoruba",
    region: "West Africa",
    description: "The Yoruba people are renowned for their rich artistic traditions, intricate craftsmanship, and vibrant spiritual practices.",
    traditions: [
      "Traditional drumming and music",
      "Spiritual practices and ceremonies",
      "Bronze and brass casting",
      "Traditional storytelling and proverbs"
    ],
    virtualTour: {
      title: "Yoruba Arts & Crafts Workshop",
      description: "Explore a traditional Yoruba workshop and witness master craftsmen at work.",
      videoUrl: "/cultures/yoruba/virtual-tour.mp4",
      thumbnailUrl: "/cultures/yoruba/workshop-thumbnail.jpg"
    },
    gallery: [
      "/cultures/yoruba/gallery-1.jpg",
      "/cultures/yoruba/gallery-2.jpg",
      "/cultures/yoruba/gallery-3.jpg"
    ]
  },
  zulu: {
    name: "Zulu",
    region: "Southern Africa",
    description: "The Zulu people are celebrated for their powerful warrior traditions, intricate beadwork, and dynamic dance performances.",
    traditions: [
      "Shield and spear combat techniques",
      "Traditional beadwork symbolism",
      "Ceremonial dances and rituals",
      "Oral history and praise poetry"
    ],
    virtualTour: {
      title: "Zulu Warriors Performance",
      description: "Experience the power and precision of traditional Zulu warrior dances.",
      videoUrl: "/cultures/zulu/virtual-tour.mp4",
      thumbnailUrl: "/cultures/zulu/performance-thumbnail.jpg"
    },
    gallery: [
      "/cultures/zulu/gallery-1.jpg",
      "/cultures/zulu/gallery-2.jpg",
      "/cultures/zulu/gallery-3.jpg"
    ]
  },
  kikuyu: {
    name: "Kikuyu",
    region: "East Africa",
    description: "The Kikuyu people are known for their rich agricultural heritage, traditional ceremonies, and vibrant storytelling traditions.",
    traditions: [
      "Agricultural ceremonies and practices",
      "Traditional storytelling and riddles",
      "Coming of age ceremonies",
      "Traditional music and dance"
    ],
    virtualTour: {
      title: "Kikuyu Harvest Festival",
      description: "Join a traditional Kikuyu harvest celebration and learn about agricultural practices.",
      videoUrl: "/cultures/kikuyu/virtual-tour.mp4",
      thumbnailUrl: "/cultures/kikuyu/festival-thumbnail.jpg"
    },
    gallery: [
      "/cultures/kikuyu/gallery-1.jpg",
      "/cultures/kikuyu/gallery-2.jpg",
      "/cultures/kikuyu/gallery-3.jpg"
    ]
  }
};

export default function CulturePage({ params }: { params: { slug: string } }) {
  const culture = culturalData[params.slug as keyof typeof culturalData];

  if (!culture) {
    notFound();
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={culture.gallery[0]}
          alt={`${culture.name} cultural ceremony`}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{culture.name}</h1>
          <p className="text-xl">{culture.region}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {culture.description}
          </p>
          <h2 className="text-2xl font-bold mb-6">Key Traditions</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {culture.traditions.map((tradition, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-[#A41E34]">•</span>
                <span>{tradition}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-[#F4E3C1]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Experience</h2>
          <VirtualTour {...culture.virtualTour} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culture.gallery.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${culture.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#228B22] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Experience {culture.name} Culture Live</h2>
          <p className="text-lg mb-8">
            Book a performance, workshop, or immersive experience with our {culture.name} cultural ambassadors.
          </p>
          <a
            href={`/experiences?culture=${params.slug}`}
            className="inline-block bg-white text-[#228B22] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}