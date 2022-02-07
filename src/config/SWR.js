import api from "../utils/api";
import { SWRConfig } from "swr";

const options = {
  suspense: false,
  fetcher: (url) => api.get(url).then(({ data }) => data),
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
  dedupingInterval: 5 * 60 * 1000,
};

export default function SWRProvider({ children }) {
  return <SWRConfig value={options}>{children}</SWRConfig>;
}
