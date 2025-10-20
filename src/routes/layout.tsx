import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

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

export default component$(() => {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/writing/">Writing</Link>
          <Link href="/experiments/">Experiments</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </header>
      <main style={{ padding: '1.5rem', maxWidth: '48rem', margin: '0 auto' }}>
        <slot />
      </main>
      <footer style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', color: '#6b7280' }}>
        © {new Date().getFullYear()} Vince Speelman
      </footer>
    </div>
  );
});
