export const fetcher = (url: string) => fetch(
  `https://test-kingit-backend.onrender.com` + url
).then((res) => res.json());