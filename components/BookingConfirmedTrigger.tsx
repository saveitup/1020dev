'use client';

import { useEffect } from 'react';
import { trackBookingConfirmed } from '@/lib/analytics';

export function BookingConfirmedTrigger() {
  useEffect(() => {
    trackBookingConfirmed();
  }, []);
  return null;
}
