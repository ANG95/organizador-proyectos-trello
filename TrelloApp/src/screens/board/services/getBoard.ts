import { Fetch } from '../../../services/fetchAPI';
import { API_KEY, TOKEN } from '../../../utils/constants';

export const GetBoard = async (idBoard: string) => {
  try {
    return await Fetch(`/boards/${idBoard}?lists=open&list_fields=id,name&key=${API_KEY}&token=${TOKEN}`);
  } catch (error) {
    throw error
  }
}
