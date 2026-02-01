export const sidebarMenu = [
    { name: "OVERVIEW", 
        icon: "O", 
        children: [
        { name: "DASHBOARD", icon: "D", route: "/dashboard" }] },

    { name: "MODULES", 
        icon: "M", 
        children: [
            { name: "EMPLOYEE", icon: "E", route: "/employee" },
            { name: "ATTENDANCE", icon: "A", route: "/attendance" },
            { name: "PAYROLL", icon: "P", route: "/payroll" }] },
];
