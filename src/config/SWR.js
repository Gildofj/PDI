import api from "../utils/api";
import { SWRConfig } from "swr";

export default function SWRProvider({ children }) {
  const options = {
    suspense: false,
    fetcher: (url) => api.get(url).then(({ data }) => data),
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
    dedupingInterval: 5 * 60 * 1000,
  };

  return <SWRConfig value={options}>{children}</SWRConfig>;
}
