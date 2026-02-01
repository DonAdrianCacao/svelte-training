<script>
  import { payrollData } from "$lib/data/payrollData.js";

  // White borders for the Header
  const th =
    "bg-[#4F47E4] text-white border-b border-r border-white whitespace-nowrap px-5 py-1 [transform:translateZ(0)]";
  // Gray borders for the Data
  const td =
    "bg-white border-b border-r border-gray-200 whitespace-nowrap px-6 py-3 text-xl [transform:translateZ(0)]";

  // make Employee ID and Employee Name sticky
  const stickyID = "sticky left-0 z-50 min-w-[150px] w-[150px] border-l";
  const stickyName = "sticky left-[150px] z-50 min-w-[200px] w-[200px]";

  function dragScroll(node) {
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      // If the clicked element is sticky, don't drag
      if (e.target.closest(".sticky")) return;

      isDown = true;
      node.classList.add("cursor-grabbing");
      startX = e.pageX - node.offsetLeft;
      scrollLeft = node.scrollLeft;
    };

    const onMouseUp = () => {
      isDown = false;
      node.classList.remove("cursor-grabbing");
    };

    const onMouseLeave = () => {
      isDown = false;
      node.classList.remove("cursor-grabbing");
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - node.offsetLeft;
      const walk = x - startX;
      node.scrollLeft = scrollLeft - walk;
    };

    node.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    node.addEventListener("mouseleave", onMouseLeave);
    node.addEventListener("mousemove", onMouseMove);

    return {
      destroy() {
        node.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        node.removeEventListener("mouseleave", onMouseLeave);
        node.removeEventListener("mousemove", onMouseMove);
      },
    };
  }
</script>

<div class="w-full p-2">
  <!-- Top Controls -->
  <div class="flex flex-col gap-4 mb-4">
    <!-- Back Button -->
    <div class="w-full p-1">
      <button
        class="flex items-center gap-1 text-[#4F47E4] font-semibold text-base hover:underline group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </button>
    </div>

    <!-- Toolbar Buttons -->
    <div class="flex items-center gap-3">
      <!-- Menu Button -->
      <button
        class="px-4 py-2 text-sm font-medium bg-[#4F47E4] text-white rounded-full hover:bg-[#3f38c9]"
      >
        ☰
      </button>

      <!-- Sort Button -->
      <button
        class="px-4 py-2 text-sm font-medium bg-[#4F47E4] text-white rounded-full hover:bg-[#3f38c9]"
      >
        ↑↓
      </button>

      <!-- Search input -->
      <div class="relative w-[260px]">
        <!-- Search Icon -->
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </span>

        <!-- Search bar -->
        <input
          type="text"
          placeholder="Search employee..."
          class="w-full pl-10 pr-4 py-2 border border-[#3f38c9] rounded-full text-sm outline-none"
        />
      </div>
    </div>
  </div>
  <!-- Payroll Table Wrapper -->
  <div
    use:dragScroll
    class="relative overflow-x-auto select-none rounded-[25px] border-t border-l border-gray-300
           [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
  >
    <!-- Payroll Table -->
    <table class="min-w-full border-separate border-spacing-0">
      <thead>
        <tr class="text-center">
          <!-- Sticky Columns -->
          <th
            class="{th} {stickyID} border-l-white border-t-white shadow-[inset_-1px_0_0_0_white]"
            rowspan="2"
          >
            EMPLOYEE ID
          </th>
          <th class="{th} {stickyName} border-t-white" rowspan="2">
            EMPLOYEE NAME
          </th>

          <!-- Table Columns -->
          <th class={th} rowspan="2">DEPARTMENT</th>
          <th class={th} rowspan="2">JOB ROLE</th>
          <th class={th} rowspan="2">INITIAL PAY</th>
          <th class={th} colspan="3">ADDITIONALS</th>
          <th class={th} colspan="2">DEDUCTIONS</th>
          <th class={th} rowspan="2">GROSS PAY</th>
          <th class={th} colspan="3">GOVERNMENT CONTRIBUTIONS</th>
          <th class={th} rowspan="2">WITHHOLDING TAX</th>
          <th class={th} rowspan="2">NET PAY</th>
        </tr>

        <!-- Sub-Headers -->
        <tr class="text-center">
          <th class="hidden"></th>
          <th class={th}>HOLIDAY PAY</th>
          <th class={th}>OVERTIME PAY</th>
          <th class={th}>BONUSES</th>
          <th class={th}>TARDINESS</th>
          <th class={th}>ABSENCES</th>
          <th class={th}>SSS</th>
          <th class={th}></th>
          <th class={th}>PHILHEALTH</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        {#each payrollData as row (row.employeeId)}
          <tr class="text-center">
            <!-- Sticky Columns -->
            <td
              class="{td} {stickyID} border-l-gray-200 shadow-[inset_-1px_0_0_0_#e5e7eb]"
            >
              {row.employeeId}
            </td>
            <td
              class="{td} {stickyName} border-r-2 border-r-gray-300 font-medium text-gray-700"
            >
              {row.employeeName}
            </td>

            <!-- Table Data -->
            <td class={td}>{row.department}</td>
            <td class={td}>{row.jobRole}</td>
            <td class={td}>{row.initialPay}</td>
            <td class={td}>{row.holidayPay}</td>
            <td class={td}>{row.overtimePay}</td>
            <td class={td}>{row.bonuses}</td>
            <td class={td}>{row.tardiness}</td>
            <td class={td}>{row.absences}</td>
            <td class={td}>{row.grossPay}</td>
            <td class={td}>{row.sss}</td>
            <td class={td}></td>
            <td class={td}>{row.philhealth}</td>
            <td class={td}>{row.withholdingTax}</td>
            <td class={td}>{row.netPay}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
