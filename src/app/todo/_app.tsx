import { SessionProvider } from "next-auth/react";
import { Provider as NextAuthProvider } from "next-auth/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
