export interface NavItem { label: string; href: string }
export interface Feature { icon: string; title: string; desc: string }
export interface Step { num: number; label: string; desc: string; icon: string }
export interface FeatureTab { id: string; label: string; desc: string }
export interface CertTier { title: string; badge: string; color: string; items: string[]; featured?: boolean }
export interface FeaturedItem { label: string }
export interface BlogPost { id: number; category: string; title: string; excerpt: string; date: string; readTime: string }
export interface NGOCard { id: number; name: string; category: string; location: string; sdg: string; verified: boolean }
export interface Campaign { id: number; title: string; ngo: string; goal: number; raised: number; category: string; daysLeft: number }

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'NGOs', href: '/ngos' },
  { label: 'Campaigns', href: '/campaigns' },
  { label: 'Blog', href: '/blog' },
];

export const trustFeatures: Feature[] = [
  { icon: '🎯', title: 'Reach Donors Globally', desc: 'List your NGO and access a broad network of donors who want to support causes like yours.' },
  { icon: '🌐', title: 'Align with UN SDG Goals', desc: 'Impact-driven filtering aligns you with the right Sustainable Development Goals (SDGs).' },
  { icon: '🔍', title: 'Transparency Builds Donor Trust', desc: "Today's donors expect accountability and you are powered by Doright to show it." },
  { icon: '✅', title: 'Compliance & NGO Verification Support', desc: 'Doright handsholds NGOs through rigorous documentation and compliance standards.' },
];

export const steps: Step[] = [
  { num: 1, label: 'Register Your NGO', desc: 'Simply complete your registration online today.', icon: '📍' },
  { num: 2, label: 'Upload Documents', desc: 'Submit all required verification documents.', icon: '📄' },
  { num: 3, label: 'Complete Video KYC', desc: 'Complete the verification through our video technology.', icon: '🎥' },
  { num: 4, label: 'Get Approved', desc: 'Get listed and start Membership.', icon: '🚩' },
];

export const featureTabs: FeatureTab[] = [
  { id: 'health', label: 'Health Fundraising Page', desc: 'Create dedicated fundraising pages for health-related causes with real-time donor engagement and impact metrics.' },
  { id: 'donation', label: 'Direct Donation Pages', desc: 'Create beautiful pages to attract donors and manage multiple fundraising campaigns from one platform.' },
  { id: 'analytics', label: 'Analytics & Reporting', desc: 'Get deep insights into donor behaviour, campaign performance and fundraising trends with visual dashboards.' },
  { id: 'social', label: 'Social Media Integration', desc: 'Share campaigns directly to social platforms and watch donations grow through viral community engagement.' },
  { id: 'community', label: 'Community & Outreach', desc: 'Build a loyal donor community with newsletters, updates and direct communication tools built right in.' },
];

export const certTiers: CertTier[] = [
  {
    title: 'Basic Verification', badge: '✓', color: '#6b7280',
    items: ['Application Compliance Check', 'Document Compliance Check', 'Basic Transparency Status', 'Basic Transparency Visible'],
  },
  {
    title: 'Trusted Partner', badge: '⭐', color: '#ffaf5f', featured: true,
    items: ['Advanced Preliminary', 'Advanced Compliance Check', 'Location Verification', 'Fieldwork Verification', 'Engagement With donor app', 'Trusted Partner badge', 'Community access'],
  },
  {
    title: 'Impact Certified', badge: '🏆', color: '#7c3aed',
    items: ['Top tier in all Tiers', 'Quarterly Compliance Reviews', 'Yearly Compliance Reviews', 'External Audit for FCRA', 'Compliance', 'Engagement With donor app', 'Impact Certified badge', 'Community access'],
  },
];

export const featuredItems: FeaturedItem[] = [
  { label: 'Storytelling & Campaign Content' },
  { label: 'Outreach & Donor Communication' },
  { label: 'Social Media Visibility' },
];

export const blogPosts: BlogPost[] = [
  { id: 1, category: 'Fundraising', title: 'How to Create a Compelling Fundraising Page That Converts', excerpt: 'Learn the key elements of successful fundraising pages and how transparent storytelling drives donor trust.', date: 'May 15, 2025', readTime: '5 min read' },
  { id: 2, category: 'Compliance', title: 'NGO Compliance in India: A Complete Guide for 2025', excerpt: 'FCRA, 80G, 12A — understanding compliance requirements is crucial for every NGO operating in India.', date: 'May 8, 2025', readTime: '8 min read' },
  { id: 3, category: 'SDG Goals', title: 'Aligning Your NGO Mission with UN Sustainable Development Goals', excerpt: 'Discover how connecting your work to SDGs can unlock new donors, partnerships and global visibility.', date: 'Apr 29, 2025', readTime: '6 min read' },
  { id: 4, category: 'Donor Relations', title: 'Building Long-Term Donor Relationships Through Transparency', excerpt: 'Regular impact updates and honest reporting are the cornerstones of donor retention in the modern era.', date: 'Apr 20, 2025', readTime: '4 min read' },
  { id: 5, category: 'Technology', title: 'Video KYC: The Future of NGO Verification and Trust', excerpt: 'How technology is transforming the way NGOs build credibility with donors and regulatory bodies.', date: 'Apr 10, 2025', readTime: '7 min read' },
  { id: 6, category: 'Impact', title: 'From Grassroots to Global: Scaling Your Impact with Digital Tools', excerpt: 'A practical guide to using digital platforms to expand your reach without losing your local authenticity.', date: 'Apr 1, 2025', readTime: '6 min read' },
];

export const ngoCards: NGOCard[] = [
  { id: 1, name: 'Vidya Setu Foundation', category: 'Education', location: 'Delhi, India', sdg: 'SDG 4', verified: true },
  { id: 2, name: 'GreenRoots Society', category: 'Environment', location: 'Bangalore, India', sdg: 'SDG 13', verified: true },
  { id: 3, name: 'Aarogya Health Trust', category: 'Healthcare', location: 'Mumbai, India', sdg: 'SDG 3', verified: false },
  { id: 4, name: 'SheRises Women Collective', category: 'Gender Equality', location: 'Chennai, India', sdg: 'SDG 5', verified: true },
  { id: 5, name: 'Clean Water Initiative', category: 'Water & Sanitation', location: 'Pune, India', sdg: 'SDG 6', verified: true },
  { id: 6, name: 'Hunger Free India', category: 'Food Security', location: 'Hyderabad, India', sdg: 'SDG 2', verified: false },
];

export const campaigns: Campaign[] = [
  { id: 1, title: 'Mid-Day Meal Program for 500 Children', ngo: 'Vidya Setu Foundation', goal: 500000, raised: 342000, category: 'Education', daysLeft: 18 },
  { id: 2, title: 'Plant 10,000 Trees in Urban Delhi', ngo: 'GreenRoots Society', goal: 200000, raised: 187000, category: 'Environment', daysLeft: 7 },
  { id: 3, title: 'Free Medical Camps for Rural Villages', ngo: 'Aarogya Health Trust', goal: 800000, raised: 412000, category: 'Healthcare', daysLeft: 30 },
  { id: 4, title: 'Skill Training for Women Entrepreneurs', ngo: 'SheRises Women Collective', goal: 350000, raised: 96000, category: 'Gender Equality', daysLeft: 45 },
  { id: 5, title: 'Clean Water Wells for 20 Villages', ngo: 'Clean Water Initiative', goal: 1200000, raised: 890000, category: 'Water', daysLeft: 12 },
  { id: 6, title: 'Zero Hunger Kitchen Network', ngo: 'Hunger Free India', goal: 600000, raised: 221000, category: 'Food', daysLeft: 25 },
];
