
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-RP1R37XLFK'; // Real Google Analytics Measurement ID

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        send_page_view: false,
        user_properties: {
          user_agent: navigator.userAgent,
          screen_resolution: \`\${window.screen.width}x\${window.screen.height}\`,
          viewport_size: \`\${window.innerWidth}x\${window.innerHeight}\`,
          document_encoding: document.characterSet,
          user_language: navigator.language
        }
      });
      
      // Set up email collection for Google Sheets
      gtag('event', 'user_data', {
        email_destination: 'mayankshukla.ms.st@gmail.com',
        collect_data: true,
        device_info: navigator.userAgent,
        platform: navigator.platform,
        viewport: \`\${window.innerWidth}x\${window.innerHeight}\`,
        language: navigator.language,
      });
    `;
    
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    // Track page views when location changes
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
