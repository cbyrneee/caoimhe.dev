type Project = {
	title: string;
	description: string;
	image: string;
	link: string;
};

const projects: Project[] = [
	{
		title: "Compact Chat",
		description:
			"A mod for Minecraft which compacts messages which have been sent more than once.",
		image: "/images/compact-chat.webp",
		link: "https://modrinth.com/mod/compact-chat",
	},
	{
		title: "Scroll Director",
		description:
			"An application for macOS which toggles the 'Natural Scrolling' setting whenever an external mouse is connected/disconnected.",
		image: "/images/scroll-director.webp",
		link: "https://github.com/cbyrneee/scroll-director",
	},
	{
		title: "BetterInject",
		description:
			'A better <code class="code-block">@Inject</code> annotation for Mixin. It provides better local capture, completely optional arguments, and more.',

		image: "/images/betterinject.webp",
		link: "https://github.com/cbyrneee/BetterInject",
	},
];

export default projects;
