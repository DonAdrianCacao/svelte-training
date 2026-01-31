<script>
    {
        /* simple data */
    }
    const stats = [
        { label: "Total Employees", value: "12", color: "bg-blue-50" },
        { label: "On Leave", value: "2", color: "bg-orange-50" },
        { label: "Payroll Status", value: "Draft", color: "bg-green-50" },
    ];
</script>

<div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each stats as stat}
            <div
                class="border border-gray-200 rounded-lg p-6 shadow-sm {stat.color}"
            >
                <p class="text-sm font-medium text-gray-500 uppercase">
                    {stat.label}
                </p>
                <p class="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
        {/each}
    </div>

    <div class="mt-8 border border-gray-200 rounded-lg p-8 shadow-sm bg-white">
        <h2 class="text-xl font-semibold mb-4 text-gray-700">
            Recent Activity
        </h2>
        <div
            class="h-32 flex items-center justify-center border-2 border-dashed border-gray-100 rounded text-gray-400"
        >
            No recent activity to show
        </div>
    </div>
</div>
