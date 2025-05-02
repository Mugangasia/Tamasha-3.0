import { bookingSchema } from './booking';

describe('Booking Schema', () => {
  const validBooking = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    culture: 'maasai',
    date: new Date(Date.now() + 86400000).toISOString(),
    groupSize: 5,
    message: 'Looking forward to the experience!',
  };

  it('validates a correct booking', () => {
    const result = bookingSchema.safeParse(validBooking);
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const invalid = { ...validBooking, email: 'invalid-email' };
    const result = bookingSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('rejects past dates', () => {
    const invalid = { 
      ...validBooking, 
      date: new Date(Date.now() - 86400000).toISOString() 
    };
    const result = bookingSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('rejects invalid culture selection', () => {
    const invalid = { ...validBooking, culture: 'invalid-culture' };
    const result = bookingSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});