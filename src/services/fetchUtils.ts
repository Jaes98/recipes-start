/**
 * Utility Method to create options for a fetch call
 * @param method GET, POST, PUT, DELETE
 * @param body  The request body (only relevant for POST and PUT)
 * @returns
 */
export function makeOptions(
  method: string,
  body: object | null,
  useToken?: boolean
): RequestInit {
  const opts: RequestInit = {
    method: method,
    headers: <Record<string, string>>{
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  if (useToken) {
    //set the token in the header
    const token = localStorage.getItem("token");
    if (token) {
      // @ts-ignore
      opts.headers["Authorization"] = "Bearer " + token;
    }
  }
  return opts;
}

/**
 * Utility Method to handle http-errors returned as a JSON-response with fetch
 * Meant to be used in the first .then() clause after a fetch-call
 */
export async function handleHttpErrors(res: Response) {
  if (!res.ok) {
    const errorResponse = await res.json();
    const msg = errorResponse.message
      ? errorResponse.message
      : "No details provided";
    throw new Error(msg);
  }
  return res.json();
}
