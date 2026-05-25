export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "AIFreelancerBusinessManager",
    "ownership": "AIFreelancerBusinessManager contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Proposals",
      "Clients",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "agencyServices",
    "ownership": "agencyServices contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Clients",
      "Projects",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "noCodeAIAgency",
    "ownership": "noCodeAIAgency contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Projects",
      "Retainers",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiBusinessAutomation",
    "ownership": "AiBusinessAutomation contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Retainers",
      "Invoices",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiMeetingAgent",
    "ownership": "AiMeetingAgent contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Invoices",
      "Service Packages",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiResumeJobApplication",
    "ownership": "AiResumeJobApplication contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Service Packages",
      "Delivery Checklists",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "aIDocumentationAssistant",
    "ownership": "aIDocumentationAssistant contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Delivery Checklists",
      "Testimonials",
      "AI tools",
      "Source tables"
    ]
  },
  {
    "name": "AiFinancialReportGenerator",
    "ownership": "AiFinancialReportGenerator contributes routes, workflows, data tables, AI prompts, and operational patterns to AI Freelancer Agency Operations.",
    "coverage": [
      "Testimonials",
      "Contracts",
      "AI tools",
      "Source tables"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Source Projects', value: '10', note: 'Mapped donors' },
  { label: 'Feature Groups', value: '16', note: 'Unified navigation' },
  { label: 'AI Tools', value: '12', note: 'Suite copilots' },
  { label: 'Open Work', value: '52', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '18', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '410', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Proposals operating view",
  "Clients operating view",
  "Projects operating view",
  "Retainers operating view",
  "Invoices operating view",
  "Service Packages operating view",
  "Delivery Checklists operating view",
  "Testimonials operating view"
];
export const workflowHighlights = [
  "Proposals workflow with records, AI assist, approvals, audit, and reporting",
  "Clients workflow with records, AI assist, approvals, audit, and reporting",
  "Projects workflow with records, AI assist, approvals, audit, and reporting",
  "Retainers workflow with records, AI assist, approvals, audit, and reporting",
  "Invoices workflow with records, AI assist, approvals, audit, and reporting",
  "Service Packages workflow with records, AI assist, approvals, audit, and reporting"
];
