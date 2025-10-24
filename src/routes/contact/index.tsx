import { component$ } from '@builder.io/qwik';
import { styled } from 'styled-system/jsx';

export default component$(() => {
  return (
    <styled.section>
      <styled.h1 fontSize="s3" fontWeight="semibold" mb="s1">Contact</styled.h1>
      <styled.p lineHeight="body">
        Want to get in touch? Drop a line to{' '}
        <styled.a href="mailto:v@vinspee.me" color="r" _hover={{ textDecoration: 'underline' }}>
          v@vinspee.me
        </styled.a>{' '}
        or reach out on Twitter/X and GitHub.
      </styled.p>
    </styled.section>
  );
});
