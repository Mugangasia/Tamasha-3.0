# Tamasha Africa

Tamasha Africa is a web platform that connects people with authentic African cultural experiences through direct engagement with cultural ambassadors. The platform offers virtual tours, live performances, workshops, and educational programs featuring various African cultures.

## Features

- **Cultural Exploration**: Detailed profiles of different African cultures including Maasai, Yoruba, Zulu, and Kikuyu
- **Virtual Tours**: Immersive 360° virtual experiences of cultural ceremonies and events
- **Interactive Quiz**: Help users find their perfect cultural experience match
- **Booking System**: Easy-to-use booking system for cultural experiences
- **Responsive Design**: Full mobile and desktop support
- **Testimonials**: Real feedback from past participants

## Tech Stack

- **Framework**: Next.js 15.3 (with App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Form Handling**: React Hook Form with Zod validation
- **Testing**: Jest and React Testing Library
- **Virtual Reality**: A-Frame for 360° experiences

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd tamasha-africa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                  # Next.js 13+ App Router pages
├── public/              # Static assets
│   ├── cultures/        # Cultural images and videos
│   ├── team/           # Team member images
│   └── testimonials/   # Testimonial images
└── src/
    ├── components/     # Reusable React components
    ├── schemas/        # Zod validation schemas
    ├── types/         # TypeScript type definitions
    └── __tests__/     # Test files
```

## Key Components

- **VirtualTour**: Immersive 360° experience viewer
- **CultureQuiz**: Interactive quiz for experience matching
- **LoadingButton**: Reusable button with loading state
- **Alert**: Customizable alert component
- **Navbar & Footer**: Site-wide navigation components

## API Routes

- `POST /api/bookings`: Handle experience booking submissions

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run unit tests
npm run test:unit
```

## Deployment

This project is optimized for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

## Environment Variables

No environment variables are required for basic development. For production, configure:

- Database connection strings (if adding a database)
- API keys (if adding external services)
- Email service credentials (if adding email notifications)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and not open for public use without permission.

## Contact

For inquiries about cultural experiences:
Email: INFO@TAMASHAAFRICA.COM
Location: Washington, DC
