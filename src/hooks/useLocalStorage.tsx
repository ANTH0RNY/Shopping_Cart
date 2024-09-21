export default function useLocalStorage<T>(key: string, value?: T): (T | null){
  if (value)
  {
    localStorage.setItem(key, JSON.stringify(value))
    return null
  }
  const output = localStorage.getItem(key)
  if (output == null){
    return null
  }
  return JSON.parse(output)
}
