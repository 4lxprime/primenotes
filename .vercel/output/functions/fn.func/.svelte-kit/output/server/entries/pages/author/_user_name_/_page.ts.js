import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../chunks/index.js";
const prerender = false;
const load = async ({ params }) => {
  try {
    const author = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../content/authors/4lxprime.md": () => import("../../../../chunks/4lxprime.js") }), `../../../content/authors/${params.user_name}.md`);
    return {
      content: author.default,
      meta: author.metadata
    };
  } catch (e) {
    throw error(404, "Could not found author");
  }
};
export {
  load,
  prerender
};
