<script>
    export let open = false;
    export let onClose = () => {};
</script>

{#if open}
    <div class="fixed inset-0 bg-black/50 z-40" on:click={onClose}></div>

    <div
        class="fixed inset-0 flex items-center justify-center z-50 p-4"
        on:click|stopPropagation
    >
        <div
            class="bg-white rounded-lg shadow-2xl border border-gray-200 p-8 w-full max-w-md"
        >
            <h2 class="text-2xl font-bold mb-6 text-gray-800">
                Upload Attendance
            </h2>

            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Attendance File
                    </label>
                    <input
                        type="file"
                        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border border-gray-300 rounded-md"
                    />
                </div>

                <div class="flex gap-3 pt-4">
                    <button
                        type="submit"
                        class="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                    >
                        Upload
                    </button>
                    <button
                        type="button"
                        class="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition"
                        on:click={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}
