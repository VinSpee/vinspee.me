import { component$ } from '@builder.io/qwik';
import { css } from 'styled-system/css';

export default component$(() => {
  return (
    <section>
      <h1 class={css({ fontSize: 's3', fontWeight: 'semibold', mb: 's1' })}>Contact</h1>
      <p class={css({ lineHeight: 'body' })}>
        Want to get in touch? Drop a line to <a href="mailto:v@vinspee.me" class={css({ color: 'r', _hover: { textDecoration: 'underline' } })}>v@vinspee.me</a> or reach out on
        Twitter/X and GitHub.
      </p>
    </section>
  );
});
