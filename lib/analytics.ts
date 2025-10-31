// Analytics tracking utilities for Good Hands
// Comprehensive tracking for traffic sources, funnel steps, and conversions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Funnel steps for beauty concierge booking flow
export enum FunnelStep {
  LANDING = 'landing_page_view',
  BROWSE_SERVICES = 'browse_services',
  VIEW_SERVICE_DETAIL = 'view_service_detail',
  VIEW_LOCATION = 'view_location',
  CLICK_BOOK = 'click_book_button',
  CONTACT_FORM_START = 'contact_form_start',
  CONTACT_FORM_SUBMIT = 'contact_form_submit',
  BOOKING_COMPLETE = 'booking_complete',
}

// Traffic source detection
export const detectTrafficSource = () => {
  if (typeof window === 'undefined') return null;

  const referrer = document.referrer.toLowerCase();
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check UTM parameters first
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  
  if (utmSource) {
    return {
      source: utmSource,
      medium: utmMedium || 'unknown',
      campaign: utmCampaign || 'unknown',
      type: 'utm_tagged'
    };
  }

  // AI Platform detection
  const aiPlatforms = {
    'chatgpt.com': 'ChatGPT',
    'chat.openai.com': 'ChatGPT',
    'claude.ai': 'Claude',
    'perplexity.ai': 'Perplexity',
    'bard.google.com': 'Google Bard',
    'gemini.google.com': 'Google Gemini',
    'bing.com/chat': 'Bing Chat',
    'you.com': 'You.com',
    'phind.com': 'Phind',
    'character.ai': 'Character.AI',
  };

  for (const [domain, name] of Object.entries(aiPlatforms)) {
    if (referrer.includes(domain)) {
      return {
        source: name,
        medium: 'ai_referral',
        campaign: 'organic_ai',
        type: 'ai_platform'
      };
    }
  }

  // Social media detection
  const socialPlatforms = {
    'instagram.com': 'Instagram',
    'facebook.com': 'Facebook',
    'twitter.com': 'Twitter',
    'x.com': 'X',
    'linkedin.com': 'LinkedIn',
    'pinterest.com': 'Pinterest',
    'tiktok.com': 'TikTok',
    'youtube.com': 'YouTube',
  };

  for (const [domain, name] of Object.entries(socialPlatforms)) {
    if (referrer.includes(domain)) {
      return {
        source: name,
        medium: 'social',
        campaign: 'organic_social',
        type: 'social_media'
      };
    }
  }

  // Search engine detection
  const searchEngines = {
    'google.': 'Google',
    'bing.com': 'Bing',
    'yahoo.com': 'Yahoo',
    'duckduckgo.com': 'DuckDuckGo',
    'baidu.com': 'Baidu',
  };

  for (const [domain, name] of Object.entries(searchEngines)) {
    if (referrer.includes(domain)) {
      return {
        source: name,
        medium: 'organic',
        campaign: 'organic_search',
        type: 'search_engine'
      };
    }
  }

  // Direct traffic
  if (!referrer || referrer === '') {
    return {
      source: 'direct',
      medium: 'none',
      campaign: 'direct',
      type: 'direct'
    };
  }

  // Other referral
  return {
    source: referrer,
    medium: 'referral',
    campaign: 'referral',
    type: 'referral'
  };
};

// Track funnel progression
export const trackFunnel = (step: FunnelStep, additionalData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const trafficSource = detectTrafficSource();
    
    window.gtag('event', step, {
      funnel_step: step,
      traffic_source: trafficSource?.source,
      traffic_medium: trafficSource?.medium,
      traffic_type: trafficSource?.type,
      page_location: window.location.href,
      page_path: window.location.pathname,
      ...additionalData,
    });
  }
};

// Track service views
export const trackServiceView = (serviceName: string, serviceCategory: string) => {
  trackFunnel(FunnelStep.VIEW_SERVICE_DETAIL, {
    service_name: serviceName,
    service_category: serviceCategory,
  });
};

// Track location views
export const trackLocationView = (locationName: string, neighborhood: string) => {
  trackFunnel(FunnelStep.VIEW_LOCATION, {
    location_name: locationName,
    neighborhood: neighborhood,
  });
};

// Track booking intent
export const trackBookingIntent = (serviceName?: string, locationName?: string) => {
  trackFunnel(FunnelStep.CLICK_BOOK, {
    service_name: serviceName,
    location_name: locationName,
  });
};

// Track form interactions
export const trackFormStart = (formType: string) => {
  trackFunnel(FunnelStep.CONTACT_FORM_START, {
    form_type: formType,
  });
};

export const trackFormSubmit = (formType: string, success: boolean) => {
  if (success) {
    trackFunnel(FunnelStep.CONTACT_FORM_SUBMIT, {
      form_type: formType,
      submission_status: 'success',
    });
  } else {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_error', {
        form_type: formType,
        submission_status: 'error',
      });
    }
  }
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number, currency: string = 'EUR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    const trafficSource = detectTrafficSource();
    
    window.gtag('event', 'conversion', {
      conversion_type: conversionType,
      value: value,
      currency: currency,
      traffic_source: trafficSource?.source,
      traffic_medium: trafficSource?.medium,
      traffic_type: trafficSource?.type,
    });
  }
};

// Track outbound links (Instagram, WhatsApp, etc.)
export const trackOutboundLink = (platform: string, url: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound_link',
      event_label: label || platform,
      link_domain: platform,
      link_url: url,
    });
  }
};

// Initialize traffic source tracking on page load
export const initializeTracking = () => {
  if (typeof window !== 'undefined') {
    const trafficSource = detectTrafficSource();
    
    // Store traffic source in session storage for attribution
    if (trafficSource) {
      sessionStorage.setItem('traffic_source', JSON.stringify(trafficSource));
      
      // Send traffic source event
      if (window.gtag) {
        window.gtag('event', 'traffic_source_detected', {
          source: trafficSource.source,
          medium: trafficSource.medium,
          campaign: trafficSource.campaign,
          type: trafficSource.type,
        });
      }
    }
  }
};

