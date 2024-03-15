import { ContextProvider } from "@/components/utils/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <div className="flex justify-center">
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  );
}
