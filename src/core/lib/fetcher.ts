export const fetcher = (url: string) => fetch(
  `http://localhost:5000` + url
).then((res) => res.json());