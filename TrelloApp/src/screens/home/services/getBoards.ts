import { Fetch } from '../../../services/fetchAPI';
import { API_KEY, TOKEN } from '../../../utils/constants';

const USER_NAME = 'germanapaza'

export const GetBoards = async () => {
  try {
    return await Fetch(`/members/${USER_NAME}/boards?key=${API_KEY}&token=${TOKEN}`);
  } catch (error) {
    throw error
  }
}
