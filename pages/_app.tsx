import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";
import dynamic from "next/dynamic";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import { Router } from "next/router";
import Header from "@/components/common/header";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <Container maxWidth="container.lg">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
