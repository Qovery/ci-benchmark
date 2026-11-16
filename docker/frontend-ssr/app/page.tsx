import { format } from "date-fns";
export default function Page() {
  return <p>bench ssr ok — {format(new Date(), "yyyy-MM-dd")}</p>;
}

// vendor bench frontend-ssr warm 1

// vendor bench frontend-ssr warm 2
