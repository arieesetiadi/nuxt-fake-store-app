export const useApiFetch: typeof useFetch = (request, options?) => {
  const config = useRuntimeConfig();
  return useFetch(request, { baseURL: config.public.apiBaseUrl, ...options });
};
