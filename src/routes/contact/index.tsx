import { component$ } from '@builder.io/qwik';
import { css } from 'styled-system/css';

export default component$(() => {
  return (
    <section>
      <h1 class={css({ fontSize: '2xl', fontWeight: 'semibold', mb: 4 })}>Contact</h1>
      <p class={css({ lineHeight: 'tall' })}>
        Want to get in touch? Drop a line to <a href="mailto:v@vinspee.me" class={css({ color: 'blue.600', _hover: { textDecoration: 'underline' } })}>v@vinspee.me</a> or reach out on
        Twitter/X and GitHub.
      </p>
    </section>
  );
});
