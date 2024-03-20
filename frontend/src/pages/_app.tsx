import '@/styles/globals.css';
import Navbar from '../components/Navbar'; // Ensure correct casing and use default import

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Navbar /> {/* Render the Header component */}
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
