// Base URL for the backend API. Empty in development, where Vite proxies
// /api to the local server; set to the Railway domain (VITE_API_URL) in the
// Netlify production build.
export const API_URL = import.meta.env.VITE_API_URL ?? "";
