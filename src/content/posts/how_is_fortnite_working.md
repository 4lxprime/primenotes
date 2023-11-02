---
title: how is fortnite working ?
description: this will explain how work fortnite and in general an unreal engine 4 game
author: 4lxprime
author_pp_url: https://avatars.githubusercontent.com/u/58915711?v=4
date: '2023-09-11'
tags:
 - fortnite
 - gaming
published: true
---

## Table of Contents

# How is Fortnite made?
 **Fortnite** is a game from Epic Games that uses the **Unreal Engine**. As you may know, Fortnite has several seasons and versions (generally, a season has a few versions and **builds** (which are built versions of Fortnite) named like `[Version]-CL-[UE-Version-Id]`).  

 You can find a lot of builds [here](https://github.com/notsamicc/Fortnite-Builds)  

 There are two types of Fortnite servers:
 - Gameserver
 - Backend

## GameServer
 The GameServer is used for all **in-game actions** (like **shooting**, **moving**, **collecting materials**, etc). It's this same GameServer that replicates the actions of all players. To see a player on your screen and for them to see you, the server must collect data from everyone and distribute it to everyone.  

 The GameServer is a **dll** that we inject into Fortnite. We need to **inject** it into the game because we need information about the game such as the map, the items, etc. This is how we can know if a player is going through a wall, teleporting, has a certain item, etc.  

 This GameServer is coded in **C++** because Fortnite is also coded in **C++** (UE). When coding it, we can use two different methods to achieve our goals:
 - using **Patterns**
 - using an **SDK**


 Using **Patterns** involves knowing a lot of memory locations or finding them individually with software like [IDA](https://hex-rays.com/ida-pro/). This approach is generally used to build GameServers that will cover different versions of Fortnite (if it covers a majority of Fortnite builds, we can call it a **universal GameServer**). It is also lighter than the GameServer that uses an SDK.  

 Using an **SDK** is the most suitable, efficient, and simple approach. Indeed, we can generate what we call an [SDK](https://www.redhat.com/fr/topics/cloud-native-apps/what-is-SDK) with tools like [this one](https://github.com/Fischsalat/Fortnite-SDK-Generator). This SDK will allow us to access all memory locations simply, but this SDK only concerns one version of Fortnite.  

 (If this section is incomplete, my Discord is in the contact section)

## Backend
 The Backend server is the one that will handle all **lobby interactions**, the **account system**, the **locker**, **vbucks**, etc.  

 It's an **HTTP server** that will need to handle Fortnite's (UE) requests and respond to them. It follows, I believe, the **Unreal Engine standard** so requests and responses are in **JSON**. Moreover, if you want to make a universal backend, you just need to adapt the JSON files and add the requests that the new version will make.  

 It uses what we call **profiles**, which are JSON files that are unique to each player and allow data storage. These files vary depending on the seasons and can be quite large as they store notably the entire set of **skins**, each player's **quests**, etc.  

 Authentication between the client and the server is done with the [OAuth](https://fr.wikipedia.org/wiki/OAuth) protocol. The client will need to provide a username and password.  

 You can code these backends in any programming language that can make an HTTP server (**Golang**, **Javascript**, **Typescript**, **Rust**, **.NET**, **Python**, **Vlang**, etc). If you want to see what a backend server looks like, you can check out the very popular [LawinServer](https://github.com/Lawin0129/LawinServer)  

### Xmpp
 **Xmpp** is often represented as a subpart of the backend. It manages all **chat messages**, as well as **friends**, **activities**, when a player **joins the group**, etc.  

 It's a [WebSocket](https://fr.wikipedia.org/wiki/WebSocket) server.  

 (If this section is incomplete, my Discord is in the contact section)  

# Contact
 You can contact me with:
 - Email: idalxprime@gmail.com
 - Discord: asprime