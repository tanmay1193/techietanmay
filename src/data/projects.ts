export interface Project {
	title: string;
	description: string;
	link: string;
	image?: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "Lightweight TCP Port Scanner (Bash + Netcat)",
		description: "Scans a range of TCP ports on a given host and prints which ports are open or closed.",
		link: "https://github.com/tanmay1193/tcp-port-scanner",
		tags: ["Cybersecurity", "Bash", "Netcat"],
	},
];