import Image from 'next/image';

const cultures = [
  {
    name: "Maasai",
    region: "East Africa",
    description: "Known for their distinctive customs, dress, and jumping dance (adumu), the Maasai are among Africa's most recognized cultural groups.",
    image: "/maasai.jpg"
  },
  {
    name: "Yoruba",
    region: "West Africa",
    description: "One of Africa's largest ethnic groups, the Yoruba are known for their rich artistic traditions, music, and spiritual practices.",
    image: "/yoruba.jpg"
  },
  {
    name: "Zulu",
    region: "Southern Africa",
    description: "The Zulu people are celebrated for their warrior traditions, intricate beadwork, and powerful dancing styles.",
    image: "/zulu.jpg"
  },
  {
    name: "Kikuyu",
    region: "East Africa",
    description: "The largest ethnic group in Kenya, known for their agricultural heritage and rich storytelling traditions.",
    image: "/kikuyu.jpg"
  }
] as const;

export default function CulturesPage() {
  return (
    <div className="pt-16 min-h-screen bg-[#F4E3C1]">
      {/* Hero Section */}
      <div className="bg-[#A41E34] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover African Cultures</h1>
          <p className="text-lg md:text-xl">
            Explore authentic traditions and connect with cultural ambassadors from across Africa
          </p>
        </div>
      </div>

      {/* Filters - To be implemented with state management */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <button className="px-4 py-2 bg-white rounded-full text-[#A41E34] font-semibold whitespace-nowrap">
            All Regions
          </button>
          <button className="px-4 py-2 bg-white rounded-full text-gray-700 hover:text-[#A41E34] whitespace-nowrap">
            East Africa
          </button>
          <button className="px-4 py-2 bg-white rounded-full text-gray-700 hover:text-[#A41E34] whitespace-nowrap">
            West Africa
          </button>
          <button className="px-4 py-2 bg-white rounded-full text-gray-700 hover:text-[#A41E34] whitespace-nowrap">
            Southern Africa
          </button>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cultures.map((culture) => (
            <div key={culture.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={culture.image}
                  alt={`${culture.name} cultural performance`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{culture.name}</h3>
                    <p className="text-gray-600">{culture.region}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{culture.description}</p>
                <a
                  href={`/cultures/${culture.name.toLowerCase()}`}
                  className="inline-block bg-[#A41E34] text-white px-4 py-2 rounded-full hover:bg-[#8A1929] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}