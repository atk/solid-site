import { Component, createEffect } from 'solid-js';
import { Title, Meta } from 'solid-meta';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';
import { useRoutes, Router, useData } from 'solid-app-router';
import { routes } from './routes';
import { AppData } from './App.data';

export const App = () => {
  const Routes = useRoutes(routes);
  return (
    <main class="min-h-screen">
      <Router data={AppData}>
        <Lang>
          <Routes />
        </Lang>
      </Router>
    </main>
  );
};

const Lang: Component = (props) => {
  const data = useData<{ isDark: true; i18n: ReturnType<typeof createI18nContext> }>(0);
  const [t, { locale }] = data.i18n;

  createEffect(() => {
    document.documentElement.setAttribute('lang', locale());
  });

  return (
    <I18nContext.Provider value={data.i18n}>
      <Title>{t('global.title', {}, 'SolidJS · Reactive Javascript Library')}</Title>
      <Meta name="lang" content={locale()} />
      <div
        dir={t('global.dir', {}, 'ltr')}
        classList={{
          dark: data.isDark === true,
        }}
      >
        <div class="dark:bg-solid-gray dark:text-white">{props.children}</div>
      </div>
    </I18nContext.Provider>
  );
};
