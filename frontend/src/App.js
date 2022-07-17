import React, { Suspense } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LoadRoute from "./components/elements/loadRouter/LoadRoute";

import routes from "./routes";

import "rc-dialog/assets/index.css";
import "rc-notification/assets/index.css";
import "rc-checkbox/assets/index.css";
import "rc-switch/assets/index.css";
import "rc-pagination/assets/index.css";
import "rc-tabs/assets/index.css";

import "./i18n";
import i18n from "i18next";
import { defaultLanguage, helmetHtmlByLang, supportedLanguages } from "./utils/consts";
import i18next from "i18next";

function App() {
  const [cookies] = useCookies(["i18next"]);
  const currentUrl = new URL(document.location);

  let lngFromUrl = defaultLanguage;

  Object.keys(supportedLanguages).forEach(language => {
    let matches = currentUrl.href.match(`(^${currentUrl.origin.replaceAll("/", "\\/")}${supportedLanguages[language].regex})`);

    if(i18n.options.supportedLngs.includes(language) && matches && matches[0] !== '' && matches[1] !== '') {
      lngFromUrl = language;
    }
  })

  let baseNameLang = lngFromUrl === defaultLanguage ? "/" : supportedLanguages[lngFromUrl].url;

  i18n.on("languageChanged", function (lng) {
    let currentUrl = new URL(document.location);
    let tmp = currentUrl.href.replace(currentUrl.origin, "").replace("/" + lngFromUrl, "");

    if (cookies["i18next"] !== lng) {
      baseNameLang = defaultLanguage !== cookies.i18next ? "/" : lng;

      window.location.replace(currentUrl.origin + supportedLanguages[lng].url + tmp);
    }
  });

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={helmetHtmlByLang[lngFromUrl]}/>
      </Helmet>
      <Router basename={baseNameLang}>
          <Suspense fallback="Loading...">
            <Switch>
              {routes.map((route, i) => (
                <LoadRoute key={i} {...route} />
              ))}
              <Redirect to="/page-not-found"/>
            </Switch>
          </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
