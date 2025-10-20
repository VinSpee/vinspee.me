import { component$ } from '@builder.io/qwik';
import { styled } from 'styled-system/jsx';

export default component$(() => {
  return (
    <styled.section>
      <styled.h1 fontSize="s3" fontWeight="semibold" mb="s1">Hi, I’m Vince.</styled.h1>
      <styled.p lineHeight="body" mb="s1">
        This site has been migrated from React/Gatsby to Qwik + Qwik City. It keeps the spirit of the
        original portfolio and blog while embracing a modern, resumable architecture and lightning-fast
        performance.
      </styled.p>
      <styled.p lineHeight="body">
        Use the navigation above to browse writing, experiments, and ways to get in touch.
      </styled.p>
    </styled.section>
  );
});
