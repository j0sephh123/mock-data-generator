const BASE_URL = "/api";

type FetchOptions = Omit<RequestInit, "body"> & { body?: unknown };

async function get<T>(path: string, options?: FetchOptions): Promise<T> {
  return await fetchWrapper<T>(`${BASE_URL}${path}`, {
    ...options,
    method: "GET",
  });
}

async function post<T>(
  path: string,
  body: unknown,
  options?: FetchOptions
): Promise<T> {
  return await fetchWrapper<T>(`${BASE_URL}${path}`, {
    ...options,
    method: "POST",
    body,
  });
}

async function put<T>(
  path: string,
  body: unknown,
  options?: FetchOptions
): Promise<T> {
  return await fetchWrapper<T>(`${BASE_URL}${path}`, {
    ...options,
    method: "PUT",
    body: body ? JSON.stringify(body) : undefined,
  });
}

async function del<T>(path: string, options?: FetchOptions): Promise<T> {
  return await fetchWrapper<T>(`${BASE_URL}${path}`, {
    ...options,
    method: "DELETE",
  });
}

async function fetchWrapper<T>(
  url: string,
  options?: FetchOptions
): Promise<T> {
  const { body, headers, ...restOptions } = options || {};

  const response = await fetch(url, {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    try {
      const errorResponse = JSON.parse(errorText);
      throw new Error(errorResponse.message || "Something went wrong");
    } catch {
      throw new Error(errorText || "Something went wrong");
    }
  }

  return response.json();
}

const fetchApi = { get, post, put, del };

export default fetchApi;
