import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export type FetchResults<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

// fetch()

export default function useMyFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
  refresh: boolean = false
): FetchResults<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const storageData = useLocalStorage<T>(input.toString())
    const controller = new AbortController();
    if (storageData && !refresh) {
      setLoading(false)
      setError(null)
      setData(storageData)

    } else {

      fetchData(input, { signal: controller.signal, ...init });
    }
    return () => {
      controller.abort();
    };
  }, [input]);
  const fetchData = (input: RequestInfo | URL, init?: RequestInit) => {
    setLoading(true);
    setData(null)
    setError(null)
    fetch(input, init)
      .then((res) => {
        if (!res.ok) throw new Error(`Request to ${input} failed`);
        return res.json();
      })
      .then((dt) => {
        useLocalStorage<T>(input.toString(), dt)
        setData(dt);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.error("Aborted");
          return;
        }
        setError(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, error, loading };
}
