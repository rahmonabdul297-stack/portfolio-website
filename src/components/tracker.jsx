
import { useEffect } from 'react';
export default function VisitTracker() {
  useEffect(() => {
    const alreadyNotified = sessionStorage.getItem('visit_notified');
    if (alreadyNotified) return;

    const sendNotification = async () => {
      const formData = new FormData();
      formData.append('access_key','f35c5188-c9ac-4eff-b2fa-c8c36a7d666d');
      formData.append('subject', `New visitor on ${window.location.pathname}`);
      formData.append('name', 'Portfolio Tracker');
      formData.append('email', 'noreply@yourdomain.com'); // Web3Forms requires an email field
      formData.append(
        'message',
        `New visitor!\n\nPage: ${window.location.pathname}\nReferrer: ${document.referrer || 'direct'}\nTime: ${new Date().toLocaleString()}\nDevice: ${navigator.userAgent}`
      );

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          console.log('Visitor notification sent');
        } else {
          console.log('Web3Forms error:', data);
        }
      } catch (err) {
        console.log('Network error:', err);
      }
    };

    sendNotification();
    sessionStorage.setItem('visit_notified', 'true');
    console.log('Visitor notification sent successfully');

  }, []);

  return null;
}