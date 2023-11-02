---
title: how to made a fortnite backend ?
description: this will explain how unreal engine 4 work and how create a og fortnite project without lawinserver, from scratch.
author: 4lxprime
author_pp_url: https://avatars.githubusercontent.com/u/58915711?v=4
date: '2023-11-02'
tags:
 - fortnite
 - gaming
 - golang
published: true
---
<script>
	import Git from '$lib/components/git.svelte'
    import Img from '$lib/components/img.svelte'
</script>

<Git repo="4lxprime/PrimeFNS" />

## Table of Contents

# The Project
I have developed a Fortnite backend in Golang, which is available [here](https://github.com/4lxprime/PrimeFNS). It currently supports Fortnite Battle Royale's Season 3 Chapter 1, but it is very basic at the moment. It does not have an account system or any session system. I will explain how it works in general, and at the end, I will enlighten you on what you can add.
<Img src="/fnlobby.png" alt="fortnite lobby" />

## How does it work?
A Fortnite backend works quite simply; it's an **HTTP server** that must respond to the game's requests. This backend server will handle the **account system** (login, locker, skin purchases), **save settings**, perform different **version checks** and **server status checks**, etc. (Note: these servers use **JSON** to communicate 98% of the time).<br><br>

For now, this is a backend that we will run **locally**, and therefore we will associate it with the address `127.0.0.1` (which is the address of our computer locally). We cannot launch it on a **remote** server so that multiple people can connect to it at the same time because there is no account system, and all users will have the same name and the same [profiles](#the-profiles). We could solve these different problems by following [this section](#what-can-we-add).<br><br>

The game uses port [9999](https://www.speedguide.net/port.php?port=9999) to communicate with Epic Games' official servers (which have different URLs for different types of requests, for example: account-public-service-prod03.ol.epicgames.com or datarouter.ol.epicgames.com). But we will use either:<br><br>

**=>** A local proxy that will redirect all traffic containing **epicgames.com** from port [9999](https://www.speedguide.net/port.php?port=9999) to a local address (most often `127.0.0.1:3551` (port [3551](https://www.speedguide.net/port.php?port=3551) is commonly used in Fortnite backends)).

**=>** Or a DLL that must be injected into the game at its launch and will do the same (I have never experienced this method, so if you want to help me document this part, do not hesitate to [contact](#contact) me).<br><br>

In the specific example of [PrimeFNS](https://github.com/4lxprime/PrimeFNS), the `main.go` file will be used to organize all the requests and the code launch. I use the HTTP Fiber framework because it is very fast, convenient, and allows us to do what we need to do simply.<br><br>

The `makefile` can be useful if you have Make installed (I believe it is by default on some Linux distributions) with the following commands:<br><br>

**=>** `make build`: compile the project into the executable bin/app (= `go build -o bin/app main.go`).

**=>** `make run`: compile and execute the project (= `go run main.go`).<br><br>

The internal folder like this:
```ts
    ├── internal/
    ├── api/
    │ ├── clientsettings/
    │ ├── cloudstorage/
    │ └── handlers/
    ├── profiles/
    │ ├── types/
    │ └── * 
    ├── public/
    │ └── * 
    └── responses/
    ├── types/
    └── *
 ```

The profiles and responses files will contain structures that will allow parsing either the players' [profiles](#the-profiles) or the **responses** which are varied and notably contain the [contentpages](#the-contentpages) but also the `catalog_config` and the `catalog` that you can see by clicking [here](https://github.com/4lxprime/PrimeFNS/tree/main/internal/responses).<br><br>

We also find the images that will be displayed in the game by the [contentpages](#the-contentpages) in the `public/` file.<br><br>

The most interesting part is in the `api/` file because this is where the parameters that we will give to the client (in `clientsettings/`), the saved parameters of the user's session (in `cloudstorage/ClientSettings-$build.Sav`) and most importantly the `handlers/` folder which lists the different groups of handlers (these different groups are just for better organization and to have code that we can maintain properly).<br><br>

The handlers are formed from the following structure (which is a Fiber handler structure):
```go
// ["X"]
func HandleX(c *fiber.Ctx) error {
	return nil
}
 ```
 These handlers will be associated with a route in the `main.go` and will process the different requests as epic games does, for a better understanding, you can see the code [here](https://github.com/4lxprime/PrimeFNS/tree/main/internal/api/handlers)

### The Profiles:
The profiles are JSON files that all have this common structure and allow storing a player's information, typically the skins, statistics, favorites, the number of V-Bucks... There are different types of profiles including: `athena`, `profile0`, `common_core`, `common_public` each playing a different role. There are also many other profiles that are useful depending on the seasons and if we take into account the Save the World mode.
```go
 type CommonProfile struct {
	ID              string            `json:"_id"`
	Created         time.Time         `json:"created"`
	Updated         time.Time         `json:"updated"`
	Rvn             int               `json:"rvn"`
	WipeNumber      int               `json:"wipeNumber"`
	AccountID       string            `json:"accountId"`
	ProfileID       string            `json:"profileId"`
	Version         string            `json:"version"`
	Items           []ProfileItem     `json:"items"`
	Stats           CommonPublicStats `json:"stats"`
	CommandRevision int               `json:"commandRevision"`
}
 ```

### The Content Pages:
The content pages, as the name suggests, are used to display the news text, the available game modes, the different images, etc.

A good example could be the `emergencynotice` part, which is the small message that we can see at the bottom of the screen when we are in the lobby.
```json
 "emergencynotice": {
    "news": {
      "_type": "Battle Royale News",
      "messages": [
        {
          "hidden": false,
          "_type": "CommonUI Simple Message Base",
          "title": "PrimeFNS",
          "body": "Server created by asprime (https://discord.gg/YMpy4EYkG5)",
          "spotlight": true
        }
      ]
    },
    "_title": "emergencynotice",
    "_noIndex": false,
    "alwaysShow": false,
    "_activeDate": "2018-08-06T19:00:26.217Z",
    "lastModified": "2019-10-29T22:32:52.686Z",
    "_locale": "en-US"
  }
```
<Img src="/fnemergencynotice.png" alt="emergencynotice" />

## What can we add?
I don't know if I will implement these features in the future, but in any case, to make a good **remote** backend, it is necessary to have an [account system](#the-account-system) as well as a [session system](#the-session-system).

### The Account System
The **account system** will take care of storing the [profiles](#the-profiles) of different players. This can be done in several ways, but the two main ones are:<br><br>

**=>** In a **file**: which is honestly the **simplest** method but very **dangerous** because all user data is accessible in a file, and if there is a bug or an error, all profiles can be lost forever.  
**=>** In a **database**: like [MongoDB](https://www.mongodb.com/en-us), [PostgreSQL](https://www.postgresql.org/), [Cassandra](https://cassandra.apache.org/_/index.html), etc., where the user's data will be saved efficiently, securely, and with backups. But the problem with this approach is that it **requires a database server** that you can run locally on your server or pay for a remote server from a server provider like [AWS](https://aws.amazon.com/en/free/database/), [OVH](https://www.ovhcloud.com/en/public-cloud/databases/), [Digitalocean](https://www.digitalocean.com/pricing/managed-databases), etc.<br><br>

The account system will be used in **OAuth** requests and specifically in this request: `/account/api/oauth/token` to be able to "login" a user. Accounts cannot be created in the game, and they must therefore be linked to a **website or a Discord bot** for account creation.

### The Session System
The session system must store the **active sessions** of players, preferably in **memory**. This session can be initialized at the level of the request `/account/api/oauth/token`, which is the request that allows the client to "login". In this way, we will use [the account system](#the-account-system) to authenticate the user.<br><br>

The session contains several **tokens** that serve to authenticate the client, the **accountId** which is the player's username, and other useful information ([lawinserverV2](https://github.com/Lawin0129/LawinServerV2) can be a good example for this authentication system, although it is not very optimized and it is coded in JS, you can see the code [here](https://github.com/Lawin0129/LawinServerV2/blob/main/routes/auth.js)).<br><br>

We can store the information directly in the **memory** of our backend, but this brings optimization and security problems, so I would advise you to lean more towards a very fast in-memory database which is [redis](https://redis.io/).

# Contact
 You can contact me with:
 - Email: idalxprime@gmail.com
 - Discord: asprime