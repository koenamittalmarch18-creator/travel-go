import { useState } from 'react';

import type {
  EnquiryFieldErrors,
  EnquiryFormData,
} from '../../types/enquiry.types';

import styles from './EnquiryForm.module.scss';

interface EnquiryFormProps {
  onSubmit: (data: EnquiryFormData) => void;
}

const initialFormData: EnquiryFormData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  travelers: '',
  travelDate: '',
  message: '',
};

const validateForm = (
  formData: EnquiryFormData,
): EnquiryFieldErrors => {
  const errors: EnquiryFieldErrors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email address is required';
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = 'Enter a valid email address';
  }

  if (!formData.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
    errors.phoneNumber =
      'Enter a valid 10-digit phone number';
  }

  if (!formData.travelers) {
    errors.travelers = 'Select number of travelers';
  }

  if (!formData.travelDate) {
    errors.travelDate = 'Select your preferred travel date';
  }

  return errors;
};

export function EnquiryForm({
  onSubmit,
}: EnquiryFormProps) {
  const [formData, setFormData] =
    useState<EnquiryFormData>(initialFormData);

  const [errors, setErrors] =
    useState<EnquiryFieldErrors>({});

  const handleChange = (
    field: keyof EnquiryFormData,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field as keyof EnquiryFieldErrors]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="full-name">Full Name</label>

          <input
            id="full-name"
            type="text"
            value={formData.fullName}
            onChange={(event) =>
              handleChange('fullName', event.target.value)
            }
            placeholder="Enter your name"
            autoComplete="name"
          />

          {errors.fullName && (
            <span className={styles.error}>
              {errors.fullName}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(event) =>
              handleChange('email', event.target.value)
            }
            placeholder="Enter your email"
            autoComplete="email"
          />

          {errors.email && (
            <span className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone-number">
            Phone Number
          </label>

          <input
            id="phone-number"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={formData.phoneNumber}
            onChange={(event) =>
              handleChange(
                'phoneNumber',
                event.target.value.replace(/\D/g, ''),
              )
            }
            placeholder="Enter your phone number"
            autoComplete="tel"
          />

          {errors.phoneNumber && (
            <span className={styles.error}>
              {errors.phoneNumber}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="travelers">
            Number of Travelers
          </label>

          <select
            id="travelers"
            value={formData.travelers}
            onChange={(event) =>
              handleChange('travelers', event.target.value)
            }
          >
            <option value="">Select travelers</option>
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3">3 Travelers</option>
            <option value="4">4 Travelers</option>
            <option value="5">5 Travelers</option>
            <option value="6+">6+ Travelers</option>
          </select>

          {errors.travelers && (
            <span className={styles.error}>
              {errors.travelers}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="travel-date">
          Preferred Travel Date
        </label>

        <input
          id="travel-date"
          type="date"
          value={formData.travelDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={(event) =>
            handleChange('travelDate', event.target.value)
          }
        />

        {errors.travelDate && (
          <span className={styles.error}>
            {errors.travelDate}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">
          Message <span>(Optional)</span>
        </label>

        <textarea
          id="message"
          value={formData.message}
          onChange={(event) =>
            handleChange('message', event.target.value)
          }
          placeholder="Tell us about your requirements..."
          rows={3}
          maxLength={500}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Enquiry
      </button>
    </form>
  );
}