<script>
    import { payrollData } from "$lib/data/payrollData.js";
</script>

<table class="min-w-full">
    <thead>
        <tr>
            <th class="border px-2 py-1" rowspan="2">EMPLOYEE ID</th>
            <th class="border px-2 py-1" rowspan="2">EMPLOYEE NAME</th>
            <th class="border px-2 py-1" rowspan="2">DEPARTMENT</th>
            <th class="border px-2 py-1" rowspan="2">JOB ROLE</th>
            <th class="border px-2 py-1" rowspan="2">INITIAL PAY</th>
            <th class="border px-2 py-1" colspan="3">ADDITIONALS</th>
            <th class="border px-2 py-1" colspan="2">DEDUCTIONS</th>
            <th class="border px-2 py-1" rowspan="2">GROSS PAY</th>
            <th class="border px-2 py-1" colspan="3" >GOVERNMENT CONTRIBUTIONS</th>
            <th class="border px-2 py-1" rowspan="2">WITHHOLDING TAX</th>
            <th class="border px-2 py-1" rowspan="2">NET PAY</th>
        </tr>
        <tr>
            <th class="border px-2 py-1">HOLIDAY PAY</th>
            <th class="border px-2 py-1">OVERTIME PAY</th>
            <th class="border px-2 py-1">BONUSES</th>
            <th class="border px-2 py-1">TARDINESS</th>
            <th class="border px-2 py-1">ABSENCES</th>
            <th class="border px-2 py-1">SSS</th>
            <th class="border px-2 py-1"> </th>
            <th class="border px-2 py-1">PHILHEALTH</th>
        </tr>
    </thead>
    <tbody>
    {#each payrollData as row (row.employeeId)}
        <tr>
            <td class="border px-2 py-1">{row.employeeId}</td>
            <td class="border px-2 py-1">{row.employeeName}</td>
            <td class="border px-2 py-1">{row.department}</td>
            <td class="border px-2 py-1">{row.jobRole}</td>
            <td class="border px-2 py-1">{row.initialPay}</td>
            <td class="border px-2 py-1">{row.holidayPay}</td>
            <td class="border px-2 py-1">{row.overtimePay}</td>
            <td class="border px-2 py-1">{row.bonuses}</td>
            <td class="border px-2 py-1">{row.tardiness}</td>
            <td class="border px-2 py-1">{row.absences}</td>
            <td class="border px-2 py-1">{row.grossPay}</td>
            <td class="border px-2 py-1">{row.sss}</td>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">{row.philhealth}</td>
            <td class="border px-2 py-1">{row.withholdingTax}</td>
            <td class="border px-2 py-1">{row.netPay}</td>
        </tr>
    {/each}
</tbody>
</table>

<style>
    th {
        background-color: #4F47E4; 
        color:rgb(255, 255, 255);
        border: 1px solid rgb(255, 255, 255); 
        white-space: nowrap;
    }

    tr { text-align: center;  }
    td { white-space: nowrap; padding: 15px 66px;}
    

    table,th { outline: 0.25px solid rgb(255, 255, 255); }
    table{ border-radius: 25px; overflow:hidden; }
   
</style>
