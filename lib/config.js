/**
 * SITE_CONFIG
 * Centralized site configuration for InvestTrack.
 */
export const SITE_CONFIG = {
    name: "InvestTrack",
    description: "The definitive administrative portal for professional offline investment tracking and portfolio management.",
    supportEmail: "support@investtrack.co",
    supportPhone: "+1 (555) 000-1234",
    officeAddress: "Financial District, New York, NY 10004, United States",
    social: {
        linkedin: "#",
        twitter: "#",
        crunchbase: "#",
    },
};

/**
 * NAV_LINKS
 * Navigation links for the landing page.
 */
export const NAV_LINKS = [
    { name: "Protocol", href: "/#features" },
    { name: "Live Indexes", href: "/#indexes" },
    { name: "Verification", href: "/#steps" },
    { name: "Contact", href: "/contact" }, // Pointing to the dedicated page by default
];

/**
 * DASHBOARD_MENU
 * Menu items for the dashboard sidebar.
 */
import {
    LayoutDashboard,
    Wallet,
    History,
    UserCheck,
    Users,
    Bell,
    Mail,
} from "lucide-react";

export const DASHBOARD_MENU = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard/overview" },
    { name: "Investments", icon: Wallet, href: "/dashboard/investments" },
    { name: "KYC Verification", icon: UserCheck, href: "/dashboard/kyc" },
    { name: "Withdrawals", icon: History, href: "/dashboard/withdrawals" },
    { name: "Referrals", icon: Users, href: "/dashboard/referrals" },
    { name: "Activity", icon: Bell, href: "/dashboard/activity" },
    { name: "Support", icon: Mail, href: "/dashboard/support" },
];
