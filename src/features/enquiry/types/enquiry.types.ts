export interface EnquiryFormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    travelers: string;
    travelDate: string;
    message: string;
  }
  
  export interface EnquiryFieldErrors {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    travelers?: string;
    travelDate?: string;
  }