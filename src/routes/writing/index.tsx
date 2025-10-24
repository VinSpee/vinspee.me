import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { styled } from 'styled-system/jsx';

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
    <styled.section>
      <styled.h1>Writing</styled.h1>
      {posts.value.length === 0 ? (
        <styled.p>No posts found from Medium right now. Please check back later.</styled.p>
      ) : (
        <styled.div>
          {posts.value.map((post) => (
            <styled.article key={post.id} mb="s3">
              <styled.header mb="s1">
                <styled.a href={post.url} target="_blank" rel="noopener noreferrer">
                  <styled.h2 fontWeight="normal" fontSize="s1" m="0">
                    {post.title}
                  </styled.h2>
                </styled.a>
                <styled.small textTransform="uppercase" fontSize="s-1" display="block">
                  {post.published}
                </styled.small>
              </styled.header>
              <styled.p mt="0">{post.subtitle}</styled.p>
            </styled.article>
          ))}
        </styled.div>
      )}
    </styled.section>
  );
});
