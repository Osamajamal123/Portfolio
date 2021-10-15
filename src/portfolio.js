import emoji from "react-easy-emoji";

// import googlelogo from "./assets/img/icons/common/google.svg";
// import github from "./assets/img/icons/common/github.svg";
// import airbnb from "./assets/img/icons/common/airbnbLogo.png";
import Person from "./assets/img/icons/common/person1.png"
import Person1 from "./assets/img/icons/common/person2.jpg"
import Person2 from "./assets/img/icons/common/person3.png"
import Person3 from "./assets/img/icons/common/person4.png"
import Mobile from "./assets/img/icons/common/mobile.png"
import Website from "./assets/img/icons/common/website.png"
import Design from "./assets/img/icons/common/design.png"
import Sania from "./assets/img/icons/common/sania.png"
import Adeel from "./assets/img/icons/common/adeel.png"
import Saba from "./assets/img/icons/common/saba.png"
import Shoaib from "./assets/img/icons/common/shoaib.jpg"


export const greetings = {
	name: "Hanzla Tauqeer",
	title: "We Create Digital Products and Provide services",
	description:
		"If you are looking for Professional Web Applications and Mobile Applications for your	Bussiness Then you are at the right Place.	Providing you E-solutions for your Bussiness.",
	resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
	githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com/1hanzla100",
	// instagram: "https://www.instagram.com/1hanzla100",
	// twitter: "https://twitter.com/1hanzla100",
	// github: "https://github.com/1hanzla100",
	// linkedin: "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"We can make Fully responsive Cms Application,Headless Cms ,Web Application,ERP Web Applications,E-commerce Stores ,Websites",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		// emoji(
		// 	"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		// ),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		// {
		// 	skillName: "aws",
		// 	fontAwesomeClassname: "logos:aws",
		// },
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		// {
		// 	skillName: "python",
		// 	fontAwesomeClassname: "logos:python",
		// },
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		img:Sania,
		schoolName: "Sania Khan",
		subHeader: "Backend Developer",
		duration: "",
		desc: "",
		descBullets: [
			"",
			"",
		],
	},
	{
		img:Adeel,
		schoolName: "Adeel Nazir",
		subHeader: "Frontend Developer",
		duration: "",
		desc: "",
		descBullets: [
			"",
			"",
		],
	},
	{
		img:Saba,
		schoolName: "Saba Arif",
		subHeader: "Backend Developer",
		duration: "",
		desc: "",
		descBullets: [
			"",
		],
	},
	{
		img:Shoaib,
		schoolName: "Muhammad Shoaib",
		subHeader: "Frontend Developer",
		duration: "",
		desc: "",
		descBullets: [
			"",
			"",
		],
	},
];

export const experience = [
	{
		role: "",
		company: "App Development",
		companylogo: Mobile,
		date: "",
		desc: "We develop Mobile Applications in React Native. We also do PWA testing for your web Apps..",
		descBullets: [
			"",
			"",
		],
		background :"rgb(68, 132, 244)"
   
	},
	{
		role: "",
		company: "Web Development",
		companylogo: Website,
		date: "",
		desc: "We Develop Websites, Web Applications, CMS systems , CRM systems ,CRP systems and Web based ERP systems. We use MERN Stack Framework , ReactJs, NextJs, NodeJs , NestJs and Graphql for the development of our web Applications.",
		background: "rgb(28, 36, 92)"
		
	},
	{
		role: "",
		company: "UI/UX Development",
		companylogo: Design,
		date: "",
		desc: "We design your Applications with proper ui/ux designing guidelines. We prioritize user experience and make things easier for the user with outstanding Ui.",
		background: "rgb(252, 92, 100)"
	},
];

export const projects = [
	{
		name: "iSupport Cause",
		desc: "",
		link: "https://www.isupportcause.com/",
	},
	{
		name: "DropZik",
		desc: "",
		link: "https://dropzik.com/",
	},
	{
		name: "Nyra",
		desc: "",
		link: "http://www.nyrainvestments.co.za/",
	},
	{
		name: "Argentavis",
		desc: "",
		link: "https://argentavis-client.vercel.app/",
	},
	{
		name: "MechPic",
		desc: "",
		github: "",
		link:"https://hardcore-beaver-45114d.netlify.app"
	},
	{
		name: "BEEHIVE",
		desc: "",
		github: "",
		link: "https://elegant-archimedes-545141.netlify.app/",
	},
	{
		name: "3M COVID Conclave 2020",
		desc: "",
		github: "",
		link:"https://kind-noether-3af122.netlify.app/"
	},
	{
		name: "Dystech",
		desc: "",
		github: "",
		link:"https://nervous-heisenberg-f7ecb1.netlify.app/"
	},
	{
		name: "Events",
		desc: "",
		github: "",
		link:"https://stoic-nobel-462736.netlify.app/"
	},
	
	{
		name: "Arizona",
		desc: "",
		github: "",
		link:"https://vigorous-einstein-e244de.netlify.app/"
	},
];

export const feedbacks = [
	{
		id:1,
		img:Person,
		name: "ZOBAIRLATIF",
		feedback:
		"Very good and fast communication. I am really happy with the end result.Thank you so much",
	},
	{
		id:2,
		img:Person1,
		name: "GUERERO",
		feedback:
		"Amazing communication and hard working . will definitely work again with @saniakhan again",
	},
	{
		id:3,
		img:Person2,
		name: "SID841",
		feedback:
		"Awesome Job !",
	},
	{
		id:4,
		img:Person3,
		name: "MAXIMAX96",
		feedback:
		"Very professional and reponsive team. They delivered the product exactly as i wanted and within the given time frame.I would higly recommend there service.",
	},
];
