---
title: gosvelt framwork
description: what is and how to use gosvelt framwork that can serve svelte pages through golang
author: 4lxprime
author_pp_url: https://avatars.githubusercontent.com/u/58915711?v=4
date: '2023-08-31'
tags:
  - gosvelt
  - golang
  - svelte
published: true
---
<script>
	import Git from '$lib/components/git.svelte'
</script>

<Git repo="4lxprime/Gosvelt" />

## Table of Content

# GoSvelt
 the `fasthttp` `fullstack` golang framwork using `svelte` (support tailwindcss).
 just more 10 time faster than `sveltekit`

## why gosvelt ?
### fullstack integration of svelte
 yeah, gosvelt will compile, group, and serve svelte pages.  
 A Svelte or AdvancedSvelte handler will give you a **svelte map** wich contain "js" and "css" URLs and you can add to this map your own attributes that will be rendered on the html template (note: if you add for example a "test" element to the map, you have to add the `&{test}` element in the html template)
```go
func main() {
	r := gosvelt.New()

	r.Svelte("/", "./static/App.svelte", func(c *gosvelt.Context, svelte gosvelt.Map) error {
		return c.Html(200, "./static/index.html", svelte) // html template
	})

	r.AdvancedSvelte("/adv", "./static/", "App.svelte", func(c *gosvelt.Context, svelte gosvelt.Map) error {
		return c.Html(200, "./static/index.html", svelte) // html template

	}, gs.SvelteConfig{
		Typescript:  false,
		Tailwindcss: true,
		Pnpm:        true,
	})

	r.Start(":80")
}
```
### cool way to made sse
 there are actyally two way to use sse in gosvelt: the **context** way wich is in a context and can use channels declared in the handler. And the **handler** way wich is an handler function and use channels who are declared outside the handler.
```go
func main() {
	r := gosvelt.New()

	r.Get("/sse", func(c *gs.Context) error { // context way
		datach := make(chan interface{})
		closech := make(chan struct{})

		return c.Sse(datach, closech, func() {
			datach <- "hello"

			for i := 0; i < 10; i++ {
				time.Sleep(100 * time.Millisecond)
				datach <- fmt.Sprintf("%d -> actual time is %v", i, time.Now())
			}

			close(closech)
		})
	})

	datach := make(chan interface{})
	closech := make(chan struct{})

	r.Sse("/sse2", datach, closech, func() { // handler way
		datach <- "hello"

		for i := 0; i < 4; i++ {
			time.Sleep(time.Second)
			datach <- fmt.Sprintf("%d -> actual time is %v", i, time.Now())
		}

		close(closech)
	})

	r.Start(":80")
}
```
### pretty simple syntax
 the syntax is like popular framworks like fiber, gin, echo
```go
func main() {
	r := gosvelt.New()

	r.Get("/gg/:name", func(c *gosvelt.Context) error { // url params
		return c.Json(200, gosvelt.Map{"gg": c.Param("name")})
	})

	r.Get("/ws", func(c *gosvelt.Context) error { // websocket handler
		return c.Ws(func(conn *websocket.Conn) {
			conn.WriteJSON(gosvelt.Map{"ez": "pz"})
		})
	})

	r.Static("/index", "./cmd/static/index.html") // static files

	r.Svelte("/", "./cmd/static/App.svelte", 
	func(c *gosvelt.Context, svelte gosvelt.Map) error { // svelte files
		return c.Html(200, "./cmd/static/index.html", svelte)
	})

	r.Start(":80")
}
```
## todo
 - [x] **CSR** (Client Side Rendering)
 - [ ] **SSR** (Server Side Rendering)
 - [ ] **ISR** (Incremental Static Regeneration)
 - [x] **SSE** (Server Sent Events)
 - [x] **WS** (Web Socket)
 - [x] **CSS Engine** (Tailwindcss)
 - [ ] Add layout system

# Contact
 You can contact me with:
 - Email: idalxprime@gmail.com
 - Discord: asprime
