import { component$ } from '@builder.io/qwik';
import { css } from 'styled-system/css';

export default component$(() => {
  return (
    <section>
      <h1 class={css({ fontSize: 's3', fontWeight: 'semibold', mb: 's1' })}>Experiments</h1>
      <p class={css({ lineHeight: 'body' })}>
        This section previously pulled from GitHub. In Qwik City you can use loaders to fetch data at
        request-time or during pre-render. This placeholder demonstrates the route.
      </p>
    </section>
  );
});
