import { c as create_ssr_component, e as escape, d as add_attribute, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { t as title } from "../../../../chunks/config.js";
import { f as formatDate } from "../../../../chunks/utils.js";
import { M as Md } from "../../../../chunks/md.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-18a34wl_START -->${$$result.title = `<title>${escape(title)} - ${escape(data.meta.username)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.username, 0)}><!-- HEAD_svelte-18a34wl_END -->`, ""} <article class="mx-40"><hgroup><div class="flex items-center"><img${add_attribute("src", data.meta.pp_url, 0)} height="100px" width="100px" class="rounded-full mr-4" alt="${escape(data.meta.username, true) + " profile picture"}"> <div><p class="font-black text-6xl hover:text-blue-500 transition-all duration-300">${escape(data.meta.username)}</p> <p class="text-zinc-500 py-2">Member from ${escape(formatDate(data.meta.date))}</p></div></div></hgroup> <div class="flex my-4 mb-6">${each(data.meta.tags, (tag) => {
    return `<a href="${"/search?tag=" + escape(tag, true)}"><span class="px-5 py-2 mr-2 border text-white hover:text-blue-500 border-zinc-500 hover:border-blue-500 rounded-full bg-zinc-700 transition-all duration-200">#${escape(tag)}</span> </a>`;
  })}</div> ${validate_component(Md, "Md").$$render($$result, { content: data.content }, {}, {})}</article>`;
});
export {
  Page as default
};
