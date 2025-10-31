# Google Analytics 4 Implementation Guide for Good Hands

## Overview

This document provides a comprehensive guide for the Google Analytics 4 (GA4) implementation in the Good Hands beauty concierge platform. The implementation includes advanced tracking for traffic sources, sales funnel, conversions, and geographic data.

## Configuration Details

### Measurement ID
**G-ZGDMVGP040**

### Stream Information
- **Stream Name**: Good-Hands
- **Stream ID**: 12289898409
- **Property**: beautysalonlisbon.com
- **Status**: Active and collecting data

## Features Implemented

### 1. Enhanced Measurement (All Enabled)
The following automatic tracking features are enabled in GA4:

- ✅ **Page Views** - Tracks every page visit
- ✅ **Scrolls** - Tracks when users scroll to bottom of page
- ✅ **Outbound Clicks** - Tracks clicks to external websites
- ✅ **Site Search** - Tracks internal search queries
- ✅ **Form Interactions** - Tracks form submissions
- ✅ **Video Engagement** - Tracks video plays and engagement
- ✅ **File Downloads** - Tracks document and file downloads

### 2. Traffic Source Detection

The implementation automatically detects and categorizes traffic from multiple sources:

#### AI Platforms (Automatically Tracked)
- ChatGPT (chatgpt.com, chat.openai.com)
- Claude (claude.ai)
- Perplexity (perplexity.ai)
- Google Gemini/Bard (gemini.google.com, bard.google.com)
- Bing Chat (bing.com/chat)
- You.com
- Phind
- Character.AI

When a visitor arrives from an AI platform, a custom `ai_referral` event is automatically fired with the platform name.

#### Social Media Platforms
- Instagram
- Facebook
- Twitter/X
- LinkedIn
- Pinterest
- TikTok
- YouTube

#### Search Engines
- Google
- Bing
- Yahoo
- DuckDuckGo
- Baidu

#### Direct Traffic
- Users typing URL directly
- Bookmarks
- Email links without UTM parameters

### 3. Sales Funnel Tracking

The implementation includes comprehensive funnel tracking with the following steps:

1. **Landing Page View** - Initial visit
2. **Browse Services** - User explores service offerings
3. **View Service Detail** - User clicks on specific service
4. **View Location** - User explores location/neighborhood
5. **Click Book Button** - User shows booking intent
6. **Contact Form Start** - User begins filling contact form
7. **Contact Form Submit** - User submits contact form
8. **Booking Complete** - Conversion completed

Each funnel step includes:
- Traffic source attribution
- Page location
- Timestamp
- Additional contextual data

### 4. UTM Parameter Support

Full support for campaign tracking via UTM parameters:
- `utm_source` - Campaign source (e.g., instagram, newsletter)
- `utm_medium` - Campaign medium (e.g., social, email, cpc)
- `utm_campaign` - Campaign name (e.g., summer_promotion)
- `utm_term` - Paid search keywords
- `utm_content` - Ad content differentiation

Example URL:
```
https://beautysalonlisbon.com?utm_source=instagram&utm_medium=social&utm_campaign=launch
```

### 5. Geographic Data Collection

GA4 automatically collects:
- **Country** - Visitor's country
- **City** - Visitor's city (when available)
- **Region** - State/province
- **Language** - Browser language
- **Device** - Desktop, mobile, tablet
- **Browser** - Chrome, Safari, Firefox, etc.
- **Operating System** - Windows, macOS, iOS, Android, etc.

## Implementation Files

### Core Files Created

1. **`/components/GoogleAnalytics.tsx`**
   - Main GA4 integration component
   - Automatic page view tracking
   - AI referral detection
   - Custom event tracking functions

2. **`/lib/analytics.ts`**
   - Comprehensive tracking utilities
   - Traffic source detection
   - Funnel tracking functions
   - Conversion tracking
   - Form tracking helpers

3. **`/app/layout.tsx`** (Updated)
   - Integrated GoogleAnalytics component
   - Applied to all pages automatically

4. **`.env.local`**
   - Environment configuration
   - Measurement ID storage

## Usage Examples

### Track Service View
```typescript
import { trackServiceView } from '@/lib/analytics';

// When user views a service
trackServiceView('Luxury Facial', 'Skincare');
```

### Track Location View
```typescript
import { trackLocationView } from '@/lib/analytics';

// When user views a location
trackLocationView('Spa Luxe Lisbon', 'Chiado');
```

### Track Booking Intent
```typescript
import { trackBookingIntent } from '@/lib/analytics';

// When user clicks book button
trackBookingIntent('Luxury Facial', 'Spa Luxe Lisbon');
```

### Track Form Interactions
```typescript
import { trackFormStart, trackFormSubmit } from '@/lib/analytics';

// When user starts filling form
trackFormStart('contact_form');

// When user submits form
trackFormSubmit('contact_form', true); // true for success
```

### Track Conversions
```typescript
import { trackConversion } from '@/lib/analytics';

// When booking is confirmed
trackConversion('booking', 150, 'EUR');
```

### Track Outbound Links
```typescript
import { trackOutboundLink } from '@/lib/analytics';

// When user clicks Instagram link
trackOutboundLink('Instagram', 'https://instagram.com/goodhands', 'Footer Instagram Link');
```

## Viewing Analytics Data

### In Google Analytics Dashboard

1. **Traffic Sources**
   - Go to: Reports → Acquisition → Traffic acquisition
   - View breakdown by source/medium
   - Filter by AI platforms, social media, search engines

2. **Geographic Data**
   - Go to: Reports → User → Demographics → Location
   - View country, city, region data
   - Compare performance by location

3. **Funnel Analysis**
   - Go to: Explore → Funnel exploration
   - Create custom funnel with the tracking events
   - View conversion rates at each step

4. **Real-time Data**
   - Go to: Reports → Realtime
   - See active users by location, source, page

5. **Custom Events**
   - Go to: Reports → Engagement → Events
   - View all custom events (ai_referral, funnel steps, etc.)

## Advanced Configuration

### Setting Up Custom Dimensions (Optional)

To create custom dimensions for AI traffic sources:

1. Go to Admin → Property → Custom definitions
2. Click "Create custom dimension"
3. Add dimensions:
   - **AI Platform** (Event parameter: `ai_platform`)
   - **Traffic Type** (Event parameter: `traffic_type`)
   - **Funnel Step** (Event parameter: `funnel_step`)

### Creating Audiences

Create audiences for retargeting:

1. Go to Admin → Property → Audiences
2. Create audiences based on:
   - AI referral visitors
   - Specific funnel drop-off points
   - Geographic location
   - Service interest

### Setting Up Conversions

Mark important events as conversions:

1. Go to Admin → Property → Events
2. Find events like `booking_complete`, `contact_form_submit`
3. Toggle "Mark as conversion"

## Deployment Instructions

### For Vercel Deployment

1. **Add Environment Variable in Vercel Dashboard**
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ZGDMVGP040
   ```

2. **Deploy the updated code**
   ```bash
   git add .
   git commit -m "Add Google Analytics 4 with advanced tracking"
   git push origin main
   ```

3. **Verify in Vercel**
   - Go to your project settings
   - Check Environment Variables
   - Redeploy if needed

### Testing the Implementation

1. **Real-time Testing**
   - Open your website
   - Open GA4 Realtime report
   - Navigate through pages
   - Verify events are firing

2. **Debug Mode**
   Add to URL: `?gtag_debug=1`
   - Open browser console
   - See detailed GA4 event logs

3. **Google Tag Assistant**
   - Install Chrome extension
   - Visit your site
   - Verify GA4 tag is firing correctly

## Troubleshooting

### Events Not Showing Up

1. Check browser console for errors
2. Verify Measurement ID is correct
3. Check ad blockers are disabled
4. Wait 24-48 hours for data processing

### Traffic Source Not Detected

1. Verify referrer is being passed
2. Check UTM parameters are properly formatted
3. Review traffic source detection logic in `lib/analytics.ts`

### Funnel Steps Missing

1. Ensure tracking functions are called at right moments
2. Check event names match exactly
3. Verify user has consented to tracking (if GDPR applies)

## Privacy & GDPR Compliance

The current implementation:
- ✅ Does NOT anonymize IP addresses (for accurate geographic data)
- ✅ Allows Google Signals (for cross-device tracking)
- ✅ Allows ad personalization signals

**For GDPR compliance**, you may need to:
1. Add cookie consent banner
2. Disable tracking until user consents
3. Provide opt-out mechanism
4. Update privacy policy

## Performance Impact

The GA4 implementation:
- Loads asynchronously (no blocking)
- Uses Next.js Script optimization
- Minimal performance impact (<50ms)
- Cached by CDN

## Support & Resources

- **GA4 Documentation**: https://support.google.com/analytics/answer/10089681
- **Next.js Analytics Guide**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **GTM Documentation**: https://developers.google.com/tag-platform/gtagjs

## Summary

This implementation provides enterprise-level analytics tracking with:
- ✅ Automatic traffic source detection (AI, social, search, direct)
- ✅ Complete sales funnel tracking
- ✅ Geographic and demographic data
- ✅ UTM campaign tracking
- ✅ Custom event tracking
- ✅ Conversion tracking
- ✅ Real-time monitoring

All data will be available in your Google Analytics dashboard within 24-48 hours of deployment.

