<script>
    import { sidebarOpen } from "$lib/stores/sidebar.js";
    import { sidebarMenu } from "$lib/data/sidebarMenu.js";

    // Track open parent menus
    let expanded = new Set();

    function toggleExpand(item, index) {
        if (!item.children) return;

        if (expanded.has(index)) expanded.delete(index);
        else expanded.add(index);
        expanded = new Set(expanded);
    }
</script>

<nav
    class="bg-gray-50 border-r border-gray-300 flex flex-col transition-all duration-300 h-screen shadow-sm"
    class:w-64={$sidebarOpen}
    class:w-16={!$sidebarOpen}
>
    <div
        class="p-4 border-b border-gray-300 flex items-center bg-white"
        class:flex-row={$sidebarOpen}
        class:flex-col={!$sidebarOpen}
        class:justify-between={$sidebarOpen}
        class:gap-2={!$sidebarOpen}
    >
        <span
            class="font-bold text-blue-800 tracking-tight overflow-hidden whitespace-nowrap"
        >
            {$sidebarOpen ? "PAYROLL SYSTEM" : "P"}
        </span>
        <button
            on:click={() => sidebarOpen.update((v) => !v)}
            class="p-1.5 hover:bg-gray-100 rounded border border-gray-200 transition-colors flex items-center justify-center outline outline-1 outline-transparent hover:outline-gray-300"
            aria-label={$sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300 text-gray-600"
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
    </div>

    <ul class="flex-1 flex flex-col mt-4 divide-y divide-gray-100">
        {#each sidebarMenu as item, index}
            <li class="group">
                <button
                    class="w-full text-left flex items-center p-3 hover:bg-blue-50 cursor-pointer transition-colors border-l-4 border-transparent hover:border-blue-500"
                    class:justify-center={!$sidebarOpen}
                    on:click={() => toggleExpand(item, index)}
                    title={!$sidebarOpen ? item.name : ""}
                >
                    <span
                        class="text-xl group-hover:scale-110 transition-transform"
                        >{item.icon}</span
                    >

                    {#if $sidebarOpen}
                        <span class="ml-3 font-medium text-gray-700"
                            >{item.name}</span
                        >

                        {#if item.children}
                            <span class="ml-auto text-xs text-gray-400"
                                >{expanded.has(index) ? "▲" : "▼"}</span
                            >
                        {/if}
                    {/if}
                </button>

                {#if item.children && expanded.has(index) && $sidebarOpen}
                    <ul class="bg-gray-50 py-1">
                        {#each item.children as child}
                            <li>
                                <a
                                    href={child.route}
                                    class="w-full text-left pl-12 p-2 hover:text-blue-600 text-gray-600 text-sm flex items-center transition-colors"
                                >
                                    <span class="mr-2 text-xs opacity-50"
                                        >•</span
                                    >
                                    <span>{child.name}</span>
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>
