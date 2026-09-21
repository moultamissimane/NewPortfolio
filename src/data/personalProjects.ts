export interface PersonalProject {
  id: string;
  title: string;
  kind: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  /** Add a URL and the matching link appears on the card. */
  repoUrl?: string;
  demoUrl?: string;
}

/** Projects built on my own initiative, as opposed to client or employer work. */
export const personalProjects: PersonalProject[] = [
  {
    id: 'workflow-erp',
    title: 'WorkFlow ERP',
    kind: 'Modular enterprise ERP',
    summary:
      'A full-stack ERP with a React 19 front-end on a high-performance ASP.NET Core 8 API, backed by Entity Framework Core and PostgreSQL.',
    highlights: [
      'Role-based access control with granular permissions and strict separation of duties: nobody can approve their own request. An append-only audit log is written in the same transaction as every data change.',
      'Hardened authentication: 15-minute JWTs, rotating refresh tokens with reuse detection, BCrypt hashing, single-use password-reset links and per-IP rate limiting.',
      '63 integration tests run against a real PostgreSQL database, plus Playwright end-to-end tests in GitHub Actions.',
      'Docker Compose locally and infrastructure as code on Azure with Bicep (Container Apps, PostgreSQL, Blob Storage via Managed Identity), deployed through OIDC with no stored keys.',
    ],
    technologies: ['React 19', 'TypeScript', 'ASP.NET Core 8', 'EF Core', 'PostgreSQL', 'Docker', 'Azure', 'Playwright'],
  },
  {
    id: 'salesflow-crm',
    title: 'SalesFlow CRM',
    kind: 'Sales CRM, Java and React',
    summary:
      'A complete CRM covering the whole sales cycle, with a Spring Boot 3 REST API, a React 19 + TypeScript interface and PostgreSQL.',
    highlights: [
      'Stateless authentication with JWT access tokens and rotating hashed refresh tokens in httpOnly cookies. Admin, Manager and Agent roles are enforced with Spring Security and @PreAuthorize.',
      'Sales pipeline modelled in PostgreSQL with Flyway migrations, partial and GIN indexes, and optimised SQL aggregations for revenue, conversion rate and quotas. Includes server-side pagination, dynamic filtering and trigram search.',
      'Drag-and-drop Kanban board with optimistic updates through TanStack Query, so the UI feels instant.',
      'Soft delete with a trash bin, automatic audit log on every mutation, async email notifications and attachments. Integration-tested with JUnit 5 and Testcontainers, with CI on GitHub Actions.',
    ],
    technologies: ['Java 17', 'Spring Boot 3', 'Spring Security', 'React 19', 'TypeScript', 'PostgreSQL', 'Flyway', 'Testcontainers'],
  },
  {
    id: 'docuintel-ai',
    title: 'DocuIntel AI',
    kind: 'RAG document intelligence',
    summary:
      'A platform that ingests PDF and DOCX documents such as contracts and invoices, and answers questions in natural language with page-level citations.',
    highlights: [
      'Page-aware chunking (400-word windows, 50-word overlap) with embeddings indexed in PostgreSQL/pgvector, and cosine-similarity search per document or across the whole library.',
      'Automated extraction of amounts, currencies, due dates, payment terms, invoice numbers and clauses through structured LLM prompts, backed by a deterministic regex fallback to stay available.',
      'FastAPI with strict Pydantic validation, SQLAlchemy and Alembic migrations. The React 19 app has a built-in document viewer, an upload flow and a real-time chat assistant.',
      'Docker Compose stack (pgvector, API, Nginx) and a GitHub Actions pipeline running pytest, static type checks and packaging.',
    ],
    technologies: ['Python 3', 'FastAPI', 'pgvector', 'Gemini API', 'SQLAlchemy', 'React 19', 'Docker Compose', 'Pytest'],
  },
];
