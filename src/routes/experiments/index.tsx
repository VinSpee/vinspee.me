import { component$ } from '@builder.io/qwik';
import { styled } from 'styled-system/jsx';

export default component$(() => {
  return (
    <styled.section>
      <styled.h1 fontSize="s3" fontWeight="semibold" mb="s1">Experiments</styled.h1>
      <styled.p lineHeight="body">
        This section previously pulled from GitHub. In Qwik City you can use loaders to fetch data at
        request-time or during pre-render. This placeholder demonstrates the route.
      </styled.p>
    </styled.section>
  );
});
