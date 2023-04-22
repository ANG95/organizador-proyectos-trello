import { store } from '../redux/store';
import { BASE_URL } from '../utils/constants';

const DEFAULT_METHOD = 'GET';
const DEFAULT_CONTENT_TYPE = 'application/json';

interface FetchProps {
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
  body?: string | Object | null | undefined | [],
  authorization?: string | null,
  contentType?:
  | 'multipart/form-data'
  | 'application/json'
}

async function Fetch(
  endpointName: string,
  {
    method = DEFAULT_METHOD,
    body,
    authorization = store.getState().signIn.token,
    contentType = DEFAULT_CONTENT_TYPE,
  }: FetchProps = {
      method: DEFAULT_METHOD,
      body: null,
      authorization: store.getState().signIn.token,
      contentType: DEFAULT_CONTENT_TYPE,
    },
  urlAPI = BASE_URL,
) {
  let content: any;
  if (method !== DEFAULT_METHOD) {
    content =
      contentType === DEFAULT_CONTENT_TYPE ? JSON.stringify(body) : body;
  }

  const requestData: any = {
    method,
    headers: {
      Authorization: `Bearer ${authorization}`,
      'Content-Type': contentType,
    },
    body: content,
  };

  try {
    const response = await fetch(`${urlAPI}${endpointName}`, requestData);
    const data = await response.json();
    if (response.status === 201 || response.status === 200) return data;

    return await Promise.reject(data);
  } catch (error) {
    return await Promise.reject(error);
  }
}

export { Fetch };
