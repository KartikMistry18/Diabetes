import '@/styles/globals.css';
import Header from '../../components/Navbar'; // Ensure correct casing and use default import

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Header /> {/* Render the Header component */}
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
