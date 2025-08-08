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
		tags: ["Cybersecurity", "Bash", "Port Scanning"],
	},
	{
		title: "Network Health & Security Checker — All-in-One Python Toolkit",
		description: "A simple Python toolkit that checks network reachability, scans common ports, verifies SSL certificates, and tests password strength — all in one script with a clear, easy-to-read report.",
		link: "https://github.com/tanmay1193/network_toolkit",
		tags: ["Cybersecurity", "Python", "NetworkToolkit"],
	},
];