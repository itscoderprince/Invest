export const ADMIN_STATS = [
    { name: "Total Users", value: "1,240", change: "+12%", color: "text-primary", bg: "bg-primary/5" },
    { name: "Pending KYC", value: "48", change: "8 High", color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Pending Capitals", value: "24", change: "$12.4k", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Open Tickets", value: "12", change: "3 New", color: "text-rose-500", bg: "bg-rose-50" },
];

export const USERS_DATA = [
    { id: "USR-001", name: "John Doe", email: "john@example.com", balance: "$5,240.50", kyc: "Level 1", status: "Active" },
    { id: "USR-002", name: "Sarah Smith", email: "sarah@google.com", balance: "$12,000.00", kyc: "Level 2", status: "Active" },
    { id: "USR-003", name: "Mike Ross", email: "mike@ross.co", balance: "$0.00", kyc: "None", status: "Pending" },
    { id: "USR-004", name: "Jane Foster", email: "jane@thor.me", balance: "$450.00", kyc: "Level 1", status: "Banned" },
];

export const KYC_PENDING = [
    { id: "KYC-882", user: "John Doe", date: "2024-01-28", type: "Full Verification" },
    { id: "KYC-883", user: "Alice Walker", date: "2024-01-29", type: "Level 2" },
    { id: "KYC-884", user: "Bob Marley", date: "2024-01-30", type: "Full Verification" },
];

export const INVESTMENTS_DATA = [
    { id: "INV-001", user: "John Doe", index: "Moscow", amount: "$5,000", date: "2024-01-25", status: "Approved" },
    { id: "INV-005", user: "Alice Walker", index: "Ural", amount: "$1,200", date: "2024-01-29", status: "Pending" },
    { id: "INV-006", user: "Bob Marley", index: "Volga", amount: "$4,500", date: "2024-01-30", status: "Pending" },
];

export const WITHDRAWALS_DATA = [
    { id: "WID-882", user: "John Doe", method: "USDT (TRC20)", destination: "TRC20...x92p", amount: "$1,240.00", date: "2024-02-01", status: "Pending" },
    { id: "WID-883", user: "Sarah Smith", method: "Bank Transfer", destination: "Chase ****442", amount: "$5,000.00", date: "2024-02-02", status: "Pending" },
    { id: "WID-884", user: "Mike Jones", method: "USDT (TRC20)", destination: "TRC20...z11k", amount: "$250.00", date: "2024-02-03", status: "Pending" },
];

export const LOGS_DATA = [
    { time: "2024-01-30 14:22:15", user: "Admin", action: "Approved KYC", target: "USR-004", level: "info" },
    { time: "2024-01-30 12:05:01", user: "System", action: "Weekly Returns Distributed", target: "All Users", level: "success" },
    { time: "2024-01-30 09:44:22", user: "System", action: "Failed Login Attempt", target: "192.168.1.45", level: "warning" },
    { time: "2024-01-29 18:30:10", user: "Admin", action: "Rejected Investment", target: "INV-088", level: "info" },
    { time: "2024-01-29 15:10:00", user: "Security", action: "Critical Update Applied", target: "Server-Alpha", level: "warning" },
];

export const SUPPORT_TICKETS = [
    { id: "TKT-102", user: "Alice Walker", email: "alice@example.com", subject: "KYC Document Rejected", message: "My passport photo was rejected twice. Please clarify what's wrong with the current submission.", date: "1 hour ago", priority: "High", status: "New" },
    { id: "TKT-101", user: "Mike Ross", email: "mike@ross.co", subject: "Investment Delay", message: "My USDT deposit is still not showing in my dashboard after 4 hours.", date: "4 hours ago", priority: "Medium", status: "In Progress" },
    { id: "TKT-099", user: "Jane Foster", email: "jane@thor.me", subject: "Account Access", message: "Can I use two-factor authentication on this platform?", date: "1 day ago", priority: "Low", status: "Resolved" },
];
