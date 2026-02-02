/**
 * ROUTES
 * Centralized routing for internal links.
 */
export const ROUTES = {
    HOME: "/",
    CONTACT: "/contact",
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
    },
    DASHBOARD: {
        OVERVIEW: "/dashboard/overview",
        INVESTMENTS: "/dashboard/investments",
        KYC: "/dashboard/kyc",
        WITHDRAWALS: "/dashboard/withdrawals",
        REFERRALS: "/dashboard/referrals",
        ACTIVITY: "/dashboard/activity",
        SUPPORT: "/dashboard/support",
        EDIT_PROFILE: "/dashboard/edit-profile",
    },
    STRATEGY: {
        CRYPTO: "/strategy/crypto",
        FOREX: "/strategy/forex",
    },
    LEGAL: {
        TERMS: "/terms",
        PRIVACY: "/privacy",
        RISK: "/risk-disclosure",
    },
};
