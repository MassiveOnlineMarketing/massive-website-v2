"use client"

import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import CookieSettings from './CookieSettings';

export type CookieKeys = "consentGiven" | "marketing" | "analytics" | "statistics";
export type ConsentKeys = "marketing" | "analytics" | "statistics";


function CookieConsentBanner() {
  const [cookies, setCookie, removeCookie] = useCookies(['consentGiven', 'marketing', 'analytics', 'statistics']);

  // Check if the consent component should be displayed
  const [showConsent, setShowConsent] = useState<null | boolean>(null);
  const [showSettings, setShowSettings] = useState(false);

  // Consent state for UI elements
  const [consent, setConsent] = useState<Record<ConsentKeys, boolean>>({
    marketing: cookies.marketing || false,
    analytics: cookies.analytics || false,
    statistics: cookies.statistics || false,
  });

  

  useEffect(() => {
    // Determine if the banner should be shown based on the consentGiven cookie
    if (cookies.consentGiven === undefined) {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, [cookies]);



  // handleConsentChange is called when the user changes the consent
  const handleConsentChange = (segment: CookieKeys, newValue: boolean) => {
    setConsent(prevState => ({ ...prevState, [segment]: newValue }));
  };

  // acceptAllCookies is called when the user clicks the accept all button
  const acceptAllCookies = () => {
    for (const segment in consent) {
      setCookie(segment as CookieKeys, true, { path: '/' });
    }
    setCookie('consentGiven', true, { path: '/' });
    setShowConsent(false);
  };





  const savePreferences = () => {
    // console.log('Saving Preferences:', consent); 

    for (const segment in consent) {
      setCookie(segment as CookieKeys, consent[segment as ConsentKeys], { path: '/' });
    }
    setCookie('consentGiven', true, { path: '/' });
    setShowConsent(false);
  };

  const resetPreferences = () => {
    for (const segment in consent) {
      removeCookie(segment as CookieKeys, { path: '/' });
    }
    removeCookie('consentGiven', { path: '/' });
    setConsent({
      marketing: false,
      analytics: false,
      statistics: false,
    });
  };



  // If the consent component should not be initialy shown, return null
  if (showConsent === null || !showConsent) return null;

  // else
  return (
    <div className='p-6 m-2 fixed bg-white shadow-sm w-full bottom-2 z-50 rounded-md'
    style={{ maxWidth: 'calc(100% - 1rem)' }}
    id='cookieConsent-banner'>
      <h4>Cookie Voorkeur</h4>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        <p className='max-w-[1100px] mr-auto'>Bij Massive maken we gebruik van cookies om de goede werking en beveiliging van onze websites mogelijk te maken en je de best mogelijke gebruikerservaring te bieden. Door op &apos; Accepteren &apos; te klikken, stem je in met het gebruik van deze cookies voor advertenties en analyses.</p>
        {/* <p>Je kunt je cookie-instellingen op elk moment wijzigen. Lees ons Cookiebeleid voor meer informatie.</p> */}
        <div id='cookieConcent-Buttons' className='flex gap-6 pt-4 md:pt-0'>
          <button className={` h-fit self-center`} onClick={acceptAllCookies}>Accepteren</button>
          <button className={` border-b h-fit self-center hover:border-black`} onClick={acceptAllCookies}>Alleen noodzakelijke</button>
          <button onClick={() => setShowSettings(!showSettings)}>Instellingen</button>
        </div>
      </div>
      {showSettings && (
        <CookieSettings
          consent={consent}
          onClose={() => setShowSettings(false)}
          onSave={savePreferences}
          onReset={resetPreferences}
          onConsentChange={handleConsentChange}
        />
      )}
    </div>
  );
}

export default CookieConsentBanner;
