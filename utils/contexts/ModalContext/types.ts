export const modals = ["", "download-app", "developers", "about-poet"] as const;

export type TModalNames = typeof modals[number];
