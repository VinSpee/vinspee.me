import { component$ } from '@builder.io/qwik';
import { css } from 'styled-system/css';

export default component$(() => {
  return (
    <section>
      <h1 class={css({ fontSize: '2xl', fontWeight: 'semibold', mb: 4 })}>Experiments</h1>
      <p class={css({ lineHeight: 'tall' })}>
        This section previously pulled from GitHub. In Qwik City you can use loaders to fetch data at
        request-time or during pre-render. This placeholder demonstrates the route.
      </p>
    </section>
  );
});
