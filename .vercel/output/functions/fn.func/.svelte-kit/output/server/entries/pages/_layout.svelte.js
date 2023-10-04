import { c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { t as title } from "../../chunks/config.js";
import { f as formatDate } from "../../chunks/utils.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date;
  let time = /* @__PURE__ */ new Date();
  date = formatDate(time.toString());
  return `<header class="mb-4 p-1 bg-zinc-800"><nav class="flex mx-36"><a class="flex-none hover:text-blue-500 transition-all duration-300" href="/">${escape(title)}</a> <ul class="flex flex-grow justify-center text-center items-center">${each(
    [
      { url: "/", name: "Home" },
      { url: "/search", name: "Search" },
      { url: "/rss.xml", name: "Rss" }
    ],
    (head) => {
      return `<li class="px-2"><a${add_attribute("href", head.url, 0)} class="font-light hover:text-blue-500 transition-all duration-300">${escape(head.name)}</a> </li>`;
    }
  )}</ul> <p class="flex-none">${escape(date)}</p></nav></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="fixed bottom-0 left-0 w-full justify-center text-center items-center bg-zinc-800">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</footer>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="mb-10 m-8"><div>${slots.default ? slots.default({}) : ``}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
