import React from "react";
import Nav from "../components/Nav/Nav";
import Head from "next/head";
import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }) => {
  const emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>

        <br />

        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Nav />
            </Grid>
            <Grid item xs={9}>
              <Component {...pageProps} />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
