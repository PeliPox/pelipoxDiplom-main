import { serverUrl } from "../../config";

/**
 * @interface Interface for request data.
 * @param body - The request body.
 * @param cookie - The cookie string.
 * @param method - The request method.
 */
interface IData {
  body?: BodyInit;
  cookie?: string;
  method?: 'GET' | 'POST';
}

/**
 * @function Performs a fetch request with default settings.
 * @param path - The path of the API endpoint.
 * @param {IData} obj - The request data.
 * @returns A promise that resolves to the response data of type T.
 */
export const methodDefault = async <T>(
  path: string,
  {
    body,
    method = 'GET',
    cookie,
  }: IData): Promise<T> => {
  return fetch(`${serverUrl}/${path}`, {
    body,
    method,
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((e) => e.json())
    .catch((e) => {
      console.error(e);
    });
};
