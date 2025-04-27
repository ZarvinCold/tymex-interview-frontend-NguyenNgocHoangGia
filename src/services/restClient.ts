export const fetchData = async <T>(
  url: string,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: T = await response.json();

  return data;
};
