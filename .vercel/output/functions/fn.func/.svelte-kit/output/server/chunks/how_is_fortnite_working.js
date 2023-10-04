import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "how is is fortnite working ?",
  "description": null,
  "author": "4lxprime",
  "author_pp_url": "https://avatars.githubusercontent.com/u/58915711?v=4",
  "date": "2023-09-11",
  "tags": ["fortnite", "gaming"],
  "published": true
};
const How_is_fortnite_working = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h2 id="table-of-contents" data-svelte-h="svelte-ki5nsa">Table of Contents</h2> <ul data-svelte-h="svelte-vp4srh"><li><p><a href="#how-is-fortnite-made">How is Fortnite made?</a></p> <ul><li><p><a href="#gameserver">GameServer</a></p></li> <li><p><a href="#backend">Backend</a></p> <ul><li><a href="#xmpp">Xmpp</a></li></ul></li></ul></li> <li><p><a href="#contact">Contact</a></p></li></ul> <h1 id="how-is-fortnite-made" data-svelte-h="svelte-1x3kaek">How is Fortnite made?</h1> <p data-svelte-h="svelte-r9eeu2"><strong>Fortnite</strong> is a game from Epic Games that uses the <strong>Unreal Engine</strong>. As you may know, Fortnite has several seasons and versions (generally, a season has a few versions and <strong>builds</strong> (which are built versions of Fortnite) named like <code>[Version]-CL-[UE-Version-Id]</code>).</p> <p data-svelte-h="svelte-5yvbza">You can find a lot of builds <a href="https://github.com/notsamicc/Fortnite-Builds" rel="nofollow">here</a></p> <p data-svelte-h="svelte-15i0kwz">There are two types of Fortnite servers:</p> <ul data-svelte-h="svelte-j1wz9d"><li>Gameserver</li> <li>Backend</li></ul> <h2 id="gameserver" data-svelte-h="svelte-hecrpq">GameServer</h2> <p data-svelte-h="svelte-ueyiek">The GameServer is used for all <strong>in-game actions</strong> (like <strong>shooting</strong>, <strong>moving</strong>, <strong>collecting materials</strong>, etc). It’s this same GameServer that replicates the actions of all players. To see a player on your screen and for them to see you, the server must collect data from everyone and distribute it to everyone.</p> <p data-svelte-h="svelte-sc5lnq">The GameServer is a <strong>dll</strong> that we inject into Fortnite. We need to <strong>inject</strong> it into the game because we need information about the game such as the map, the items, etc. This is how we can know if a player is going through a wall, teleporting, has a certain item, etc.</p> <p data-svelte-h="svelte-1eidsl">This GameServer is coded in <strong>C++</strong> because Fortnite is also coded in <strong>C++</strong> (UE). When coding it, we can use two different methods to achieve our goals:</p> <ul data-svelte-h="svelte-k364v4"><li>using <strong>Patterns</strong></li> <li>using an <strong>SDK</strong></li></ul> <p data-svelte-h="svelte-1kuesej">Using <strong>Patterns</strong> involves knowing a lot of memory locations or finding them individually with software like <a href="https://hex-rays.com/ida-pro/" rel="nofollow">IDA</a>. This approach is generally used to build GameServers that will cover different versions of Fortnite (if it covers a majority of Fortnite builds, we can call it a <strong>universal GameServer</strong>). It is also lighter than the GameServer that uses an SDK.</p> <p data-svelte-h="svelte-rdlmc8">Using an <strong>SDK</strong> is the most suitable, efficient, and simple approach. Indeed, we can generate what we call an <a href="https://www.redhat.com/fr/topics/cloud-native-apps/what-is-SDK" rel="nofollow">SDK</a> with tools like <a href="https://github.com/Fischsalat/Fortnite-SDK-Generator" rel="nofollow">this one</a>. This SDK will allow us to access all memory locations simply, but this SDK only concerns one version of Fortnite.</p> <p data-svelte-h="svelte-1181972">(If this section is incomplete, my Discord is in the contact section)</p> <h2 id="backend" data-svelte-h="svelte-1o5vcjy">Backend</h2> <p data-svelte-h="svelte-133sp7c">The Backend server is the one that will handle all <strong>lobby interactions</strong>, the <strong>account system</strong>, the <strong>locker</strong>, <strong>vbucks</strong>, etc.</p> <p data-svelte-h="svelte-5uwhhp">It’s an <strong>HTTP server</strong> that will need to handle Fortnite’s (UE) requests and respond to them. It follows, I believe, the <strong>Unreal Engine standard</strong> so requests and responses are in <strong>JSON</strong>. Moreover, if you want to make a universal backend, you just need to adapt the JSON files and add the requests that the new version will make.</p> <p data-svelte-h="svelte-1hp4l3x">It uses what we call <strong>profiles</strong>, which are JSON files that are unique to each player and allow data storage. These files vary depending on the seasons and can be quite large as they store notably the entire set of <strong>skins</strong>, each player’s <strong>quests</strong>, etc.</p> <p data-svelte-h="svelte-a1frzk">Authentication between the client and the server is done with the <a href="https://fr.wikipedia.org/wiki/OAuth" rel="nofollow">OAuth</a> protocol. The client will need to provide a username and password.</p> <p data-svelte-h="svelte-ugvit7">You can code these backends in any programming language that can make an HTTP server (<strong>Golang</strong>, <strong>Javascript</strong>, <strong>Typescript</strong>, <strong>Rust</strong>, <strong>.NET</strong>, <strong>Python</strong>, <strong>Vlang</strong>, etc). If you want to see what a backend server looks like, you can check out the very popular <a href="https://github.com/Lawin0129/LawinServer" rel="nofollow">LawinServer</a></p> <h3 id="xmpp" data-svelte-h="svelte-17u936g">Xmpp</h3> <p data-svelte-h="svelte-10ai9ru"><strong>Xmpp</strong> is often represented as a subpart of the backend. It manages all <strong>chat messages</strong>, as well as <strong>friends</strong>, <strong>activities</strong>, when a player <strong>joins the group</strong>, etc.</p> <p data-svelte-h="svelte-1lpooig">It’s a <a href="https://fr.wikipedia.org/wiki/WebSocket" rel="nofollow">WebSocket</a> server.</p> <p data-svelte-h="svelte-1t6z972">(If this section is incomplete, my Discord is in the contact section)</p> <h1 id="contact" data-svelte-h="svelte-34wlrw">Contact</h1> <p data-svelte-h="svelte-cs5bxj">You can contact me with:</p> <ul data-svelte-h="svelte-2vph4o"><li>Email: <a href="mailto:idalxprime@gmail.com">idalxprime@gmail.com</a></li> <li>Discord: asprime</li></ul>`;
    }
  })}`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: How_is_fortnite_working,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _
};