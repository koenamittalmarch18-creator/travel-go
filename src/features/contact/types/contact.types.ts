export interface ContactDetail {
    label: string;
    value: string;
    description: string;
    type: 'phone' | 'email' | 'location';
  }
  
  export interface ContactFaq {
    question: string;
    answer: string;
  }