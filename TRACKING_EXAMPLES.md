# Tracking Implementation Examples

This document provides practical examples of how to implement tracking in your Good Hands components.

## 1. Homepage Tracking

### Update `app/page.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import { trackFunnel, FunnelStep } from '@/lib/analytics';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
// ... other imports

export default function HomePage() {
  useEffect(() => {
    // Track landing page view
    trackFunnel(FunnelStep.LANDING);
  }, []);

  return (
    <main>
      <Hero />
      <SearchBar />
      {/* ... rest of components */}
    </main>
  );
}
```

## 2. Service Page Tracking

### Example for `app/services/page.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import { trackFunnel, FunnelStep } from '@/lib/analytics';

export default function ServicesPage() {
  useEffect(() => {
    // Track when user browses services
    trackFunnel(FunnelStep.BROWSE_SERVICES);
  }, []);

  return (
    // Your services page content
  );
}
```

### Track Individual Service Clicks

```typescript
'use client';

import { trackServiceView } from '@/lib/analytics';

export function ServiceCard({ service }: { service: Service }) {
  const handleClick = () => {
    // Track service view
    trackServiceView(service.name, service.category);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
    </div>
  );
}
```

## 3. Location/Neighborhood Tracking

### Example for `app/chiado/page.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import { trackLocationView } from '@/lib/analytics';

export default function ChiadoPage() {
  useEffect(() => {
    // Track location view
    trackLocationView('Chiado', 'Chiado');
  }, []);

  return (
    // Your Chiado page content
  );
}
```

## 4. Booking Button Tracking

### Update Booking Components

```typescript
'use client';

import { trackBookingIntent } from '@/lib/analytics';

export function BookButton({ serviceName, locationName }: Props) {
  const handleClick = () => {
    // Track booking intent
    trackBookingIntent(serviceName, locationName);
    
    // Then proceed with booking logic
    // e.g., open booking modal, redirect, etc.
  };

  return (
    <button onClick={handleClick} className="btn-primary">
      Book Now
    </button>
  );
}
```

## 5. Contact Form Tracking

### Update `components/BookingForm.tsx`

```typescript
'use client';

import { useState } from 'react';
import { trackFormStart, trackFormSubmit } from '@/lib/analytics';

export function BookingForm() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleInputFocus = () => {
    if (!hasStarted) {
      // Track when user starts filling form
      trackFormStart('booking_form');
      setHasStarted(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Your form submission logic
      const response = await submitForm(formData);
      
      // Track successful submission
      trackFormSubmit('booking_form', true);
      
      // Show success message
    } catch (error) {
      // Track failed submission
      trackFormSubmit('booking_form', false);
      
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onFocus={handleInputFocus}
        placeholder="Your name"
      />
      <input
        type="email"
        onFocus={handleInputFocus}
        placeholder="Your email"
      />
      <textarea
        onFocus={handleInputFocus}
        placeholder="Your message"
      />
      <button type="submit">Send Request</button>
    </form>
  );
}
```

## 6. Conversion Tracking

### After Successful Booking

```typescript
'use client';

import { trackConversion, FunnelStep, trackFunnel } from '@/lib/analytics';

export function BookingConfirmation({ bookingValue }: Props) {
  useEffect(() => {
    // Track booking completion (funnel step)
    trackFunnel(FunnelStep.BOOKING_COMPLETE, {
      booking_id: bookingId,
      service_name: serviceName,
    });
    
    // Track conversion with value
    trackConversion('booking', bookingValue, 'EUR');
  }, []);

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your booking.</p>
    </div>
  );
}
```

## 7. Social Media Link Tracking

### Update Footer or Social Links

```typescript
'use client';

import { trackOutboundLink } from '@/lib/analytics';

export function SocialLinks() {
  const handleInstagramClick = () => {
    trackOutboundLink('Instagram', 'https://instagram.com/goodhands', 'Footer Instagram');
  };

  const handleFacebookClick = () => {
    trackOutboundLink('Facebook', 'https://facebook.com/goodhands', 'Footer Facebook');
  };

  return (
    <div className="social-links">
      <a
        href="https://instagram.com/goodhands"
        onClick={handleInstagramClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
      <a
        href="https://facebook.com/goodhands"
        onClick={handleFacebookClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </div>
  );
}
```

## 8. Search Tracking

### Update Search Component

```typescript
'use client';

import { useState } from 'react';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // GA4 automatically tracks site search if you use the right URL format
    // Navigate to search results with query parameter
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    
    // Or manually track
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'search', {
        search_term: searchTerm,
      });
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search services..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

## 9. Scroll Depth Tracking (Custom)

### Track Deep Engagement

```typescript
'use client';

import { useEffect } from 'react';

export function ArticlePage() {
  useEffect(() => {
    let maxScroll = 0;
    
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestones
        if (maxScroll >= 25 && maxScroll < 50) {
          trackScrollDepth(25);
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackScrollDepth(50);
        } else if (maxScroll >= 75 && maxScroll < 100) {
          trackScrollDepth(75);
        } else if (maxScroll >= 100) {
          trackScrollDepth(100);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Your article content
  );
}

function trackScrollDepth(depth: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      scroll_depth: depth,
      page_location: window.location.href,
    });
  }
}
```

## 10. Video Tracking (If You Add Videos)

```typescript
'use client';

export function VideoPlayer({ videoUrl, videoTitle }: Props) {
  const handlePlay = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'video_start', {
        video_title: videoTitle,
        video_url: videoUrl,
      });
    }
  };

  const handleComplete = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'video_complete', {
        video_title: videoTitle,
        video_url: videoUrl,
      });
    }
  };

  return (
    <video
      src={videoUrl}
      onPlay={handlePlay}
      onEnded={handleComplete}
      controls
    />
  );
}
```

## Quick Implementation Checklist

### Priority 1 (Essential)
- [ ] Add `trackFunnel(FunnelStep.LANDING)` to homepage
- [ ] Add `trackBookingIntent()` to all "Book" buttons
- [ ] Add `trackFormStart()` and `trackFormSubmit()` to booking form
- [ ] Add `trackConversion()` to booking confirmation

### Priority 2 (Important)
- [ ] Add `trackServiceView()` to service detail pages
- [ ] Add `trackLocationView()` to neighborhood pages
- [ ] Add `trackOutboundLink()` to social media links
- [ ] Add `trackFunnel(FunnelStep.BROWSE_SERVICES)` to services page

### Priority 3 (Nice to Have)
- [ ] Add scroll depth tracking to long articles
- [ ] Add video engagement tracking
- [ ] Add search tracking
- [ ] Add custom event tracking for special features

## Testing Your Implementation

1. **Open your site in Chrome**
2. **Open Developer Console** (F12)
3. **Go to Console tab**
4. **Type**: `window.gtag` - should show function
5. **Navigate through your site** and watch for events
6. **Check GA4 Realtime report** to see events coming in

## Common Mistakes to Avoid

1. ❌ Don't track the same event multiple times
2. ❌ Don't forget to make components 'use client' when using hooks
3. ❌ Don't track on server-side (only client-side)
4. ❌ Don't forget to test in incognito mode (ad blockers can interfere)
5. ✅ Do use descriptive event names
6. ✅ Do include relevant context in event parameters
7. ✅ Do test thoroughly before deploying

## Need Help?

Refer to the main `ANALYTICS_IMPLEMENTATION.md` file for detailed documentation and troubleshooting.

