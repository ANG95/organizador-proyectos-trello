export const capitalizeFirstLetter = (str: string) => {
  return (str.charAt(0).trim().toUpperCase() + str.slice(1).trim().toLowerCase()) || '';
}

type phoneNumberFormat = {
  value: string;
  formatted: string;
};

export const phoneNumberFormat = (phoneNumber: string): phoneNumberFormat => {
  let formattedNumber = phoneNumber.replace(/\D/g, '');
  if (formattedNumber.length > 3 && formattedNumber.length <= 6) {
    formattedNumber = formattedNumber.replace(/^(\d{3})(\d{1,3})/, '$1 $2');
  } else if (formattedNumber.length > 6) {
    formattedNumber = formattedNumber.replace(/^(\d{3})(\d{1,3})(\d{1,3})/, '$1 $2 $3');
  }
  return {
    value: formattedNumber.replace(/\s/g, ''),
    formatted: formattedNumber,
  };
};

