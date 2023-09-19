import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "first post",
  "description": "the first post of PrimeNotes!",
  "author": "4lxprime",
  "author_pp_url": "https://avatars.githubusercontent.com/u/58915711?v=4",
  "date": "2023-08-30",
  "tags": ["sveltekit", "svelte"],
  "published": true
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id="table-of-content" data-svelte-h="svelte-1gd4hm8">Table of Content</h2> <ul data-svelte-h="svelte-m5hz13"><li><p><a href="#hi-everyone">hi everyone</a></p> <ul><li><a href="#this-is-the-first-post-of-my-blog">this is the first post of my blog</a></li></ul></li> <li><p><a href="#differents-hello-name">Differents Hello name</a></p> <ul><li><a href="#typescript">TypeScript</a></li> <li><a href="#javascript">Javascript</a></li> <li><a href="#golang">Golang</a></li> <li><a href="#python">Python</a></li></ul></li></ul> <h1 id="hi-everyone" data-svelte-h="svelte-1iem8f5">hi everyone</h1> <h2 id="this-is-the-first-post-of-my-blog" data-svelte-h="svelte-y8r5bj">this is the first post of my blog</h2> <p data-svelte-h="svelte-n7k49y">but this is also a test post so, there is nothing interesting here …</p> <h1 id="differents-hello-name" data-svelte-h="svelte-18l1tfu">Differents Hello name</h1> <h2 id="typescript" data-svelte-h="svelte-1whdpo6">TypeScript</h2> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">hello</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#96;Hello </span><span style="color: #C678DD">$&#123;</span><span style="color: #E06C75">name</span><span style="color: #C678DD">&#125;</span><span style="color: #98C379">!&#96;</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="javascript" data-svelte-h="svelte-ezm5zq">Javascript</h2> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">hello</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">	</span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#96;Hello </span><span style="color: #C678DD">$&#123;</span><span style="color: #E06C75">name</span><span style="color: #C678DD">&#125;</span><span style="color: #98C379">!&#96;</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="golang" data-svelte-h="svelte-vn3nhm">Golang</h2> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">func</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">hello</span><span style="color: #ABB2BF">(name </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">string</span><span style="color: #ABB2BF"> &#123;</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> fmt.</span><span style="color: #56B6C2">Sprintf</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;Hello $s&quot;</span><span style="color: #ABB2BF">, name)</span></span>
<span class="line"><span style="color: #ABB2BF">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h2 id="python" data-svelte-h="svelte-x6bt4q">Python</h2> <!-- HTML_TAG_START -->${`<pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">def</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">hello</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66; font-style: italic">name</span><span style="color: #ABB2BF">: </span><span style="color: #56B6C2">str</span><span style="color: #ABB2BF">) -&gt; </span><span style="color: #56B6C2">str</span><span style="color: #ABB2BF">:</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">f</span><span style="color: #98C379">&quot;Hello </span><span style="color: #D19A66">&#123;</span><span style="color: #ABB2BF">name</span><span style="color: #D19A66">&#125;</span><span style="color: #98C379">&quot;</span></span></code></pre>`}<!-- HTML_TAG_END --> <br><br> <ul class="contains-task-list" data-svelte-h="svelte-ngo7cu"><li class="task-list-item"><input type="checkbox" disabled> test</li> <li class="task-list-item"><input type="checkbox" checked disabled> test ok</li></ul>`;
    }
  })}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: First_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
