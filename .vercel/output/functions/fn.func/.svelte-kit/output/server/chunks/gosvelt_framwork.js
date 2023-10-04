import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const githubLogo = "/github_white.png";
const Git = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { repo } = $$props;
  let lang;
  const langColor = (l) => {
    let tmpl = "flex bg-zinc-950 border-b-4 ";
    switch (l) {
      case "Go":
        return tmpl += "border-[#00add8]";
      case "JavaScript":
        return tmpl += "border-[#f1e05a]";
      case "TypeScript":
        return tmpl += "border-[#3178c6]";
      case "Svelte":
        return tmpl += "border-[#ff3e00]";
      case "HTML":
        return tmpl += "border-[#e34c26]";
      case "Python":
        return tmpl += "border-[#3572a5]";
      case "PHP":
        return tmpl += "border-[#4f5d95]";
      case "V":
        return tmpl += "border-[#4f87c4]";
      case "":
        return tmpl += "border-[]";
      default:
        return tmpl;
    }
  };
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0)
    $$bindings.repo(repo);
  return `<a class="flex my-10 mx-2" href="${"https://github.com/" + escape(repo, true)}" target="_blank"><div${add_attribute("class", langColor(lang), 0)}><img${add_attribute("src", githubLogo, 0)} alt="github logo"${add_attribute("width", 42, 0)}${add_attribute("height", 42, 0)} class="flex-none rounded-full"> <div class="flex-grow mx-3">${`<p class="" data-svelte-h="svelte-8744ga">project</p>`} ${`<p class="text-zinc-500 font-light leading-3" data-svelte-h="svelte-1ew71ra">author</p>`}</div> <div class="bg-zinc-700">${`<p class="flex-none px-2" data-svelte-h="svelte-fe3zrm">0</p>`} <p class="leading-3 text-center" data-svelte-h="svelte-1jj1pfi">⭐</p></div></div></a>`;
});
const metadata = {
  "title": "gosvelt framwork",
  "description": "what is and how to use gosvelt framwork that can serve svelte pages through golang",
  "author": "4lxprime",
  "author_pp_url": "https://avatars.githubusercontent.com/u/58915711?v=4",
  "date": "2023-08-31",
  "tags": ["gosvelt", "golang", "svelte"],
  "published": true
};
const Gosvelt_framwork = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(Git, "Git").$$render($$result, { repo: "4lxprime/Gosvelt" }, {}, {})} <h2 id="table-of-content" data-svelte-h="svelte-1gd4hm8">Table of Content</h2> <ul data-svelte-h="svelte-a6o6hz"><li><p><a href="#gosvelt">GoSvelt</a></p> <ul><li><p><a href="#why-gosvelt-">why gosvelt ?</a></p> <ul><li><a href="#fullstack-integration-of-svelte">fullstack integration of svelte</a></li> <li><a href="#cool-way-to-made-sse">cool way to made sse</a></li> <li><a href="#pretty-simple-syntax">pretty simple syntax</a></li></ul></li> <li><p><a href="#todo">todo</a></p></li></ul></li></ul> <h1 id="gosvelt" data-svelte-h="svelte-1tql9nw">GoSvelt</h1> <p data-svelte-h="svelte-tjjkj7">the <code>fasthttp</code> <code>fullstack</code> golang framwork using <code>svelte</code> (support tailwindcss).
just more 10 time faster than <code>sveltekit</code></p> <h2 id="why-gosvelt-" data-svelte-h="svelte-2fc9uh">why gosvelt ?</h2> <h3 id="fullstack-integration-of-svelte" data-svelte-h="svelte-pf7ojv">fullstack integration of svelte</h3> <p data-svelte-h="svelte-1oex91y">yeah, gosvelt will compile, group, and serve svelte pages.<br>
A Svelte or AdvancedSvelte handler will give you a <strong>svelte map</strong> wich contain “js” and “css” URLs and you can add to this map your own attributes that will be rendered on the html template (note: if you add for example a “test” element to the map, you have to add the <code>&amp;{test}</code> element in the html template)</p> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">func</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">main</span><span style="color: #ABB2BF">() &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #E06C75">r</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> gosvelt.</span><span style="color: #56B6C2">New</span><span style="color: #ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Svelte</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./static/App.svelte&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(c </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">gosvelt.Context, svelte gosvelt.Map) </span><span style="color: #C678DD">error</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c.</span><span style="color: #56B6C2">Html</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">200</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./static/index.html&quot;</span><span style="color: #ABB2BF">, svelte) </span><span style="color: #7F848E; font-style: italic">// html template</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">AdvancedSvelte</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/adv&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./static/&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;App.svelte&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(c </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">gosvelt.Context, svelte gosvelt.Map) </span><span style="color: #C678DD">error</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c.</span><span style="color: #56B6C2">Html</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">200</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./static/index.html&quot;</span><span style="color: #ABB2BF">, svelte) </span><span style="color: #7F848E; font-style: italic">// html template</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	&#125;, gs.SvelteConfig&#123;</span></span>
<span class="line"><span style="color: #ABB2BF">		Typescript:  </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">		Tailwindcss: </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">		Pnpm:        </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Start</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;:80&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h3 id="cool-way-to-made-sse" data-svelte-h="svelte-1elz9p6">cool way to made sse</h3> <p data-svelte-h="svelte-roh1mw">there are actyally two way to use sse in gosvelt: the <strong>context</strong> way wich is in a context and can use channels declared in the handler. And the <strong>handler</strong> way wich is an handler function and use channels who are declared outside the handler.</p> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">func</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">main</span><span style="color: #ABB2BF">() &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #E06C75">r</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> gosvelt.</span><span style="color: #56B6C2">New</span><span style="color: #ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Get</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/sse&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(c </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">gs.Context) </span><span style="color: #C678DD">error</span><span style="color: #ABB2BF"> &#123; </span><span style="color: #7F848E; font-style: italic">// context way</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #E06C75">datach</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">make</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">chan</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">interface</span><span style="color: #ABB2BF">&#123;&#125;)</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #E06C75">closech</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">make</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">chan</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">struct</span><span style="color: #ABB2BF">&#123;&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c.</span><span style="color: #56B6C2">Sse</span><span style="color: #ABB2BF">(datach, closech, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">() &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">			datach </span><span style="color: #56B6C2">&lt;-</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;hello&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">			</span><span style="color: #C678DD">for</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">i</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">; i </span><span style="color: #56B6C2">&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">; i</span><span style="color: #56B6C2">++</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">				time.</span><span style="color: #56B6C2">Sleep</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">100</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF"> time.Millisecond)</span></span>
<span class="line"><span style="color: #ABB2BF">				datach </span><span style="color: #56B6C2">&lt;-</span><span style="color: #ABB2BF"> fmt.</span><span style="color: #56B6C2">Sprintf</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;</span><span style="color: #D19A66">%d</span><span style="color: #98C379"> -&gt; actual time is </span><span style="color: #D19A66">%v</span><span style="color: #98C379">&quot;</span><span style="color: #ABB2BF">, i, time.</span><span style="color: #56B6C2">Now</span><span style="color: #ABB2BF">())</span></span>
<span class="line"><span style="color: #ABB2BF">			&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">			</span><span style="color: #56B6C2">close</span><span style="color: #ABB2BF">(closech)</span></span>
<span class="line"><span style="color: #ABB2BF">		&#125;)</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #E06C75">datach</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">make</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">chan</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">interface</span><span style="color: #ABB2BF">&#123;&#125;)</span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #E06C75">closech</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">make</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">chan</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">struct</span><span style="color: #ABB2BF">&#123;&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Sse</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/sse2&quot;</span><span style="color: #ABB2BF">, datach, closech, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">() &#123; </span><span style="color: #7F848E; font-style: italic">// handler way</span></span>
<span class="line"><span style="color: #ABB2BF">		datach </span><span style="color: #56B6C2">&lt;-</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;hello&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">for</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">i</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">; i </span><span style="color: #56B6C2">&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">4</span><span style="color: #ABB2BF">; i</span><span style="color: #56B6C2">++</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">			time.</span><span style="color: #56B6C2">Sleep</span><span style="color: #ABB2BF">(time.Second)</span></span>
<span class="line"><span style="color: #ABB2BF">			datach </span><span style="color: #56B6C2">&lt;-</span><span style="color: #ABB2BF"> fmt.</span><span style="color: #56B6C2">Sprintf</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;</span><span style="color: #D19A66">%d</span><span style="color: #98C379"> -&gt; actual time is </span><span style="color: #D19A66">%v</span><span style="color: #98C379">&quot;</span><span style="color: #ABB2BF">, i, time.</span><span style="color: #56B6C2">Now</span><span style="color: #ABB2BF">())</span></span>
<span class="line"><span style="color: #ABB2BF">		&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #56B6C2">close</span><span style="color: #ABB2BF">(closech)</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Start</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;:80&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h3 id="pretty-simple-syntax" data-svelte-h="svelte-1yveze6">pretty simple syntax</h3> <p data-svelte-h="svelte-1mbxaqs">the syntax is like popular framworks like fiber, gin, echo</p> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">func</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">main</span><span style="color: #ABB2BF">() &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #E06C75">r</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">:=</span><span style="color: #ABB2BF"> gosvelt.</span><span style="color: #56B6C2">New</span><span style="color: #ABB2BF">()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Get</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/gg/:name&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(c </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">gosvelt.Context) </span><span style="color: #C678DD">error</span><span style="color: #ABB2BF"> &#123; </span><span style="color: #7F848E; font-style: italic">// url params</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c.</span><span style="color: #56B6C2">Json</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">200</span><span style="color: #ABB2BF">, gosvelt.Map&#123;</span><span style="color: #98C379">&quot;gg&quot;</span><span style="color: #ABB2BF">: c.</span><span style="color: #56B6C2">Param</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;name&quot;</span><span style="color: #ABB2BF">)&#125;)</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Get</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/ws&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(c </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">gosvelt.Context) </span><span style="color: #C678DD">error</span><span style="color: #ABB2BF"> &#123; </span><span style="color: #7F848E; font-style: italic">// websocket handler</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c.</span><span style="color: #56B6C2">Ws</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(conn </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">websocket.Conn) &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">			conn.</span><span style="color: #56B6C2">WriteJSON</span><span style="color: #ABB2BF">(gosvelt.Map&#123;</span><span style="color: #98C379">&quot;ez&quot;</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;pz&quot;</span><span style="color: #ABB2BF">&#125;)</span></span>
<span class="line"><span style="color: #ABB2BF">		&#125;)</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Static</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/index&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./cmd/static/index.html&quot;</span><span style="color: #ABB2BF">) </span><span style="color: #7F848E; font-style: italic">// static files</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Svelte</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;/&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./cmd/static/App.svelte&quot;</span><span style="color: #ABB2BF">, </span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #C678DD">func</span><span style="color: #ABB2BF">(c </span><span style="color: #C678DD">*</span><span style="color: #ABB2BF">gosvelt.Context, svelte gosvelt.Map) </span><span style="color: #C678DD">error</span><span style="color: #ABB2BF"> &#123; </span><span style="color: #7F848E; font-style: italic">// svelte files</span></span>
<span class="line"><span style="color: #ABB2BF">		</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c.</span><span style="color: #56B6C2">Html</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">200</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;./cmd/static/index.html&quot;</span><span style="color: #ABB2BF">, svelte)</span></span>
<span class="line"><span style="color: #ABB2BF">	&#125;)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">	r.</span><span style="color: #56B6C2">Start</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;:80&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="todo" data-svelte-h="svelte-13r1o0e">todo</h2> <ul class="contains-task-list" data-svelte-h="svelte-1swghrk"><li class="task-list-item"><input type="checkbox" checked disabled> <strong>CSR</strong> (Client Side Rendering)</li> <li class="task-list-item"><input type="checkbox" disabled> <strong>SSR</strong> (Server Side Rendering)</li> <li class="task-list-item"><input type="checkbox" disabled> <strong>ISR</strong> (Incremental Static Regeneration)</li> <li class="task-list-item"><input type="checkbox" checked disabled> <strong>SSE</strong> (Server Sent Events)</li> <li class="task-list-item"><input type="checkbox" checked disabled> <strong>WS</strong> (Web Socket)</li> <li class="task-list-item"><input type="checkbox" checked disabled> <strong>CSS Engine</strong> (Tailwindcss)</li> <li class="task-list-item"><input type="checkbox" disabled> Add layout system</li></ul>`;
    }
  })}`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gosvelt_framwork,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
