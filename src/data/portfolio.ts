// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Web Dev',      href: '#webdev' },
  { label: 'Networking',   href: '#networking' },
  { label: 'Design',       href: '#design' },
  { label: 'Certs',        href: '#certifications' },
  { label: 'Contact',      href: '#contact' },
]

// ─── HERO METRICS ────────────────────────────────────────────────────────────
export const METRICS = [
  { num: '5',  suffix: '+', label: 'Domains' },
  { num: '10', suffix: '+', label: 'Technologies' },
  { num: '5',  suffix: '+', label: 'Projects' },
  { num: '40', suffix: '+', label: 'People Trained' },
]

// ─── TECH STACK MARQUEE ──────────────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'Python', 'Django', 'React', 'Next.js', 'TypeScript', 'JavaScript',
  'TCP/IP', 'Cisco', 'AWS', 'VLANs', 'Docker', 'PostgreSQL',
  'AutoCAD', '3D Viz', 'Git', 'Linux', 'REST API', 'Node.js',
]

// ─── ABOUT SKILLS ────────────────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    title: 'Web & Software',
    color: 'cyan',
    tags: ['Python', 'Django', 'JavaScript', 'React', 'HTML/CSS', 'SQL', 'REST APIs'],
  },
  {
    title: 'Networking & Cloud',
    color: 'blue',
    tags: ['TCP/IP', 'VLANs', 'NAT', 'Cisco', 'AWS', 'DNS/DHCP', 'Firewalls'],
  },
  {
    title: 'Tools & Platforms',
    color: 'green',
    tags: ['Git', 'Linux', 'Packet Tracer', 'VS Code', 'Docker', 'AI/ML'],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'donation-system',
    badge: 'Featured · Final Year',
    title: 'Donation & Volunteer Management System',
    description:
      'Full-stack Django application streamlining donations, volunteer coordination, and organizational management with role-based access control and real-time dashboards.',
    stack: ['Django', 'Python', 'JavaScript', 'HTML/CSS', 'SQL', 'RBAC'],
    color: 'blue',
    featured: true,
    metrics: [
      { label: 'Users Supported', value: '200+' },
      { label: 'Modules', value: '6' },
      { label: 'Response Time', value: '<200ms' },
    ],
    features: [
      'Role-Based Access Control (Admin / Volunteer / Donor)',
      'Real-Time Donation Tracking & Analytics Dashboard',
      'Volunteer Registration & Task Assignment',
      'Secure Authentication with Django Auth',
      'Database-Driven Report Generation',
      'Fully Responsive UI',
    ],
  },
  {
    id: 'interior-3floor',
    badge: 'Design · Architecture',
    title: 'Interior Design — 3-Floor Residential',
    description:
      'Contemporary luxury residential project across three floors. Full 3D visualization workflow, material palette curation, and smart space planning.',
    stack: ['3D Visualization', 'AutoCAD', 'Space Planning', 'Lighting Design'],
    color: 'green',
    featured: false,
    metrics: [
      { label: 'Floors', value: '3' },
      { label: 'Rooms', value: '12+' },
      { label: 'Style', value: 'Contemporary' },
    ],
    features: [
      'Full floor-by-floor 3D visualization',
      'Material & color palette curation',
      'Smart space optimization',
      'Furniture staging & lighting design',
    ],
  },
  {
    id: 'enterprise-network',
    badge: 'Infrastructure · WAN',
    title: 'Enterprise Network Architecture',
    description:
      'Multi-site WAN simulation connecting New York and Tokyo through VLAN segmentation, NAT policies, and packet-level traffic analysis.',
    stack: ['Cisco Packet Tracer', 'VLANs', 'NAT', 'Firewalls', 'TCP/IP'],
    color: 'amber',
    featured: false,
    metrics: [
      { label: 'Sites', value: '2' },
      { label: 'VLANs', value: '8' },
      { label: 'Protocols', value: '6+' },
    ],
    features: [
      'Multi-site WAN topology (NY ↔ Tokyo)',
      'Layer 2/3 switching with VLAN segmentation',
      'NAT & Firewall rule configuration',
      'Packet-level analysis: ICMP, ARP, DNS',
    ],
  },
]

// ─── NETWORKING SKILLS ────────────────────────────────────────────────────────
export const NET_SKILLS = [
  'TCP/IP', 'DHCP', 'DNS', 'NAT', 'VLAN Configuration',
  'Routing & Switching', 'IP Addressing & Subnetting',
  'LAN/WAN Design', 'OSI Model', 'ARP & ICMP Analysis',
  'Cisco Packet Tracer', 'Enterprise Network Architecture',
  'Firewall Simulation', 'Hierarchical Network Design', 'WAN Protocols',
]

// ─── NET TOPOLOGY NODES ───────────────────────────────────────────────────────
export const TOPOLOGY_NODES = {
  tokyo: [
    { id: 'tk-sw',  label: 'L2 Switch',   x: 80,  y: 60,  color: '#8080a0' },
    { id: 'tk-vl',  label: 'L3/VLAN',     x: 80,  y: 100, color: '#8080a0' },
    { id: 'tk-fw',  label: 'Firewall',    x: 80,  y: 140, color: '#ffaa00' },
    { id: 'tk-rt',  label: 'Router',      x: 80,  y: 180, color: '#4f7fff' },
  ],
  nyc: [
    { id: 'ny-sw',  label: 'L2 Switch',   x: 560, y: 60,  color: '#8080a0' },
    { id: 'ny-vl',  label: 'L3/VLAN',     x: 560, y: 100, color: '#8080a0' },
    { id: 'ny-fw',  label: 'Firewall',    x: 560, y: 140, color: '#ffaa00' },
    { id: 'ny-rt',  label: 'Router',      x: 560, y: 180, color: '#4f7fff' },
  ],
}

// ─── INTERIOR DESIGN ─────────────────────────────────────────────────────────
export const INTERIOR_FLOORS = [
  {
    floor: 1,
    label: 'Ground Floor',
    rooms: ['Living Room', 'Kitchen', 'Dining Area', 'Guest Bathroom', 'Utility'],
    description: 'Open-plan social living with integrated kitchen and dining under natural light.',
    palette: ['#C8A882', '#F5F0E8', '#2C2C2C', '#8B7355'],
  },
  {
    floor: 2,
    label: 'First Floor',
    rooms: ['Master Bedroom', 'En-suite', 'Walk-in Wardrobe', 'Study'],
    description: 'Private sanctuary with luxury en-suite and integrated workspace.',
    palette: ['#E8DDD0', '#4A4A4A', '#B8A090', '#D4C4B0'],
  },
  {
    floor: 3,
    label: 'Top Floor',
    rooms: ['Guest Bedroom', 'Family Lounge', 'Terrace', 'Storage'],
    description: 'Light-filled retreat with rooftop terrace and panoramic views.',
    palette: ['#F0EDE8', '#6B8B6B', '#C0B8A8', '#E8E0D0'],
  },
]

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  { name: 'Cloud Practitioner Essentials', issuer: 'Amazon Web Services', year: '2024', status: 'done',     color: 'amber' },
  { name: 'Networking Basics',             issuer: 'Cisco',               year: '2024', status: 'done',     color: 'blue' },
  { name: 'Cisco Packet Tracer',           issuer: 'Cisco',               year: '2024', status: 'done',     color: 'blue' },
  { name: 'Linux Unhatched',               issuer: 'NDG / Cisco',         year: '2024', status: 'done',     color: 'green' },
  { name: 'Django Web Development',        issuer: 'Various',             year: '2024', status: 'done',     color: 'green' },
  { name: 'Microsoft Excel',               issuer: 'Simplilearn',         year: '2024', status: 'done',     color: 'green' },
  { name: 'Solutions Architect (SAA-C03)', issuer: 'Amazon Web Services', year: '2024–25', status: 'prog',  color: 'amber' },
  { name: 'CCNA',                          issuer: 'Cisco',               year: '2024–25', status: 'prog',  color: 'blue' },
  { name: 'Advanced Django & React',       issuer: 'Target 2025',         year: '2025', status: 'upcoming', color: 'violet' },
  { name: 'Cloud Engineering',             issuer: 'Target 2025',         year: '2025', status: 'upcoming', color: 'violet' },
  { name: 'REST API Specialization',       issuer: 'Target 2025',         year: '2025', status: 'upcoming', color: 'cyan' },
]

// ─── VOLUNTEER TIMELINE ───────────────────────────────────────────────────────
export const VOLUNTEER_ITEMS = [
  {
    year: '2023',
    title: 'Cyber Security Awareness Trainer',
    org: 'Technology Education Initiative · Kathmandu',
    description: 'Delivered hands-on cybersecurity training covering digital hygiene, phishing prevention, and safe online practices to local community members.',
    tag: '40+ individuals trained',
    color: 'cyan',
    icon: 'shield',
  },
  {
    year: '2023',
    title: 'Breast Cancer Awareness Volunteer',
    org: 'Healthcare Community Initiative',
    description: 'Participated in awareness campaigns focused on early detection and community education across local neighbourhoods.',
    tag: 'Healthcare',
    color: 'rose',
    icon: 'heart',
  },
  {
    year: '2022–Present',
    title: 'Educational Tutoring Volunteer',
    org: 'Academic Support Programme',
    description: 'Free tutoring in mathematics, computing, and science to students from underserved backgrounds.',
    tag: 'Education · Mentorship',
    color: 'green',
    icon: 'school',
  },
  {
    year: 'Ongoing',
    title: 'Public Speaking & Leadership Development',
    org: 'Community Leadership Programmes',
    description: 'Active participation in workshops and leadership programmes developing communication and organisational skills.',
    tag: 'Leadership',
    color: 'amber',
    icon: 'microphone',
  },
]

// ─── SKILLS MATRIX ────────────────────────────────────────────────────────────
export const SKILLS_MATRIX = [
  {
    category: 'Frontend',
    color: 'cyan',
    items: [
      { name: 'React / Next.js', level: 80 },
      { name: 'JavaScript / TypeScript', level: 78 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    category: 'Backend',
    color: 'blue',
    items: [
      { name: 'Python / Django', level: 85 },
      { name: 'REST API Design', level: 80 },
      { name: 'SQL / PostgreSQL', level: 75 },
      { name: 'Authentication & Auth', level: 78 },
    ],
  },
  {
    category: 'Networking',
    color: 'amber',
    items: [
      { name: 'TCP/IP & Subnetting', level: 82 },
      { name: 'Cisco / Packet Tracer', level: 80 },
      { name: 'VLANs / Routing', level: 78 },
      { name: 'Firewalls / Security', level: 72 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'violet',
    items: [
      { name: 'AWS Fundamentals', level: 70 },
      { name: 'Linux CLI', level: 75 },
      { name: 'Git / GitHub', level: 82 },
      { name: 'Docker Basics', level: 60 },
    ],
  },
]

// ─── ACADEMIC MODULES ─────────────────────────────────────────────────────────
export const ACADEMIC_MODULES = [
  {
    year: 'Year 1',
    modules: [
      'Introductory Programming and Problem Solving',
      'Fundamentals of Computing',
      'Internet Software Architecture and Databases',
      'Introduction to Object-Oriented Programming',
      'Interactive 3D Applications',
      'Computational Mathematics',
    ],
  },
  {
    year: 'Year 2',
    modules: [
      'Object-Oriented Design and Programming',
      'Full Stack Development',
      'Concepts and Technologies of AI',
      'Cloud Systems',
      'Collaborative Development',
      'Algorithms and Concurrency',
    ],
  },
  {
    year: 'Year 3',
    modules: [
      'Advanced Full Stack Development',
      'Intelligent Systems',
      'Big Data',
      'Artificial Intelligence & Machine Learning',
      'Project and Professionalism',
    ],
  },
]
