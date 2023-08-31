---
username: 4lxprime
pp_url: https://avatars.githubusercontent.com/u/58915711?v=4
description: Like web, network, blockchain, malwares, data and hacking. Golang>
date: '2023-08-28'
tags:
  - svelte
  - sveltekit
---

## Table of Content

# 👋 hi everyone

i'm French 🇫🇷, i like web, network, blockchain, malwares, data and hacking ... i do `fullstack engineering`, so also `frontend`, `ui/ux`, `seo`, `backend engineering`. Also i know how to build `decentralized apps` in golang. actually i know how to code in: **golang**, **vlang**, **svelte**, **c#**, **javascript**, **typescript**, **php**, **python** and **sql**.<br><br>
```go
   func (m *Me) Work(work any) error {
       switch work.(type) {
       case Seo:
           panic()

       default:
           return m.Do(w)
       }
   }
```
if you also want to see my codebase you can go to my **[Github](https://github.com/4lxprime)**

## Stack ?

### Backend

- **Golang**
- **Php**
- **Python**
- **NodeJs**

### Frontend

- **React**
- **Svelte / SvelteKit**
- **Plain html/css**

### Webui

- **Tailwindcss**
- **Figma**

### Databases

- **Mysql**
- **Postgresql**
- **Mariadb**
- **Sqlite**

### My Personal Stack
 my personal stack is **GOST** (GOlang SvelteKit Tailwindcss), i use it because it's blazingly fast and really easy to maintain

## My works ?
### GoSvelt
 My **[GoSvelt](https://github.com/4lxprime/Gosvelt)** framwork is made in golang and can be the perfect tool for the **[GOST](#my-personal-stack)** stack
 here you have an example of svelte pages compiled and served by **[GoSvelt](https://github.com/4lxprime/Gosvelt)** (this way is more 10 time faster than sveltekit but under development)
 ```go
 func main() {
	r := gosvelt.New()

	r.Svelte("/", "./static/App.svelte", func(c *gosvelt.Context, svelte gosvelt.Map) error {
		return c.Html(200, "./static/index.html", svelte)
	})

	r.AdvancedSvelte("/adv", "./static/", "App.svelte", func(c *gosvelt.Context, svelte gosvelt.Map) error {
		return c.Html(200, "./static/index.html", svelte)

	}, gs.SvelteConfig{
		Typescript:  false,
		Tailwindcss: true,
		Pnpm:        true,
	})

	r.Start(":80")
}
 ```
### This beautiful blog
 yeah i know it's incredible but i made this amazing and blazingly fast blog (note: this was made with sveltekit and tailwindcss and each post or author page you will see is markdown)

## Contact Me
 you can send me an email at **idalxprime@gmail.com**, but i'm not really reactive on gmail so you can also contact me on my discord: **asprime**

