import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';
import Root from './root';

export default function render(opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    ...opts,
  });
}
