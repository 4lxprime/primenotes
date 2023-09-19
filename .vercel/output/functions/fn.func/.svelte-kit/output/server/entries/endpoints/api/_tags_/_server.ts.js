import { e as error, j as json } from "../../../../chunks/index.js";
const GET = async (e) => {
  try {
    const resp = await e.fetch("/api/posts");
    if (!resp.ok) {
      throw error(500, "Internal Error");
    }
    const posts = await resp.json();
    const tags = e.params.tags?.split(",");
    const goodPosts = [];
    posts.forEach((post) => {
      post.tags.forEach((t1) => {
        if (tags) {
          tags.forEach((t2) => {
            if (t2 === t1) {
              goodPosts.push(post);
            }
          });
        }
      });
    });
    return json([...new Set(goodPosts)]);
  } catch (e2) {
    throw error(404, "Could not found posts");
  }
};
export {
  GET
};
