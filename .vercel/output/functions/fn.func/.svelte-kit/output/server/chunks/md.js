import { c as create_ssr_component, v as validate_component, m as missing_component } from "./ssr.js";
const Md = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<div class="post mt-6 mx-2">${validate_component(content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}  <style data-svelte-h="svelte-1h0vpa7">.post h1,
		.post h2,
		.post h3,
		.post h4,
		.post h5,
		.post h6 {
			margin-top: 2rem;
			padding-top: 4px;
			padding-bottom: 4px;
		}
		.post h1 {
			font-size: 46px;
			font-weight: 900;
		}
		.post h2 {
			font-size: 38px;
			font-weight: 800;
		}
		.post h3 {
			font-size: 30px;
			font-weight: 700;
		}
		.post h4 {
			font-size: 24px;
			font-weight: 600;
		}
		.post h5 {
			font-size: 18px;
			font-weight: 600;
		}
		.post h6 {
			font-size: 14px;
			font-weight: 500;
		}

		.post ul {
			padding-left: 6px;
			padding-top: 6px;
			padding-bottom: 12px;
		}
		.post li {
			padding-left: 12px;
		}

		.post a:hover {
			color: rgb(68, 65, 255);
			transition: 300ms;
		}

		.post code {
			background: rgba(0, 0, 0, 0.2);
			padding: 2px;
			padding-left: 4px;
			padding-right: 4px;
			border-radius: 4px;
		}

		.post pre {
			border-radius: 8px;
			margin-top: 8px;
			margin-bottom: 8px;
			padding: 6px;
		}</style></div>`;
});
export {
  Md as M
};
