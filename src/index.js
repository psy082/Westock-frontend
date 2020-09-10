import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import rootReducer from "./Store/reducers/rootReducer";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
import GlobalStyles from "./Styles/GlobalStyles";
import Routes from "./Routes";

const store = createStore(rootReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
