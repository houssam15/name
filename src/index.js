import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ConfirmationDialogProvider } from "material-ui-confirmation";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ConfirmationDialogProvider>
      <App />
    </ConfirmationDialogProvider>
  </StrictMode>,
  rootElement
);
