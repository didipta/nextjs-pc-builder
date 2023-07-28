import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <NextNProgress
            color="#050505"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </Provider>
      </SessionProvider>
    </>
  );
}
