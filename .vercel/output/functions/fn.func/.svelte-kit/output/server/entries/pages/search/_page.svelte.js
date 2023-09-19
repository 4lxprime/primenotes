import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { t as title } from "../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = "";
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-dknzkw_START -->${$$result.title = `<title>${escape(title)} - Home</title>`, ""}<!-- HEAD_svelte-dknzkw_END -->`, ""} <div class="justify-center items-center text-center"><main><input class="px-2 py-1 mx-1 text-black rounded-full border border-zinc-500 focus:border-blue-500 focus:ring-blue-500" type="text" placeholder="search..."${add_attribute("value", value, 0)}> <button class="px-2 py-1 mx-1 rounded-full border border-zinc-500 hover:border-blue-500" data-svelte-h="svelte-6xiv4y">Search</button> ${``}</main></div>`;
});
export {
  Page as default
};
