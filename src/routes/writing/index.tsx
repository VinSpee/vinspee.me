import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

interface MediumPost {
  id: string;
  title: string;
  url: string;
  subtitle: string;
  published: string;
}

interface Rss2JsonResponse {
  status: string;
  feed: Record<string, unknown>;
  items: Array<{
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail?: string;
    description: string;
    categories: string[];
  }>;
}

export const useMediumPosts = routeLoader$(async ({ cacheControl, status }) => {
  cacheControl({
    // cache on CDN for 10 minutes, allow stale for 1 day
    sMaxAge: 600,
    staleWhileRevalidate: 86400,
  });

  const username = '@vinspee';
  const rssUrl = `https://medium.com/feed/${username}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      status(502);
      return [] as MediumPost[];
    }
    const data = (await res.json()) as Rss2JsonResponse;
    const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();

    const fmt = (d: string) =>
      new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      });

    const posts: MediumPost[] = data.items.slice(0, 20).map((item) => ({
      id: item.guid || item.link,
      title: item.title,
      url: item.link,
      subtitle: stripHtml(item.description).slice(0, 240),
      published: fmt(item.pubDate),
    }));

    return posts;
  } catch (e) {
    status(500);
    return [] as MediumPost[];
  }
});

export default component$(() => {
  const posts = useMediumPosts();

  return (
    <section>
      <h1>Writing</h1>
      {posts.value.length === 0 ? (
        <p>No posts found from Medium right now. Please check back later.</p>
      ) : (
        <div>
          {posts.value.map((post) => (
            <article key={post.id} style={{ marginBottom: '1.75rem' }}>
              <header style={{ marginBottom: '0.5rem' }}>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <h2 style={{ margin: 0, fontWeight: 400, fontSize: '1.125rem' }}>{post.title}</h2>
                </a>
                <small style={{ textTransform: 'uppercase', fontSize: '0.8rem', display: 'inline-block', width: '100%' }}>
                  {post.published}
                </small>
              </header>
              <p style={{ marginTop: 0 }}>{post.subtitle}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
});
