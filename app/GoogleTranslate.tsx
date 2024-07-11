"use client";

import React, { useEffect } from "react";
import "./GoogleTranslate.css"; // Import the CSS file

const GoogleTranslate = () => {
  useEffect(() => {
    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
      script.id = "google_translate_script";
      script.onerror = () => console.error('Error loading Google Translate script');
      document.body.appendChild(script);
  
      (window as any).loadGoogleTranslate = () => {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,hi,pa,sa,mr,ur,bn,es,fr,de,it',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        }, 'google_element');
      };
    }

    return () => {
      const script = document.getElementById("google_translate_script");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="google_element" className="google-translate-container"></div>;
};

export default GoogleTranslate;
