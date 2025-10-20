import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { css } from 'styled-system/css';

export const RouterHead = component$(() => {
  const loc = useLocation();
  return (
    <>
      <title>vinspee.me</title>
      <meta name="description" content="Vince Speelman – portfolio, writing, experiments, and contact." />
      <link rel="canonical" href={loc.url.href} />
      <meta name="generator" content="Qwik City" />
    </>
  );
});

const container = css({
  bg: 'r',
  color: 'dark',
  fontFamily: 'sans',
  fontSize: 's1',
  minH: '100vh',
  h: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const headerCls = css({
  flex: '0 0 auto',
  px: 's1',
  pt: 's5',
});

const navCls = css({
  display: 'flex',
  gap: 's1',
});

const mainCls = css({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  bg: 'lightl',
  color: 'darkll',
  px: 's1',
  lineHeight: 'body',
});

const innerMain = css({
  minH: '100%',
  h: '100%',
  mb: 's3',
});

const footerCls = css({
  bg: 'light',
  borderTopWidth: 's-6',
  borderColor: 'lightd',
  flex: '0 0 auto',
});

const footerInner = css({
  maxW: 'container',
});

const linkCls = css({
  textDecoration: 'none',
  color: 'inherit',
  _hover: { textDecoration: 'underline', color: 'light' },
});

export default component$(() => {
  return (
    <div class={container}>
      <header class={headerCls}>
        <nav class={navCls}>
          <Link class={linkCls} href="/">Home</Link>
          <Link class={linkCls} href="/writing/">Writing</Link>
          <Link class={linkCls} href="/experiments/">Experiments</Link>
          <Link class={linkCls} href="/contact/">Contact</Link>
        </nav>
      </header>
      <div class={mainCls}>
        <div class={innerMain}>
          <slot />
        </div>
      </div>
      <footer class={footerCls}>
        <div class={footerInner}>© {new Date().getFullYear()} Vince Speelman</div>
      </footer>
    </div>
  );
});
