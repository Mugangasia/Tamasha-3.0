'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CultureQuiz from '@/src/components/CultureQuiz';
import LoadingButton from '@/src/components/LoadingButton';
import Alert from '@/src/components/Alert';
import { bookingSchema, type BookingFormData } from '@/src/schemas/booking';

export default function ExperiencesPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      culture: undefined,
      date: '',
      groupSize: 1,
      message: ''
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setAlert(null);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking');
      }

      setAlert({
        type: 'success',
        message: `Booking successful! Your reference number is ${result.bookingReference}`
      });

      reset();

    } catch (error) {
      setAlert({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit booking'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-16">
      <section className="py-12 bg-[#F4E3C1]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Book Your Cultural Experience</h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            Not sure which experience to choose? Take our quiz to find your perfect match!
          </p>
          <CultureQuiz />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Book Now</h2>
          
          {alert && (
            <div className="mb-6">
              <Alert
                type={alert.type}
                message={alert.message}
                onClose={() => setAlert(null)}
              />
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="culture" className="block text-sm font-medium text-gray-700 mb-1">
                Select Culture *
              </label>
              <select
                id="culture"
                {...register('culture')}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
              >
                <option value="">Choose a culture</option>
                <option value="maasai">Maasai Experience</option>
                <option value="yoruba">Yoruba Experience</option>
                <option value="zulu">Zulu Experience</option>
                <option value="kikuyu">Kikuyu Experience</option>
              </select>
              {errors.culture && (
                <p className="mt-1 text-sm text-red-600">{errors.culture.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  {...register('date')}
                  min={new Date().toISOString().split('T')[0]}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-1">
                Group Size *
              </label>
              <input
                type="number"
                id="groupSize"
                {...register('groupSize', { valueAsNumber: true })}
                min="1"
                max="100"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
              />
              {errors.groupSize && (
                <p className="mt-1 text-sm text-red-600">{errors.groupSize.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#A41E34] focus:ring-[#A41E34]"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div>
              <LoadingButton
                type="submit"
                isLoading={isSubmitting}
                loadingText="Submitting Booking..."
                className="w-full bg-[#A41E34] text-white px-6 py-3 rounded-full hover:bg-[#8A1929] transition-colors"
              >
                Book Experience
              </LoadingButton>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}