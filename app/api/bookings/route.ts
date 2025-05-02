import { NextRequest, NextResponse } from 'next/server';

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  culture: string;
  date: string;
  groupSize: number;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json() as BookingRequest;

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.culture || !data.date || !data.groupSize) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (basic format)
    const phoneRegex = /^\+?[\d\s-()]{8,}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Validate date is in the future
    const bookingDate = new Date(data.date);
    const today = new Date();
    if (bookingDate < today) {
      return NextResponse.json(
        { error: 'Booking date must be in the future' },
        { status: 400 }
      );
    }

    // Validate culture selection
    const validCultures = ['maasai', 'yoruba', 'zulu', 'kikuyu'];
    if (!validCultures.includes(data.culture.toLowerCase())) {
      return NextResponse.json(
        { error: 'Invalid culture selection' },
        { status: 400 }
      );
    }

    // Validate group size
    if (data.groupSize < 1 || data.groupSize > 100) {
      return NextResponse.json(
        { error: 'Group size must be between 1 and 100' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save the booking to a database
    // 2. Send confirmation emails
    // 3. Update availability calendar
    // 4. Process any payments
    
    // For now, we'll simulate a successful booking
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate processing time

    return NextResponse.json({
      success: true,
      message: 'Booking request received successfully',
      bookingReference: `TAM-${Date.now().toString(36).toUpperCase()}`,
      data: {
        ...data,
        status: 'pending',
        createdAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Booking error:', error);
    
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}