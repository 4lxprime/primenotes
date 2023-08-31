<script lang="ts">
	import { onMount } from "svelte"

    export let repo: string

    const githubLogo = "/github_white.png"

    let stars: number
    let name: string
    let lang: string
    let author: string

    const getGit = async () => {
        const resp = await fetch(`https://api.github.com/repos/${repo}`)
        const data = await resp.json()

        stars = data.stargazers_count
        lang = data.language
        name = data.name
        author = data.owner.login
    }

    const langColor = (l: string): string => {
        let tmpl = "flex bg-zinc-950 border-b-4 "
        switch(l) {
            case "Go":
                return tmpl+="border-[#00add8]"
            
            case "JavaScript":
                return tmpl+="border-[#f1e05a]"

            case "TypeScript":
                return tmpl+="border-[#3178c6]"

            case "Svelte":
                return tmpl+="border-[#ff3e00]"

            case "HTML":
                return tmpl+="border-[#e34c26]"

            case "Python":
                return tmpl+="border-[#3572a5]"

            case "PHP":
                return tmpl+="border-[#4f5d95]"

            case "":
                return tmpl+="border-[]"

            default:
                return tmpl
        }
    }

    onMount(async ()=>{
        await getGit()
    })
</script>

<a class="flex my-10 mx-2" href="https://github.com/{repo}" target="_blank">
    <div class={langColor(lang)}>
        <img src={githubLogo} alt="github logo" width={42} height={42} class="flex-none rounded-full">
    
        <div class="flex-grow mx-3">
            {#if name}
            <p class="">{name}</p>
            {:else}
            <p class="">project</p>
            {/if}

            {#if author}
            <p class="text-zinc-500 font-light leading-3">{author}</p>
            {:else}
            <p class="text-zinc-500 font-light leading-3">author</p>
            {/if}
        </div>
    
        <div class="bg-zinc-700">
            {#if stars}
            <p class="flex-none px-2">{stars}</p>
            {:else}
            <p class="flex-none px-2">0</p>
            {/if}
            <p class="leading-3 text-center">⭐</p>
        </div>
    </div>
</a>