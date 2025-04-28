const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export const fetchData = async <T>(
  url: string,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(BASE_URL+url, init);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: T = await response.json();

  return data;
};
