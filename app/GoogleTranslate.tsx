"use client";

import React, { useEffect } from "react";
import Script from "next/script";


const GoogleTranslate = () => {
  return (
    <div className="absolute top-[57px] md:top-12 z-[1] right-0">
    <div id="google_element"></div>
    <Script
      src="https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"
      strategy="afterInteractive"
    />
    <Script
      id="google-translate"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          function loadGoogleTranslate() {
            new google.translate.TranslateElement({
              pageLanguage: 'en'
            }, 'google_element');
          }
        `,
      }}
    />
  </div>

  );
};

export default GoogleTranslate;
