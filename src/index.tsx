import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {setupIonicReact} from "@ionic/react";

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setupIonicReact({
    swipeBackEnabled: false,
    innerHTMLTemplatesEnabled: true,
    platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
         * We do not want that because then monitors or notebooks with touchscreens are classified as mobile.
         **/
        mobile: (win) => {
            alert("Hello");
            console.log("Mobile true");
            return true;
        },
        desktop: (win) => {
            alert("Hello");
            console.log("Desktop true");
            return false;
        },
    },
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
