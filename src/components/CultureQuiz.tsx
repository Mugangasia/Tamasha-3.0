'use client';

import { useState } from 'react';
import Image from 'next/image';

type Question = {
  id: number;
  text: string;
  options: {
    text: string;
    score: Record<string, number>;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "What type of cultural experience interests you most?",
    options: [
      { 
        text: "Traditional dance and music performances",
        score: { maasai: 2, zulu: 2, yoruba: 1 }
      },
      { 
        text: "Arts and crafts workshops",
        score: { yoruba: 2, kikuyu: 1, zulu: 1 }
      },
      { 
        text: "Storytelling and oral traditions",
        score: { kikuyu: 2, yoruba: 1, maasai: 1 }
      },
      { 
        text: "Ceremonial rituals and customs",
        score: { maasai: 2, zulu: 2, yoruba: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "What's your preferred group size?",
    options: [
      { 
        text: "Small intimate groups (5-15 people)",
        score: { kikuyu: 2, yoruba: 1, maasai: 1 }
      },
      { 
        text: "Medium groups (16-30 people)",
        score: { yoruba: 2, zulu: 1, maasai: 1 }
      },
      { 
        text: "Large events (31+ people)",
        score: { zulu: 2, maasai: 2, yoruba: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "What's your main goal for this experience?",
    options: [
      { 
        text: "Learning about traditional customs and ways of life",
        score: { maasai: 2, kikuyu: 2, yoruba: 1 }
      },
      { 
        text: "Experiencing vibrant performances and celebrations",
        score: { zulu: 2, yoruba: 2, maasai: 1 }
      },
      { 
        text: "Hands-on participation and skill learning",
        score: { yoruba: 2, kikuyu: 1, zulu: 1 }
      },
      { 
        text: "Team building and group bonding",
        score: { zulu: 2, maasai: 1, yoruba: 1 }
      }
    ]
  }
];

const culturalExperiences = {
  maasai: {
    name: "Maasai Experience",
    description: "Immerse yourself in the warrior traditions, jumping dances, and rich ceremonies of the Maasai people.",
    image: "/cultures/maasai.jpg"
  },
  yoruba: {
    name: "Yoruba Experience",
    description: "Explore the artistic traditions, music, and spiritual practices of the Yoruba culture.",
    image: "/cultures/yoruba.jpg"
  },
  zulu: {
    name: "Zulu Experience",
    description: "Discover the powerful dance traditions, warrior culture, and vibrant ceremonies of the Zulu people.",
    image: "/cultures/zulu.jpg"
  },
  kikuyu: {
    name: "Kikuyu Experience",
    description: "Learn about agricultural traditions, storytelling, and community practices of the Kikuyu people.",
    image: "/cultures/kikuyu.jpg"
  }
};

export default function CultureQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    maasai: 0,
    yoruba: 0,
    zulu: 0,
    kikuyu: 0
  });
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = async (option: { text: string; score: Record<string, number> }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const newScores = { ...scores };
      Object.entries(option.score).forEach(([culture, score]) => {
        newScores[culture] = (newScores[culture] || 0) + score;
      });
      setScores(newScores);

      // Simulate API call delay for processing answer
      await new Promise(resolve => setTimeout(resolve, 500));

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    } catch (err) {
      setError('Failed to process your answer. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getRecommendedCulture = () => {
    return Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      maasai: 0,
      yoruba: 0,
      zulu: 0,
      kikuyu: 0
    });
    setShowResult(false);
    setError(null);
  };

  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={resetQuiz}
          className="bg-[#A41E34] text-white px-6 py-2 rounded-full hover:bg-[#8A1929] transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  if (showResult) {
    const recommendedCulture = getRecommendedCulture();
    const experience = culturalExperiences[recommendedCulture as keyof typeof culturalExperiences];

    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Your Perfect Match!</h3>
        <div className="mb-6">
          <h4 className="text-xl font-bold text-[#A41E34] mb-2">{experience.name}</h4>
          <p className="text-gray-600 mb-4">{experience.description}</p>
          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
            <Image
              src={experience.image}
              alt={experience.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={resetQuiz}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors"
            >
              Take Quiz Again
            </button>
            <a
              href={`/experiences?culture=${recommendedCulture}`}
              className="bg-[#A41E34] text-white px-6 py-2 rounded-full hover:bg-[#8A1929] transition-colors"
            >
              Book This Experience
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Find Your Perfect Cultural Experience</h3>
        <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-xl mb-4">{questions[currentQuestion].text}</h4>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isLoading}
              className={`w-full text-left p-4 rounded-lg border transition-colors ${
                isLoading
                  ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                  : 'border-gray-200 hover:border-[#A41E34] hover:bg-[#A41E34]/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                {isLoading && index === currentQuestion && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#A41E34] border-t-transparent"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 bg-[#A41E34] rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
}