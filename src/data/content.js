export const profile = {
  name: 'Steven Furlong',
  roles: [
    'Embedded Systems Engineer',
    'IT Support Specialist',
    'Cybersecurity Enthusiast',
  ],
  location: 'Chilliwack, BC, Canada',
  email: 'sdfurlong02@gmail.com',
  phone: '+1 (604) 791-1434',
  linkedin: 'https://linkedin.com/in/stevendominic-furlong',
  github: 'https://github.com/Steven-Furlong',
  legacyPortfolio: 'https://stevenfurlongportfolio.webflow.io',
  resumeFile: '"C:\Users\Steves\Desktop\Resume Stuff\Steven Furlong Resume.pdf"',
  summary:
    "Computer Information Systems graduate with hands-on experience in remote technical support, hardware/software troubleshooting, and embedded systems engineering. Currently supporting international customers in a startup environment across Windows and Linux platforms. Seeking a junior role in IT support, helpdesk, or cybersecurity where I can apply my technical foundation to solve real problems.",
}

export const experience = [
  {
    company: 'Syntaxis',
    role: 'Embedded Systems Engineer',
    type: 'Startup',
    location: 'Chilliwack, BC, Canada',
    period: 'Dec 2024 — Present',
    bullets: [
      'Produced technical documentation including installation guides, troubleshooting procedures, and knowledge base articles to support end users and streamline issue resolution.',
      'Designed and developed embedded firmware from scratch in C++ and Python for Arduino and Raspberry Pi-based hardware products deployed to international customers.',
      'Provided remote technical support to international customers, triaging and resolving approximately 100+ hardware, firmware, driver, and OS compatibility incidents across Windows-based environments using RustDesk.',
      'Performed root-cause analysis on embedded system failures, reducing repeat escalations by identifying and documenting recurring failure patterns.',
    ],
  },
  {
    company: 'Canadian Tire',
    role: 'Receiving Associate | Project Supervisor',
    type: 'Retail',
    location: 'Chilliwack, BC, Canada',
    period: 'Apr 2018 — Jan 2020 · May 2022 — Sep 2025',
    bullets: [
      'Supervised a direct team of 5 and coordinated indirectly with 50+ staff during a store expansion and launch project, ensuring adherence to timelines and organizational standards.',
    ],
  },
]

export const education = {
  school: 'University of the Fraser Valley',
  location: 'Abbotsford, BC',
  degree: 'Bachelor of Computer Information Systems',
  year: '2025',
  coursework: [
    'Data Analysis',
    'Software Engineering',
    'Operating Systems',
    'Cybersecurity',
    'Networking',
    'Cloud Computing',
    'CompTIA Network+ & A+ equivalencies',
  ],
}

export const certifications = [
  {
    issuer: 'CompTIA',
    name: 'Security+ (SY0-701)',
    date: 'Issued June 2026',
  },
  {
    issuer: 'Microsoft',
    name: 'Azure Essentials Professional Certificate',
    date: 'Issued July 2026',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'PowerShell', 'Bash', 'JavaScript', 'C++'],
  },
  {
    category: 'Operating Systems',
    items: ['Windows 10/11 Administration', 'Linux Administration', 'macOS'],
  },
  {
    category: 'Networking',
    items: ['TCP/IP', 'DNS', 'DHCP', 'VPN'],
  },
  {
    category: 'Cybersecurity',
    items: ['Endpoint Security', 'Incident Response', 'Root-Cause Analysis'],
  },
  {
    category: 'Tools & Platforms',
    items: ['RustDesk', 'Azure', 'Remote Support & Troubleshooting', 'Configuration Management'],
  },
  {
    category: 'Hardware',
    items: ['Raspberry Pi', 'Microcontrollers', 'Embedded Systems', '3D Printing'],
  },
]

// Placeholder projects derived from resume experience — swap these out with
// real repos, screenshots, and write-ups as they become available.
export const projects = [
  {
    title: 'Embedded Firmware Suite for IoT Hardware',
    tagline: 'C++/Python firmware for Arduino & Raspberry Pi products shipped to international customers.',
    description:
      'Firmware built from scratch to drive Arduino and Raspberry Pi-based hardware products, covering sensor I/O, device configuration, and update handling for a startup hardware line.',
    tags: ['C++', 'Python', 'Arduino', 'Raspberry Pi', 'Embedded'],
    placeholder: true,
    repo: '#',
    demo: null,
  },
  {
    title: 'Remote Support Diagnostics Toolkit',
    tagline: 'Internal tooling and playbooks for triaging hardware, firmware, and OS incidents at scale.',
    description:
      'Scripts and documentation supporting remote diagnosis of 100+ hardware, firmware, driver, and OS compatibility incidents across Windows environments, delivered over RustDesk.',
    tags: ['PowerShell', 'Windows', 'RustDesk', 'Documentation'],
    placeholder: true,
    repo: '#',
    demo: null,
  },
  {
    title: 'Root-Cause Failure Pattern Tracker',
    tagline: 'A structured log for embedded failure patterns that cut repeat escalations.',
    description:
      'A lightweight tracking system for recurring embedded system failures, used to spot patterns early and document fixes so the same issue does not escalate twice.',
    tags: ['Python', 'SQL', 'Root-Cause Analysis'],
    placeholder: true,
    repo: '#',
    demo: null,
  },
  {
    title: 'Cloud-Hosted Network Monitoring Dashboard',
    tagline: 'CIS capstone-style project tying together networking, cloud, and cybersecurity coursework.',
    description:
      'A dashboard concept for monitoring network health and flagging anomalies, built around coursework in Cloud Computing, Networking, and Cybersecurity at UFV.',
    tags: ['Azure', 'Networking', 'Cybersecurity'],
    placeholder: true,
    repo: '#',
    demo: null,
  },
]
