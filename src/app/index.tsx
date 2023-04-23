import React from 'react';
import "./index.css";
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/theme';
import { withProviders } from "./providers";
import { Routing } from "pages";
import Header from 'widgets/header';
import { Provider } from "react-redux";
import { setupStore } from "shared/api/store";

const store = setupStore();


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Header />
        <Routing />
      </ThemeProvider>
    </Provider>
  );
}

export default withProviders(App);