import { c as create_ssr_component, e as escape, d as add_attribute, b as each, v as validate_component } from "../../../../chunks/ssr.js";
import { t as title } from "../../../../chunks/config.js";
import { f as formatDate } from "../../../../chunks/utils.js";
import { M as Md } from "../../../../chunks/md.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1d4a7gf_START -->${$$result.title = `<title>${escape(title)} - ${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-1d4a7gf_END -->`, ""} <article class="mx-40"><hgroup><div class="flex"><div class="flex-grow"><p class="font-black text-6xl hover:text-blue-500 transition-all duration-300">${escape(data.meta.title)}</p> <p class="text-zinc-500 py-2">Published at ${escape(formatDate(data.meta.date))}</p></div> <div class="flex-none"><a href="${"/author/" + escape(data.meta.author, true)}"><div class="pr-5 flex justify-center items-center"><p class="px-2 hover:text-blue-500 transition-all duration-300">${escape(data.meta.author)}</p> <img${add_attribute("src", data.meta.author_pp_url, 0)} height="50px" width="50px" class="rounded-full" alt="${escape(data.meta.author, true) + " profile picture"}"></div></a></div></div></hgroup> <div class="flex my-4 mb-6">${each(data.meta.tags, (tag) => {
    return `<a href="${"/search?tag=" + escape(tag, true)}"><span class="px-5 py-2 mr-2 border text-white hover:text-blue-500 border-zinc-500 hover:border-blue-500 rounded-full bg-zinc-700 transition-all duration-200">#${escape(tag)}</span> </a>`;
  })}</div> ${validate_component(Md, "Md").$$render($$result, { content: data.content }, {}, {})}</article>`;
});
export {
  Page as default
};
