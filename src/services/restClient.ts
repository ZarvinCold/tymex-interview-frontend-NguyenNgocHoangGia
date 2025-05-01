const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export const fetchData = async <T>(
  url: string,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(BASE_URL + url, init);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: T = await response.json();

  return data;
};

export const postData = async <T, R>(
  url: string,
  body: T,
  signal?: AbortSignal,
): Promise<R> => {
  return await fetchData<R>(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    signal,
    credentials: "same-origin",
  });
};
