import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  Mail,
  MessageSquareText,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["AIFreelancerBusinessManager","agencyServices","noCodeAIAgency","AiBusinessAutomation","AiMeetingAgent","AiResumeJobApplication","aIDocumentationAssistant","AiFinancialReportGenerator","AIInvoiceProcessing","AISlideDeckGenerator"];

const features = [
  {
    slug: "proposals",
    title: "Proposals",
    href: "/proposals",
    category: "Sales",
    icon: Bot,
    summary: "Proposals combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Proposals queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Proposals", value: "18", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "clients",
    title: "Clients",
    href: "/clients",
    category: "Client Operations",
    icon: Workflow,
    summary: "Clients combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Clients queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Clients", value: "27", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "projects",
    title: "Projects",
    href: "/projects",
    category: "Delivery",
    icon: Users,
    summary: "Projects combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Projects queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Projects", value: "36", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "retainers",
    title: "Retainers",
    href: "/retainers",
    category: "Revenue",
    icon: CalendarCheck,
    summary: "Retainers combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Retainers queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Retainers", value: "45", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "invoices",
    title: "Invoices",
    href: "/invoices",
    category: "Finance",
    icon: Mail,
    summary: "Invoices combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Invoices queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Invoices", value: "54", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "service-packages",
    title: "Service Packages",
    href: "/service-packages",
    category: "Sales",
    icon: MessageSquareText,
    summary: "Service Packages combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Service Packages queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Service Packages", value: "63", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "delivery-checklists",
    title: "Delivery Checklists",
    href: "/delivery-checklists",
    category: "Delivery",
    icon: BarChart3,
    summary: "Delivery Checklists combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Delivery Checklists queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Delivery Checklists", value: "72", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "testimonials",
    title: "Testimonials",
    href: "/testimonials",
    category: "Growth",
    icon: ClipboardList,
    summary: "Testimonials combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Testimonials queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Testimonials", value: "81", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "contracts",
    title: "Contracts",
    href: "/contracts",
    category: "Legal Ops",
    icon: FileText,
    summary: "Contracts combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Contracts queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Contracts", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "pipeline",
    title: "Pipeline",
    href: "/pipeline",
    category: "Sales",
    icon: PackageCheck,
    summary: "Pipeline combines donor project behavior into the AI Freelancer Agency Operations operating surface with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Pipeline queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Pipeline", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "AI Freelancer Agency Operations documents, packets, evidence, uploads, and exports.",
    bullets: ["Documents","Uploads","Exports"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "AI Freelancer Agency Operations alerts, reminders, exceptions, and approvals.",
    bullets: ["Alerts","Reminders","Exceptions"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "AI Freelancer Agency Operations source-system connector health and sync status.",
    bullets: ["Connectors","Sync","Warnings"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "AI Freelancer Agency Operations users, roles, teams, permissions, and ownership settings.",
    bullets: ["Users","Roles","Teams"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "AI Freelancer Agency Operations assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Targeted AI Freelancer Agency Operations AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  {
    "name": "Sales",
    "features": [
      "Proposals",
      "Service Packages",
      "Pipeline"
    ]
  },
  {
    "name": "Client Operations",
    "features": [
      "Clients"
    ]
  },
  {
    "name": "Delivery",
    "features": [
      "Projects",
      "Delivery Checklists"
    ]
  },
  {
    "name": "Revenue",
    "features": [
      "Retainers"
    ]
  },
  {
    "name": "Finance",
    "features": [
      "Invoices"
    ]
  },
  {
    "name": "Growth",
    "features": [
      "Testimonials"
    ]
  },
  {
    "name": "Legal Ops",
    "features": [
      "Contracts"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is normalized from source applications into one merged suite workflow.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners.length ? suiteSourceOwners : ["AI Freelancer Agency Operations"],
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
