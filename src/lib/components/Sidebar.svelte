<script>
    import { sidebarOpen } from "$lib/stores/sidebar.js";
    import { sidebarMenu } from "$lib/data/sidebarMenu.js";

    // Track which parent menus are expanded
    let expanded = new Set();

    // Toggle a parent menu open/close
    function toggleExpand(item, index) {
        if (!item.children) return; // Do nothing if no children

        if (expanded.has(index)) expanded.delete(index);
        else expanded.add(index);
        expanded = new Set(expanded); // trigger reactivity
    }
</script>

<nav
    class="bg-gray-100 border-r border-gray-300 flex flex-col transition-all duration-300 h-screen"
    class:w-64={$sidebarOpen}
    class:w-16={!$sidebarOpen}
>
    <!-- Header/Toggle -->
    <div
        class="p-3 border-b border-gray-200 flex items-center"
        class:flex-row={$sidebarOpen}
        class:flex-col={!$sidebarOpen}
        class:justify-between={$sidebarOpen}
        class:gap-2={!$sidebarOpen}
    >
        <span class="font-bold text-gray-700 overflow-hidden whitespace-nowrap">
            {$sidebarOpen ? "PAYROLL SYSTEM" : "P"}
        </span>
        <button
            on:click={() => sidebarOpen.update((v) => !v)}
            class="p-1.5 hover:bg-gray-200 rounded-md transition-colors flex items-center justify-center"
            aria-label={$sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform duration-300"
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

    <!-- Menu -->
    <ul class="flex-1 flex flex-col mt-2">
        {#each sidebarMenu as item, index}
            <li>
                <!-- Parent menu -->
                <button
                    class="w-full text-left flex items-center p-2 hover:bg-gray-200 cursor-pointer transition-colors"
                    class:justify-center={!$sidebarOpen}
                    on:click={() => toggleExpand(item, index)}
                    title={!$sidebarOpen ? item.name : ""}
                >
                    <span class="text-xl">{item.icon}</span>

                    {#if $sidebarOpen}
                        <span class="ml-3 font-medium">{item.name}</span>

                        {#if item.children}
                            <span class="ml-auto"
                                >{expanded.has(index) ? "▲" : "▼"}</span
                            >
                        {/if}
                    {/if}
                </button>

                <!-- Children menu -->
                {#if item.children && expanded.has(index) && $sidebarOpen}
                    <ul class="ml-8 flex flex-col">
                        {#each item.children as child}
                            <li>
                                <button
                                    class="w-full text-left p-2 hover:bg-gray-200 cursor-pointer flex items-center rounded-md transition-colors"
                                    title={!$sidebarOpen ? child.name : ""}
                                >
                                    <span class="text-lg">{child.icon}</span>
                                    {#if $sidebarOpen}
                                        <span class="ml-2">{child.name}</span>
                                    {/if}
                                </button>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </li>
        {/each}
    </ul>
</nav>
