// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
Type 'resume' to display resume.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'summary' - short summary.
'resume' - my latest resume in terminal format.`;
  // 'readme' - my github readme.
};

export const resume = async (args: string[]): Promise<string> => {
  return `<span style="display:block;text-align:center;"><strong> Resume</strong></span>
<span style="display:block;text-align:center;">───────────────</span>
<span style="display:block;text-align:center;"><strong> Rodrigo Victor Alcorta</strong></span>
<span style="display:block;text-align:center;">Senior Software Engineer | Backend & Cloud | TypeScript · Python · AWS · Serverless</span>
<span style="display:block;text-align:center;">📞 +54 9 11 6209-6271</span>
<span style="display:block;text-align:center;">✉️ ${config.email}</span>
<span style="display:block;text-align:center;">🌐 rodrigoalcorta.com</span>
<span style="display:block;text-align:center;"> github.com/ralcorta</span>
<span style="display:block;text-align:center;">───────────────</span>
<span style="display:block;"><strong>🧭 SUMMARY</strong></span>
<span style="display:block;">Senior Software Engineer with 8 years of experience building scalable backend systems and cloud infrastructure for international companies and startups, from Bayer to US-based products. I specialize in backend and cloud architecture designing serverless, high-availability applications with TypeScript, Python, Node.js, and AWS. I enjoy turning complex, manual processes into automated, reliable systems, and I’ve led work spanning microservices, security overhauls, and end-to-end product delivery. I work remotely with distributed teams and care about clean architecture, performance, and shipping things that actually solve problems.</span>
<span style="display:block;">───────────────</span>
<span style="display:block;"><strong>💼 EXPERIENCE</strong></span>
<span style="display:block;">▸ <strong>Bayer</strong> <span style="opacity:.8;">| Apr. 2022 – Present</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Senior Software Engineer | Buenos Aires, Argentina | Remote</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Developed scalable microservices in the orchestration layer using Python and Node.js with TypeScript to streamline company-wide operations.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Designed and maintained cloud infrastructure on AWS (Lambda, EC2, ECS) alongside GraphQL to ensure secure, efficient cross-team data flow, managing IaC with Terraform and CloudFormation.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Led a technical security overhaul across company tools, reducing potential vulnerability risks and significantly improving system response times for internal users.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>ArtsSEC</strong> <span style="opacity:.8;">| Jan. 2022 – May 2022</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Senior Web Application Developer | Buenos Aires, Argentina | Remote</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Engineered a platform with Node.js and Angular to automatically generate detailed reports based on pentesting research.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Eliminated manual reporting tasks, saving security teams significant time previously spent on documentation.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>Blaze</strong> <span style="opacity:.8;">| Feb. 2021 – Jan. 2022</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Senior Backend Engineer | Remote</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Engineered core platform features for the gambling game ecosystem using Node.js and TypeScript, ensuring high availability during peak user traffic.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Optimized real-time data flows and transaction endpoints, significantly reducing latency for user betting actions.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>Attendery</strong> <span style="opacity:.8;">| Nov. 2019 – Jan. 2021</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Senior Software Engineer | Austin, USA | Remote</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Engineered a core startup application enabling instant searches for flights, hotels, and ground transportation for event staff logistics.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Built a robust backend architecture using Node.js, TypeScript, and AWS to handle high-concurrency requests during peak event seasons.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Optimized the search algorithm and API integrations, significantly accelerating the average query and booking process for complex team travel.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>DVS 360</strong> <span style="opacity:.8;">| Sep. 2018 – Nov. 2019</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Senior Web Application Developer | Buenos Aires, Argentina | Remote</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Developed comprehensive enterprise platforms and integral systems using Node.js, Laravel (PHP), Angular, and Vue.js.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Managed project lifecycles from conception to deployment on AWS, utilizing agile methodologies and project management tools.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Streamlined corporate workflows for major clients, resulting in a substantial reduction of manual data entry tasks through custom automated solutions.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>K27</strong> <span style="opacity:.8;">| Jan. 2018 – Sep. 2018</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Semi Sr. .NET Developer | Buenos Aires, Argentina</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Developed custom packages and components for the corporate SharePoint platform using .NET and JavaScript.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Successfully migrated heritage databases with zero data loss using custom PowerShell automation during critical transitions.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>Legislatura de la Ciudad de Buenos Aires</strong> <span style="opacity:.8;">| Jul. 2017 – Jan. 2018</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Jr Full Stack Developer | Buenos Aires, Argentina</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Maintained and optimized critical government platforms focused on public financial management using .NET and JavaScript.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Enhanced the platform’s reliability and user interface, accelerating the processing of financial records and improving accessibility for public administration staff.</span>
<span style="display:block;">───────────────</span>
<span style="display:block;"><strong>🧪 FREELANCE & PROJECTS</strong></span>
<span style="display:block;">▸ <strong>Sinconta</strong> <span style="opacity:.8;">| Jan. 2019 – May 2019</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Front End Developer</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Developed the responsive web application side of a mobile platform for a Mexican company to facilitate accounting workflows.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Delivered a seamless web experience that streamlined accounting processes and enhanced overall cross-platform user engagement.</span>
<span style="display:block;">&nbsp;</span>
<span style="display:block;">▸ <strong>Balcony</strong> <span style="opacity:.8;">| Sep. 2018 – Dec. 2018</span></span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;Full Stack Developer</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Built a centralized synchronization tool using JavaScript and .NET to manage inventory across multiple e-commerce storefronts (Mercado Libre) from a single dashboard.</span>
<span style="display:block;">&nbsp;&nbsp;&nbsp;• Key Achievement: Successfully synchronized extensive product catalogs in real-time, effectively eliminating stock discrepancies and overselling issues for clients.</span>
<span style="display:block;">───────────────</span>
<span style="display:block;"><strong>🎓 EDUCATION</strong></span>
<span style="display:block;">&nbsp;&nbsp;• Argentine University of Business (UADE) | Bachelor of Science in Software Engineering | 2020 – 2025 | Buenos Aires, Argentina</span>
<span style="display:block;">&nbsp;&nbsp;• Argentine University of Business (UADE) | Associate Degree in Computer Analysis | 2020 – 2023 | Buenos Aires, Argentina</span>
<span style="display:block;">&nbsp;&nbsp;• National University of La Matanza (UNLAM) | Software Engineering Coursework (Transferred to UADE) | 2017 – 2020 | Buenos Aires, Argentina</span>
<span style="display:block;">&nbsp;&nbsp;• San Judas Tadeo Industrial Technical Institute | High School Degree with Tech Specialization in Informatics | 2009 – 2016 | Buenos Aires, Argentina</span>
<span style="display:block;">───────────────</span>
<span style="display:block;"><strong>🏅 CERTIFICATIONS</strong></span>
<span style="display:block;">&nbsp;&nbsp;• EF SET English Certificate · Scrum Foundation Professional Certificate (SFPC)</span>
<span style="display:block;">───────────────</span>
<span style="display:block;"><strong>🧰 SKILLS</strong></span>
<span style="display:block;">&nbsp;&nbsp;• Languages: JavaScript, TypeScript, Python, PHP, C, HTML/CSS, SASS</span>
<span style="display:block;">&nbsp;&nbsp;• Frameworks & Libraries: Node.js, NestJS, Vue.js, Angular, Laravel, GraphQL</span>
<span style="display:block;">&nbsp;&nbsp;• Cloud & Infrastructure: AWS Ecosystem, Serverless Architecture, Managed Containers (ECS/Fargate), Auto Scaling Groups, DigitalOcean, Infrastructure as Code (Terraform, CloudFormation)</span>
<span style="display:block;">&nbsp;&nbsp;• DevOps & CI/CD: Containerization (Docker, Multi-stage Builds), GitHub Actions, GitLab CI/CD (Custom Runners, Pipelines), AWS CodePipeline, Automated Deployments</span>
<span style="display:block;">&nbsp;&nbsp;• Networking: VPC Design, Subnetting, Load Balancing (ALB/NLB), Route 53, API Gateways, Traffic Routing, DNS Management, Network Security</span>
<span style="display:block;">&nbsp;&nbsp;• Information Security: Web Application Security, Pentesting Research, Vulnerability Assessment, IAM Policies, AWS Security Best Practices, OWASP Top 10, Data Encryption</span>
<span style="display:block;">&nbsp;&nbsp;• AI & Machine Learning: AI API Integration, LLM Orchestration, Prompt Engineering, Data Analysis Pipelines, Predictive Modeling Basics, Python ML Libraries</span>
<span style="display:block;">&nbsp;&nbsp;• Spoken Languages: Spanish (Native), English (Full Professional)</span>
<span style="display:block;">───────────────</span>
<span style="display:block;text-align:center;"><u><a href="https://www.linkedin.com/in/${config.social.linkedin}/" target="_blank">Linkedin</a></u></span>`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.coffee}" target="_blank">Coffee</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗██╗
  ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝██║
  ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░██║
  ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░╚═╝
  ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗██╗
  ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝╚═╝

# Rodrigo Terminal:
Type 'resume' to display summary.
Type 'summary' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type 'help' to see the list of available commands.
`;
};
