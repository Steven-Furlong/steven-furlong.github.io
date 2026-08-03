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
  resumeFile: '/resume.pdf',
  // Drop a headshot into public/profile.jpg to have it appear in the About section.
  photo: '/profile.jpg',
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

// Pulled from stevenfurlongportfolio.webflow.io — add repo/demo links as they
// become available (most of these are client hardware builds without public repos).
export const projects = [
  {
    title: 'EMG Controlled Robotic Hand',
    tagline: 'A robotic hand driven by real-time EMG signals captured from muscle activity.',
    description:
      'Built a robotic hand controlled by electromyography (EMG) signals captured from muscle activity, combining embedded firmware with real-time bioelectrical signal processing.',
    tags: ['Embedded Systems', 'Signal Processing', 'Bioelectrical Sensing', 'Hardware'],
    placeholder: false,
    repo: null,
    demo: null,
  },
  {
    title: 'Bus Simulation Side Panel — City of Seattle',
    tagline: 'A custom transit driver-training panel built to spec for a municipal client.',
    description:
      'Designed and built a custom transit driver training panel to exact specifications for a municipal client, bridging hardware design with simulation software integration.',
    tags: ['Hardware Design', 'Circuit Engineering', 'Simulation Integration'],
    placeholder: false,
    repo: null,
    demo: null,
  },
  {
    title: 'Wireless Hot-Swap Push Button',
    tagline: 'A hot-swappable PC peripheral button with 2.4GHz wireless and wireless charging.',
    description:
      'Designed a single hot-swappable button featuring 2.4GHz wireless connectivity and wireless charging, solving a niche flexibility problem for PC peripheral setups.',
    tags: ['Circuit Design', 'Firmware', 'Wireless', 'Product Design'],
    placeholder: false,
    repo: null,
    demo: null,
  },
  {
    title: 'EMU Flight Display — Indian Flight School',
    tagline: 'A Raspberry Pi-powered instrument display for professional pilot training.',
    description:
      'Built a Raspberry Pi-powered display replicating aircraft instrumentation for a professional flight school client, including remote international deployment.',
    tags: ['Raspberry Pi', 'Simulation', 'Aviation Systems'],
    placeholder: false,
    repo: null,
    demo: null,
  },
]
