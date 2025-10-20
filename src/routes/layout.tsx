import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { styled } from 'styled-system/jsx';
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

const linkCls = css({
  textDecoration: 'none',
  color: 'inherit',
  _hover: { textDecoration: 'underline', color: 'light' },
});

export default component$(() => {
  return (
    <styled.div bg="r" color="dark" fontFamily="sans" fontSize="s1" minH="100vh" h="100%" display="flex" flexDirection="column">
      <styled.header flex="0 0 auto" px="s1" pt="s5">
        <styled.nav display="flex" gap="s1">
          <Link class={linkCls} href="/">Home</Link>
          <Link class={linkCls} href="/writing/">Writing</Link>
          <Link class={linkCls} href="/experiments/">Experiments</Link>
          <Link class={linkCls} href="/contact/">Contact</Link>
        </styled.nav>
      </styled.header>
      <styled.div flex="1 1 auto" display="flex" flexDirection="column" bg="lightl" color="darkll" px="s1" lineHeight="body">
        <styled.div minH="100%" h="100%" mb="s3">
          <slot />
        </styled.div>
      </styled.div>
      <styled.footer bg="light" borderTopWidth="s-6" borderTopStyle="solid" borderColor="lightd" flex="0 0 auto">
        <styled.div maxW="container">© {new Date().getFullYear()} Vince Speelman</styled.div>
      </styled.footer>
    </styled.div>
  );
});
