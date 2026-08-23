export const createSlug = (value: string): string => {
    return value.trim().toLowerCase().replace(/\s+/g, '-');
  };