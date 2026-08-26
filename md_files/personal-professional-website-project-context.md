# Personal / Professional Website — Project Context

## 1. Project Overview

This project is a personal and professional website intended to present my background, experience, projects, technical skills, and other relevant professional information.

The primary purpose is to create a polished personal website that can serve as a professional portfolio while also being a **learning project**.

A major goal is to learn the frontend framework and development workflow by building the application myself with an AI coding agent acting as a **pair-programming partner**, rather than having the agent independently implement the project.

The website should therefore prioritize:

1. A professional, polished result.
2. Learning and understanding the technologies used.
3. Clean, maintainable code.
4. A development process that can be explained in an interview.
5. Incremental development rather than building the entire application at once.

---

## 2. Current Project Scope

The initial website will primarily contain:

- A professional bio / introduction
- Projects
- Relevant professional information
- Technical skills
- Resume / education / experience information
- Contact and professional links
- Responsive design for desktop and mobile

The exact pages and features will be finalized during the planning phase.

The first version **will not have a backend**.

There is currently no requirement for:

- A database
- User authentication
- An administrative dashboard
- Server-side APIs
- Dynamic content management
- User accounts

The architecture should remain clean enough that a backend can be introduced later if a legitimate requirement emerges.

---

## 3. Technology Direction

### Frontend

The current frontend technology decision is:

- **React**
- **TypeScript**

React and TypeScript are the primary technologies I want to learn through this project.

### Supporting Frontend Tools

The initial supporting stack is expected to include:

- **Vite** — development server and build tooling
- **React Router** — routing if multiple pages/routes are appropriate
- **Tailwind CSS** — styling
- **ESLint** — linting
- **Prettier** — code formatting
- **Git / GitHub** — version control

These choices are not completely immutable. If a tool creates unnecessary complexity or there is a better option for the project's goals, explain the tradeoff before introducing it.

### Backend

**No backend will be implemented in the initial version.**

A possible future backend direction is:

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma

However, this is explicitly a **future possibility**, not part of the initial implementation.

Do not introduce backend infrastructure unless we explicitly decide that the project requires it.

---

## 4. Development Philosophy

This project is intended to teach me how to build a modern React/TypeScript application.

The AI agent should behave as a **pair programmer and mentor**, not as an autonomous developer.

### Preferred workflow

The general workflow should be:

1. Explain the concept.
2. Explain the design/implementation approach.
3. Break the task into manageable pieces.
4. Let me implement the code.
5. Review my implementation.
6. Help diagnose errors.
7. Suggest improvements.
8. Explain why the improvements matter.
9. Refactor only when appropriate.

The agent should avoid simply generating large amounts of finished code unless I specifically ask for it.

### Learning priority

When there is a choice between:

- the fastest way to implement something, and
- the approach that helps me understand the technology,

prefer the learning-oriented approach.

I should understand the code I ultimately commit to the project.

---

## 5. AI Pair-Programming Rules

The AI agent should follow these guidelines.

### Do

- Explain React concepts when they are introduced.
- Explain TypeScript concepts when they are introduced.
- Ask me to implement portions of functionality myself.
- Review code that I write.
- Point out bugs and explain their causes.
- Explain architectural decisions.
- Recommend industry-standard practices.
- Explain tradeoffs between approaches.
- Help me debug errors rather than immediately replacing the code.
- Encourage incremental commits.
- Keep implementation tasks small enough to understand.
- Identify opportunities to improve accessibility, maintainability, performance, and readability.

### Avoid

- Building the entire application autonomously.
- Generating large files without explanation.
- Introducing libraries simply because they are popular.
- Adding a backend before it is needed.
- Overengineering simple functionality.
- Abstracting code prematurely.
- Hiding important implementation details behind excessive helper functions.
- Making architectural decisions without explaining the reasoning.
- Replacing working code merely for stylistic preferences.

If I ask for code, provide enough code to help me understand and continue, but favor guided implementation when practical.

---

## 6. Code Quality Goals

The codebase should aim to demonstrate professional development practices.

Important qualities include:

- Clear component responsibilities
- Meaningful naming
- Strong TypeScript typing
- Reusable components where appropriate
- Minimal unnecessary abstraction
- Consistent formatting
- Linting
- Responsive design
- Accessibility
- Sensible file organization
- Clear Git history
- Maintainable CSS
- Avoidance of duplicated logic
- Reasonable error handling

The project should be understandable to another developer reviewing the repository.

---

## 7. Architecture Principles

The initial architecture should remain relatively simple.

Conceptually:

    React + TypeScript
            |
            +-- Pages
            |
            +-- Components
            |
            +-- Project / Bio Data
            |
            +-- Assets
            |
            +-- Styling

Content that does not require a backend can initially be stored locally in appropriately structured TypeScript data or other simple static content.

For example, project information may eventually be represented as typed data rather than hardcoded repeatedly throughout components.

Do not create an API or database solely for the sake of having one.

---

## 8. Expected Development Stages

The project will be developed incrementally.

### Stage 1 — Project Setup

Learn and establish:

- Vite
- React
- TypeScript
- Git
- Basic project structure
- ESLint
- Prettier

### Stage 2 — React Fundamentals

Learn and apply:

- Components
- Props
- TypeScript interfaces/types
- Rendering lists
- Conditional rendering
- State
- Event handling
- Hooks
- Component composition

### Stage 3 — Website Structure

Build the core website structure:

- Navigation
- Home / landing page
- Bio/about section
- Projects
- Resume/professional information
- Contact/professional links

### Stage 4 — Styling and UX

Implement:

- Tailwind CSS
- Responsive layouts
- Mobile navigation
- Consistent typography
- Project cards
- Visual hierarchy
- Hover/focus states
- Accessibility considerations
- Appropriate animations/transitions

### Stage 5 — Professional Polish

Evaluate:

- Accessibility
- Performance
- SEO metadata
- Open Graph/social previews
- Favicon/site metadata
- Loading/error states where relevant
- Mobile and desktop layouts
- Browser compatibility

### Stage 6 — Deployment

Determine an appropriate deployment platform and establish:

- Production build
- Deployment process
- Git-based workflow
- Custom domain, if desired
- Final production testing

The exact timeline and milestones will be established separately.

---

## 9. Future Expansion

The project may eventually grow beyond a static frontend.

Potential future functionality includes:

- Backend API
- Database
- Admin interface
- Dynamic project management
- Blog / technical writing
- Contact form with server-side processing
- Analytics
- Authentication
- Additional interactive features

Potential future backend stack:

    React + TypeScript
            |
          REST API
            |
    Node.js + NestJS
            |
          Prisma
            |
       PostgreSQL

These features should only be introduced when they provide a clear benefit.

---

## 10. Professional Content

The website should ultimately communicate a professional software/engineering profile.

Relevant information may include:

- Education
- Professional experience
- Embedded systems experience
- Software development experience
- Cloud experience
- Technical projects
- Programming languages
- Tools and technologies
- GitHub
- LinkedIn
- Resume

Content should emphasize **impact, technical decisions, and outcomes** rather than simply listing responsibilities.

Projects should ideally communicate:

1. What the project does.
2. Why it was built.
3. Technologies used.
4. Interesting technical challenges.
5. What I personally implemented.
6. Results or lessons learned.
7. Links to the source code or deployed project when appropriate.

---

## 11. Repository Expectations

The repository should eventually contain documentation explaining:

- What the project is
- Technologies used
- How to run it locally
- How the project is structured
- How to build it for production
- Deployment information
- Major architectural decisions

The README should be updated as the project develops rather than written only at the end.

---

## 12. Git Workflow

Use Git throughout the project.

Prefer small, meaningful commits such as:

- `initialize react project`
- `add site navigation`
- `create projects data model`
- `add project cards`
- `add responsive mobile navigation`

Avoid one massive commit containing the entire application.

The Git history should reflect the incremental learning and development process.

---

## 13. Decision-Making Rules

When evaluating a new technology, library, or architectural pattern, consider:

1. Is it necessary?
2. Does it help me learn something valuable?
3. Is it reasonably industry-relevant?
4. Does it increase complexity?
5. Can I explain why it was chosen?
6. Will it remain useful if the project grows?

Avoid technology for technology's sake.

The project should be sophisticated enough to demonstrate engineering ability but simple enough that I understand the entire application.

---

## 14. Current Decisions

As of the beginning of the project:

| Decision | Current Choice |
|---|---|
| Frontend framework | React |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Backend | None initially |
| Database | None initially |
| API | None initially |
| Version control | Git / GitHub |
| Development approach | AI pair programming |
| Primary project goal | Learn React/TypeScript while building a professional website |

Some supporting tools may change during implementation after evaluating their necessity and learning value.

---

## 15. Current Status

The project is currently in the **planning phase**.

The next step is to define:

- Exact website pages
- Content for each page
- Navigation structure
- Visual/design direction
- Component hierarchy
- Project data structure
- Development milestones
- Learning objectives
- Testing strategy
- Deployment strategy
- Overall project timeline

Do not begin implementing the full application until the planning and milestone structure has been established.

---

## 16. Guiding Principle

> Build a professional website while learning how to build it.

The final product matters, but the primary measure of success is that I can explain the architecture, understand the React/TypeScript code, debug the application, make changes independently, and discuss the engineering decisions behind the project.
