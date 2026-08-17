import type {
    ContactDetail,
    ContactFaq,
  } from '../types/contact.types';
  
  export const contactDetails: ContactDetail[] = [
    {
      label: 'Phone Number',
      value: '+91 98765 43210',
      description: 'Mon - Sun | 8:00 AM - 8:00 PM',
      type: 'phone',
    },
    {
      label: 'Email Address',
      value: 'support@travelgo.com',
      description: 'We reply within a few hours',
      type: 'email',
    },
    {
      label: 'Our Office',
      value: '123, TravelGo Tower, Sector 62,',
      description: 'Noida, Uttar Pradesh - 201309, India',
      type: 'location',
    },
  ];
  
  export const contactFaqs: ContactFaq[] = [
    {
      question: 'Do you offer customized travel packages?',
      answer:
        'Yes. Our travel experts can help customize packages according to your destination, duration, budget and preferences.',
    },
    {
      question: 'What destinations do you cover?',
      answer:
        'We offer curated travel packages across popular destinations in India including Himachal Pradesh, Kerala, Rajasthan, Uttarakhand, Goa and more.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach our support team by phone or email using the contact details provided above.',
    },
    {
      question: 'What is included in your tour packages?',
      answer:
        'Package inclusions depend on the selected trip and may include accommodation, transportation, local sightseeing and guide services.',
    },
  ];