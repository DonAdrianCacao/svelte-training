<script>
    import { sidebarOpen } from "$lib/stores/sidebar.js";
    import { sidebarMenu } from "$lib/data/sidebarMenu.js";

    let expanded = new Set();

    function toggleExpand(item, index) {
        if (!item.children) return;

        if (expanded.has(index)) expanded.delete(index);
        else expanded.add(index);
        expanded = new Set(expanded);
    }
</script>

<nav
    class="flex flex-col h-screen transition-all duration-300 shadow-sm"
    class:w-64={$sidebarOpen}
    class:w-16={!$sidebarOpen}
    style="background-color: #1f1b4b;"
>
    <div class="relative flex flex-col p-4 gap-2">
        <button
            on:click={() => sidebarOpen.update(v => !v)}
            class="absolute top-2 right-2 p-1.5 hover:bg-gray-700 rounded border border-gray-600 transition-colors flex items-center justify-center outline outline-1 outline-transparent hover:outline-gray-400"
            aria-label={$sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 text-white"
                class:rotate-180={!$sidebarOpen}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        
        <div class="flex mt-16" class:justify-center={!$sidebarOpen}>
            <span class="font-bold tracking-tight overflow-hidden whitespace-nowrap text-white text-lg">
                {$sidebarOpen ? "PaySync" : "P"}
            </span>
        </div>

        <div class="w-full h-px bg-white my-2"></div>

        <div class="flex items-center gap-2 mt-2" class:justify-center={!$sidebarOpen}>
            <div class="w-8 h-8 flex-shrink-0 rounded-full bg-white text-[#1f1b4b] flex items-center justify-center font-bold text-base">
                U
            </div>
            {#if $sidebarOpen}
                <span class="text-white font-bold whitespace-nowrap">User</span>
            {/if}
        </div>

        <div class="w-full h-px bg-white my-2"></div>
    </div>

    <ul class="flex-1 flex flex-col mt-4">
        {#each sidebarMenu as item, index}
            <li class="group">
                <button
                    class="w-full text-left flex items-center p-3 cursor-pointer border-l-4 border-transparent text-white font-medium transition-colors duration-200 rounded hover:bg-[#4e47e5] hover:text-white text-base"
                    class:justify-center={!$sidebarOpen}
                    on:click={() => toggleExpand(item, index)}
                    title={!$sidebarOpen ? item.name : ""}
                >
                    {#if $sidebarOpen}
                        <span class="ml-3">{item.name}</span>
                        {#if item.children}
                            <span class="ml-auto text-xs text-gray-300">{expanded.has(index) ? "▲" : "▼"}</span>
                        {/if}
                    {:else}
                        <span class="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    {/if}
                </button>
                
                {#if item.children && expanded.has(index) && $sidebarOpen}
                    <ul class="bg-[#1f1a4b] py-2 flex flex-col gap-5">
                        {#each item.children as child}
                            <li>
                                <a
                                    href={child.route}
                                    class="inline-flex w-[calc(100%-3.5rem)] ml-12 mr-2 px-3 py-2 text-white text-base font-medium items-center transition-all duration-200 rounded-full hover:bg-[#4e47e5]"
                                >
                                    {child.name}
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>