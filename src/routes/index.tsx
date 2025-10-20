import { component$ } from '@builder.io/qwik';
import { css } from 'styled-system/css';

export default component$(() => {
  return (
    <section>
      <h1 class={css({ fontSize: 's3', fontWeight: 'semibold', mb: 's1' })}>Hi, I’m Vince.</h1>
      <p class={css({ lineHeight: 'body', mb: 's1' })}>
        This site has been migrated from React/Gatsby to Qwik + Qwik City. It keeps the spirit of the
        original portfolio and blog while embracing a modern, resumable architecture and lightning-fast
        performance.
      </p>
      <p class={css({ lineHeight: 'body' })}>
        Use the navigation above to browse writing, experiments, and ways to get in touch.
      </p>
    </section>
  );
});
