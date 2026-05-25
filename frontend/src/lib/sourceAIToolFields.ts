export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "proposals-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Proposals workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Proposals request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "clients-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Clients workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Clients request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "projects-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Projects workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Projects request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "retainers-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Retainers workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Retainers request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "invoices-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Invoices workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Invoices request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "service-packages-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Service Packages workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Service Packages request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "delivery-checklists-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Delivery Checklists workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Delivery Checklists request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "testimonials-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Testimonials workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Testimonials request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "contracts-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Contracts workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Contracts request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ],
  "pipeline-source-workflow": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Pipeline workflow for pilot usage.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "customer_context",
      "label": "Customer Context",
      "type": "textarea",
      "defaultValue": "Sample Pipeline request from a business client.",
      "placeholder": "Paste customer, lead, document, or workflow context",
      "options": [],
      "required": true,
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "select",
      "defaultValue": "Professional",
      "placeholder": "Select tone",
      "options": [
        "Professional",
        "Concise",
        "Consultative"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output",
      "options": [
        "Action plan",
        "Executive summary",
        "Email draft",
        "JSON checklist"
      ],
      "source": "AI Freelancer Agency Operations Suite"
    }
  ]
};
