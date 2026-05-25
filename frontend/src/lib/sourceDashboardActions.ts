export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "proposals",
    "label": "Proposals",
    "description": "Proposals actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/proposals",
    "sourceProjects": [
      "AIFreelancerBusinessManager",
      "agencyServices",
      "noCodeAIAgency",
      "AiBusinessAutomation",
      "AiMeetingAgent"
    ],
    "examples": [
      "Open Proposals",
      "Review Sales",
      "Run Proposals AI check"
    ],
    "count": 5
  },
  {
    "id": "clients",
    "label": "Clients",
    "description": "Clients actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/clients",
    "sourceProjects": [
      "agencyServices",
      "noCodeAIAgency",
      "AiBusinessAutomation",
      "AiMeetingAgent",
      "AiResumeJobApplication"
    ],
    "examples": [
      "Open Clients",
      "Review Client Operations",
      "Run Clients AI check"
    ],
    "count": 5
  },
  {
    "id": "projects",
    "label": "Projects",
    "description": "Projects actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/projects",
    "sourceProjects": [
      "noCodeAIAgency",
      "AiBusinessAutomation",
      "AiMeetingAgent",
      "AiResumeJobApplication",
      "aIDocumentationAssistant"
    ],
    "examples": [
      "Open Projects",
      "Review Delivery",
      "Run Projects AI check"
    ],
    "count": 5
  },
  {
    "id": "retainers",
    "label": "Retainers",
    "description": "Retainers actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/retainers",
    "sourceProjects": [
      "AiBusinessAutomation",
      "AiMeetingAgent",
      "AiResumeJobApplication",
      "aIDocumentationAssistant",
      "AiFinancialReportGenerator"
    ],
    "examples": [
      "Open Retainers",
      "Review Revenue",
      "Run Retainers AI check"
    ],
    "count": 5
  },
  {
    "id": "invoices",
    "label": "Invoices",
    "description": "Invoices actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/invoices",
    "sourceProjects": [
      "AiMeetingAgent",
      "AiResumeJobApplication",
      "aIDocumentationAssistant",
      "AiFinancialReportGenerator",
      "AIInvoiceProcessing"
    ],
    "examples": [
      "Open Invoices",
      "Review Finance",
      "Run Invoices AI check"
    ],
    "count": 5
  },
  {
    "id": "service-packages",
    "label": "Service Packages",
    "description": "Service Packages actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/service-packages",
    "sourceProjects": [
      "AiResumeJobApplication",
      "aIDocumentationAssistant",
      "AiFinancialReportGenerator",
      "AIInvoiceProcessing",
      "AISlideDeckGenerator"
    ],
    "examples": [
      "Open Service Packages",
      "Review Sales",
      "Run Service Packages AI check"
    ],
    "count": 5
  },
  {
    "id": "delivery-checklists",
    "label": "Delivery Checklists",
    "description": "Delivery Checklists actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/delivery-checklists",
    "sourceProjects": [
      "aIDocumentationAssistant",
      "AiFinancialReportGenerator",
      "AIInvoiceProcessing",
      "AISlideDeckGenerator",
      "AIFreelancerBusinessManager"
    ],
    "examples": [
      "Open Delivery Checklists",
      "Review Delivery",
      "Run Delivery Checklists AI check"
    ],
    "count": 5
  },
  {
    "id": "testimonials",
    "label": "Testimonials",
    "description": "Testimonials actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/testimonials",
    "sourceProjects": [
      "AiFinancialReportGenerator",
      "AIInvoiceProcessing",
      "AISlideDeckGenerator",
      "AIFreelancerBusinessManager",
      "agencyServices"
    ],
    "examples": [
      "Open Testimonials",
      "Review Growth",
      "Run Testimonials AI check"
    ],
    "count": 5
  },
  {
    "id": "contracts",
    "label": "Contracts",
    "description": "Contracts actions optimized from donor dashboards and exposed as one AI Freelancer Agency Operations action group.",
    "href": "/contracts",
    "sourceProjects": [
      "AIInvoiceProcessing",
      "AISlideDeckGenerator",
      "AIFreelancerBusinessManager",
      "agencyServices",
      "noCodeAIAgency"
    ],
    "examples": [
      "Open Contracts",
      "Review Legal Ops",
      "Run Contracts AI check"
    ],
    "count": 5
  }
];
