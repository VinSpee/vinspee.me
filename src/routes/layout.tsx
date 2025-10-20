import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { css, cx } from 'styled-system/css';

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
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji',
});

const headerCls = css({
  py: 4,
  borderBottomWidth: '1px',
  borderColor: 'gray.200',
});

const navCls = css({
  display: 'flex',
  gap: 4,
});

const mainCls = css({
  p: 6,
  maxWidth: '48rem',
  mx: 'auto',
});

const footerCls = css({
  py: 4,
  borderTopWidth: '1px',
  borderColor: 'gray.200',
  color: 'gray.500',
});

const linkCls = css({
  textDecoration: 'none',
  color: 'inherit',
  _hover: { textDecoration: 'underline' },
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
      <main class={mainCls}>
        <slot />
      </main>
      <footer class={footerCls}>
        © {new Date().getFullYear()} Vince Speelman
      </footer>
    </div>
  );
});
