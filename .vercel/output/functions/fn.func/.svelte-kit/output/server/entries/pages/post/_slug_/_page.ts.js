import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../chunks/index.js";
const prerender = false;
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/posts/first_post.md": () => import("../../../../chunks/first_post.js").then((n) => n._), "../../../content/posts/gosvelt_framwork.md": () => import("../../../../chunks/gosvelt_framwork.js").then((n) => n._), "../../../content/posts/how_is_fortnite_working.md": () => import("../../../../chunks/how_is_fortnite_working.js").then((n) => n._) }), `../../../content/posts/${params.slug}.md`);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not found ${params.slug}`);
  }
};
export {
  load,
  prerender
};
