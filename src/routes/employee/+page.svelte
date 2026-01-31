<script>
    import UploadAttendance from "$lib/components/UploadAttendance.svelte";

    let showUploadModal = false;

    // open and close modal
    const openModal = () => (showUploadModal = true);
    const closeModal = () => (showUploadModal = false);
</script>

<div class="p-8">
    <div class="flex justify-between items-center mb-8">
        <div>
            <h1 class="text-3xl font-bold text-gray-800">Employees</h1>
            <p class="text-gray-500">Manage your workforce and attendance</p>
        </div>

        <button
            class="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition flex items-center gap-2 border border-blue-700"
            on:click={openModal}
        >
            <span>+</span> Upload Attendance
        </button>
    </div>

    <div
        class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
    >
        <div class="p-6 border-b border-gray-100 bg-gray-50/50">
            <h2 class="font-semibold text-gray-700">
                Adrian's Corporation >:)
            </h2>
        </div>

        <div class="p-12 text-center">
            <div
                class="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"
            >
                <span class="text-gray-400 text-2xl text-bold">?</span>
            </div>
            <p class="text-gray-400">
                No employees listed yet. Start by uploading attendance data.
            </p>
        </div>
    </div>

    <UploadAttendance open={showUploadModal} onClose={closeModal} />
</div>
