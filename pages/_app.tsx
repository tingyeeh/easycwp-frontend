import { GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Header } from "@components/header";
import { Layout } from "@components/layout";
import { DataProvider } from "@refinedev/strapi-v4";
import { appWithTranslation, useTranslation } from "next-i18next";
import { authProvider, axiosInstance } from "src/authProvider";
import { API_URL } from "src/constants";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <Layout Header={Header}>
        <Component {...pageProps} />
      </Layout>
    );
  };

  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <>
      <GitHubBanner />
      <RefineKbarProvider>
        <Refine
          routerProvider={routerProvider}
          authProvider={authProvider}
          dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
          resources={[
            {
              name: "products",
              list: "/products",
              create: "/products/create",
              edit: "/products/edit/:id",
              show: "/products/show/:id",
              meta: {
                canDelete: true,
              },
            },
            {
              name: "categories",
              list: "/categories",
              create: "/categories/create",
              edit: "/categories/edit/:id",
              show: "/categories/show/:id",
              meta: {
                canDelete: true,
              },
            },
          ]}
          i18nProvider={i18nProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          {renderComponent()}
          <RefineKbar />
          <UnsavedChangesNotifier />
        </Refine>
      </RefineKbarProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
