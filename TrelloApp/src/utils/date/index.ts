import { format as Fr } from 'date-fns';

export const formatDate = (date: string, format: string = "dd-MM-yyyy H:mm") => {
  const formattedDate = Fr(new Date(date), format);
  return formattedDate
}

