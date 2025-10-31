'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-ZGDMVGP040';

// Track page views
export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure',
              anonymize_ip: false,
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
            });
            
            // Track AI referrals
            (function() {
              const referrer = document.referrer.toLowerCase();
              const aiPlatforms = [
                'chatgpt.com',
                'chat.openai.com',
                'claude.ai',
                'perplexity.ai',
                'bard.google.com',
                'gemini.google.com',
                'bing.com/chat',
                'you.com',
                'phind.com',
                'character.ai'
              ];
              
              const isAIReferral = aiPlatforms.some(platform => referrer.includes(platform));
              
              if (isAIReferral) {
                gtag('event', 'ai_referral', {
                  'referrer': document.referrer,
                  'ai_platform': aiPlatforms.find(p => referrer.includes(p)) || 'unknown',
                  'page_location': window.location.href
                });
              }
            })();
          `,
        }}
      />
    </>
  );
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track funnel steps
export const trackFunnelStep = (step: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'funnel_step', {
      funnel_step: step,
      ...data,
    });
  }
};

// Track conversions
export const trackConversion = (conversionType: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      conversion_type: conversionType,
      value: value,
    });
  }
};

// Track social media clicks
export const trackSocialClick = (platform: string, url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'social_click', {
      social_platform: platform,
      link_url: url,
    });
  }
};

