let prerender = false;
const load = async ({ fetch, url }) => {
  const tag = url.searchParams.get("tag");
  let posts = [];
  if (!tag) {
    const resp = await fetch("/api/posts");
    posts = await resp.json();
  }
  return {
    posts,
    tag
  };
};
export {
  load,
  prerender
};
