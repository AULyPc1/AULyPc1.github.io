import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const ARTWORK = ["Photos"];

export const siteConfig: SiteConfig = {
	title: "AULyPc",
	subtitle: "Blog",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/banner_vrc_3.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "距离/距離", // Credit text to be displayed
			url: "https://vrchat.com/home/user/usr_1df2ae7b-94fc-40e4-a73e-0a5771e4882f", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon_liliya-light-32.png", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Blogs,
		LinkPreset.Archive,
		LinkPreset.Gallery,
		LinkPreset.About,
		LinkPreset.Friends,
		//	{
		//		name: "GitHub",
		//		url: "https://github.com/AULyPc", // Internal links should not include the base path, as it is automatically added
		//		external: true, // Show an external link icon and will open in a new tab
		//	},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/favicon_amiya.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "AULyPc",
	bio: "今日も生きててえらい ☁",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com/AULyPc1",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://steamcommunity.com/profiles/76561198813644850/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/AULyPc",
		},
		{
			name: "bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/88023998",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
