import Question from "./Question";

export const fetchHttp = async <T>(
  fetchMethod = window.fetch,
  url: string = "http://localhost:3333/2",
  headers: {} = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  },
  ...params
): Promise<T> => {
  const response = await fetchMethod(url, headers);
  //const body = await response.json();
  //const { question } = await body as Promise<Question>;
  return response.json();
};
