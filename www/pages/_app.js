import React from "react";
import App, { Container } from "next/app";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import { Provider } from "unstated";
import { counterStore } from "../unstated/CounterContainer";

const linkStyle = {
  margin: "0 10px 0 0"
};

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let serverState = {};

    if (ctx.req) {
      // reset state for each request
      counterStore.resetState();
      // process state, in this case counter start with 999
      counterStore.initState(999);
      serverState = counterStore.state;
    }

    return { pageProps, serverState };
  }

  constructor(props) {
    super(props);
    // pass the state to client store
    // serverState will be reset when client navigate with Link
    if (process.browser) {
      counterStore.initState(props.serverState.count);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div style={{ marginBottom: 20 }}>
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
          <Link href="/forever">
            <a style={linkStyle}>Forever</a>
          </Link>
          <Link href="/non-existing">
            <a style={linkStyle}>Non Existing Page</a>
          </Link>
        </div>

        <Provider inject={[counterStore]}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
