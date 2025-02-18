import { Component, For } from 'solid-js';
import Nav from '../components/Nav';
import Header from '../components/Header';

import downloadArrow from '../assets/download-arrow.svg';
import Footer from '../components/Footer';
import { useI18n } from '@solid-primitives/i18n';

const assets = [
  {
    title: 'With Wordmark',
    background: 'bg-white',
    example: '/img/logo/with-wordmark/logo.svg',
    assets: {
      SVG: '/img/logo/with-wordmark/logo.svg',
      PNG: '/img/logo/with-wordmark/logo.png',
      EPS: '/img/logo/with-wordmark/logo.eps',
      JPG: '/img/logo/with-wordmark/logo.jpg',
    },
  },
  {
    title: 'Without Wordmark',
    background: 'bg-white',
    example: '/img/logo/without-wordmark/logo.svg',
    assets: {
      SVG: '/img/logo/without-wordmark/logo.svg',
      PNG: '/img/logo/without-wordmark/logo.png',
      EPS: '/img/logo/without-wordmark/logo.eps',
      JPG: '/img/logo/without-wordmark/logo.jpg',
    },
  },
  {
    title: 'Only Wordmark',
    background: 'bg-white',
    example: '/img/logo/wordmark/logo.svg',
    assets: {
      SVG: '/img/logo/wordmark/logo.svg',
      PNG: '/img/logo/wordmark/logo.png',
      EPS: '/img/logo/wordmark/logo.eps',
      JPG: '/img/logo/wordmark/logo.jpg',
    },
  },
  {
    title: 'With Wordmark',
    background: 'bg-solid-gray',
    example: '/img/logo/dark-with-wordmark/logo.svg',
    assets: {
      SVG: '/img/logo/dark-with-wordmark/logo.svg',
      PNG: '/img/logo/dark-with-wordmark/logo.png',
      EPS: '/img/logo/dark-with-wordmark/logo.eps',
      JPG: '/img/logo/dark-with-wordmark/logo.jpg',
    },
  },
  {
    title: 'Dark Without Wordmark',
    background: 'bg-solid-gray',
    example: '/img/logo/dark-without-wordmark/logo.svg',
    assets: {
      SVG: '/img/logo/dark-without-wordmark/logo.svg',
      PNG: '/img/logo/dark-without-wordmark/logo.png',
      EPS: '/img/logo/dark-without-wordmark/logo.eps',
      JPG: '/img/logo/dark-without-wordmark/logo.jpg',
    },
  },
  {
    title: 'Dark Only Wordmark',
    background: 'bg-solid-gray',
    example: '/img/logo/dark-wordmark/logo.svg',
    assets: {
      SVG: '/img/logo/dark-wordmark/logo.svg',
      PNG: '/img/logo/dark-wordmark/logo.png',
      EPS: '/img/logo/dark-wordmark/logo.eps',
      JPG: '/img/logo/dark-wordmark/logo.jpg',
    },
  },
];

const AssetPanel: Component<{
  title: string;
  example: string;
  assets: Record<string, string>;
  background: string;
}> = ({ title, assets, example, background }) => {
  const [t] = useI18n();
  const slug = title.replaceAll(' ', '_').toLowerCase();
  return (
    <div class="shadow-md">
      <div class="p-5 border-b">{t(`media.resources.${slug}`, {}, title)}</div>
      <div class={`py-8 h-56 flex px-10 items-center justify-center ${background}`}>
        <img class="max-h-20" src={example} alt={title} />
      </div>
      <div class="border-b border-t grid grid-cols-4 text-sm text-solid">
        {Object.entries(assets).map(([name, path]) => (
          <a
            class="flex p-3 justify-center border-r transition hover:opacity-50"
            download={true}
            href={path}
          >
            <span class="sr-only">Download asset</span>
            <img class="w-4 mr-3" alt="Download Arrow" src={downloadArrow} /> {name}
          </a>
        ))}
      </div>
    </div>
  );
};

const Media: Component = () => {
  const [t] = useI18n();
  return (
    <div class="flex flex-col">
      <Nav showLogo />
      <Header title={t('media.title')} />
      <div class="my-10 pt-5 pb-10 px-3 lg:px-12 container">
        <div class="mb-10 md:grid md:grid-cols-6 gap-10">
          <div class="col-span-4">{t('media.copy')}</div>
          <div class="col-span-2 col-end-7 mt-9 md:mt-0">
            <div class="flex mb-2">
              <span class="w-5/12 inline-block font-semibold">
                {t('media.brand_font', {}, 'Brand Font')}
              </span>{' '}
              Gordita
            </div>
            <div class="flex mb-2">
              <span class="w-5/12 inline-block font-semibold">
                {t('media.primary', {}, 'Primary Color')}
              </span>
              <figure class="rounded bg-solid-default ltr:mr-2 rtl:ml-2 h-5 w-5 inline-block" />{' '}
              #2c4f7c
            </div>
            <div class="flex mb-2">
              <span class="w-5/12 inline-block font-semibold">
                {t('media.secondary', {}, 'Secondary Color')}
              </span>
              <figure class="rounded bg-solid-medium ltr:mr-2 rtl:ml-2 h-5 w-5 inline-block" />{' '}
              #335d92
            </div>
            <div class="flex mb-2">
              <span class="w-5/12 inline-block font-semibold">
                {t('media.light', {}, 'Light Color')}
              </span>
              <figure class="rounded bg-solid-light ltr:mr-2 rtl:ml-2 h-5 w-5 inline-block" />{' '}
              #446b9e
            </div>
            <div class="flex">
              <span class="w-5/12 inline-block font-semibold">
                {t('media.accent', {}, 'Accent Color')}
              </span>
              <figure class="rounded bg-solid-accent ltr:mr-2 rtl:ml-2 h-5 w-5 inline-block" />{' '}
              #66e6ac
            </div>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-3 gap-4 space-y-5 md:space-y-0">
          <For each={assets}>{(props) => <AssetPanel {...props} />}</For>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Media;
