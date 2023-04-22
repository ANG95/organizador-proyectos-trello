import { Fetch } from '../../../services/fetchAPI';
import { API_KEY, TOKEN } from '../../../utils/constants';

export const GetBoardColumns = async (idBoardList: string) => {
  try {
    return await Fetch(`/lists/${idBoardList}/cards?fields=id,name,desc&key=${API_KEY}&token=${TOKEN}`);
  } catch (error) {
    throw error
  }
}
