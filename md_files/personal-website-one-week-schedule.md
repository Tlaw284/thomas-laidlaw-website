# Personal / Professional Website — One-Week Project Schedule

## Project Goal

Build and deploy a polished v1 personal/professional website while learning React and TypeScript through AI-assisted pair programming.

Use a build-first approach:

> Learn → Build → Get stuck → Investigate → Fix → Understand → Continue

The goal is to finish with a professional website that can be shared with recruiters and employers while understanding the code and architectural decisions behind it.

---

# Version 1 Scope

## Target Features

- Professional homepage or landing section
- Bio / About section
- Projects section
- Experience and/or resume information
- Technical skills
- Education, if appropriate
- Contact information
- GitHub and LinkedIn links
- Responsive navigation
- Mobile-responsive design
- Professional styling
- Basic transitions and interactions
- Basic accessibility
- SEO/site metadata
- Favicon
- Deployed production website
- Clean GitHub repository
- README documentation

## Explicitly Out of Scope

Do not add these during the one-week v1 unless the project plan intentionally changes:

- Backend
- Database
- REST API
- Authentication
- User accounts
- Admin dashboard
- CMS
- Blog
- Comments
- NestJS
- PostgreSQL
- Prisma
- Complex animations
- Three.js or 3D features
- Custom design system
- Overly complicated testing infrastructure

These can become future v2 enhancements.

---

# Time Commitment

Estimated effort:

- 3–4 focused hours per day
- Approximately 22–25 total hours

If a task takes longer than expected, prioritize understanding and core functionality over extra features.

---

# Day 1 — Project Setup and React Fundamentals

## Goal

Create the development environment and understand the basic structure of a React + TypeScript application.

## Learn

- What React does
- Components
- JSX/TSX
- Basic TypeScript in React
- Props
- Component composition
- Basic state
- Vite project structure
- npm and package management
- Basic Git workflow

## Build

Create the initial application structure:

    App
    ├── Navbar
    ├── Main content
    └── Footer

Do not focus heavily on final styling yet.

## Deliverable

By the end of Day 1:

- The React + TypeScript application runs locally
- The project is tracked with Git
- The basic application structure exists
- I understand the purpose of the major files created by Vite
- I can explain what a React component is
- I can explain how props are passed between components

**Suggested time: approximately 3 hours**

---

# Day 2 — Website Structure and Content Architecture

## Goal

Build the structural foundation of the website.

## Learn

- Component organization
- TypeScript interfaces/types
- Rendering lists with `.map()`
- Passing typed data through props
- Conditional rendering
- React state and event handling where appropriate
- React Router if multiple routes are selected

## Build

Define and implement the core sections or pages:

- Home
- About
- Projects
- Experience / Resume
- Skills
- Contact

Create an initial approach for static content, for example:

    src/
    ├── components/
    ├── pages/
    ├── data/
    │   ├── projects.ts
    │   ├── experience.ts
    │   └── skills.ts
    └── assets/

Keep the structure simple and avoid overengineering.

## Deliverable

By the end of Day 2:

- The core website structure is visible
- Major sections/pages can be navigated
- Project and professional content has a clear data structure
- At least one reusable component is driven by typed data
- The initial content architecture is understandable and maintainable

**Suggested time: approximately 3–4 hours**

---

# Day 3 — Styling and Visual Design

## Goal

Transform the structural website into a professional-looking portfolio.

## Learn

- Tailwind CSS fundamentals
- Flexbox
- CSS Grid
- Spacing and layout
- Typography
- Responsive breakpoints
- Containers
- Hover states
- Focus states

## Build

Style:

- Navigation
- Hero/introduction
- About section
- Project cards
- Experience/resume content
- Skills section
- Contact section
- Footer

Focus on:

- Clear visual hierarchy
- Consistent spacing
- Readable typography
- Professional presentation
- Reusable styling patterns

Do not add unnecessary visual effects simply to make the website more complicated.

## Deliverable

By the end of Day 3:

- The website has a coherent visual direction
- Major sections are styled
- Project cards or equivalent project displays exist
- The website looks presentable on desktop
- Styling is consistent across the application

**Suggested time: approximately 4 hours**

---

# Day 4 — Responsive Design and Interactions

## Goal

Make the website work well across screen sizes and add appropriate interactivity.

## Learn

- Responsive design concepts
- Tailwind responsive modifiers
- Layout behavior at different breakpoints
- React state for UI interactions
- Conditional rendering for interactive UI
- Accessibility considerations for navigation and controls

## Build

Implement and test:

- Mobile layout
- Tablet layout
- Desktop layout
- Responsive navigation
- Mobile menu, if appropriate
- Buttons and links
- Hover/focus states
- Basic transitions
- Appropriate interactive elements

Test at multiple viewport sizes.

Responsive design should not be treated as simply shrinking the desktop website. Consider how the layout should reorganize for smaller screens.

## Deliverable

By the end of Day 4:

- The website works on desktop and mobile
- Navigation remains usable on smaller screens
- Interactive elements work correctly
- Focus states are visible
- Layouts do not obviously break at common screen widths

**Suggested time: approximately 3–4 hours**

---

# Day 5 — Professional Content and Portfolio Polish

## Goal

Ensure the website communicates professional experience and projects effectively.

## Finalize

- Professional bio
- Introduction/summary
- Project descriptions
- Professional experience
- Technical skills
- Education, if included
- Resume
- GitHub link
- LinkedIn link
- Contact information

## Project Description Standard

When practical, each project should communicate:

1. What the project does
2. Why it was built
3. Technologies used
4. Important technical decisions or challenges
5. What I personally implemented
6. Results or lessons learned
7. Relevant source code or deployed links

Favor:

> Problem → Technical Approach → Result

over simply listing technologies or responsibilities.

## Deliverable

By the end of Day 5:

- Placeholder content is removed or minimized
- Professional information is accurate
- Projects communicate technical depth
- External links work
- The website clearly represents my professional background

**Suggested time: approximately 3 hours**

---

# Day 6 — Quality Review and Deployment

## Goal

Prepare the website for public release.

## Review

Check:

- Production build
- Console errors and warnings
- Broken links
- Mobile layout
- Desktop layout
- Basic accessibility
- Page titles
- Meta descriptions
- Favicon
- Open Graph/social metadata, if practical
- Performance opportunities
- Image optimization where needed

## Deployment

Determine and configure an appropriate hosting platform.

Learn and understand:

- Production builds
- Deployment workflow
- Git-based deployment
- Build failures and logs
- Environment variables, if the selected platform requires them

## Deliverable

By the end of Day 6:

- The website successfully builds for production
- The website is deployed
- A public URL is available
- The production site has been manually tested
- The repository is connected to the deployment workflow where appropriate

**Suggested time: approximately 3–4 hours**

---

# Day 7 — Final Review, Cleanup, and Learning Audit

## Goal

Finish the project without adding unnecessary new features.

Day 7 is primarily a review and understanding day.

## Code Review

Review:

- Unused code
- Console warnings
- Component names
- File names
- Duplicate logic
- Components that have become too large
- Unnecessary abstractions
- TypeScript types
- Accessibility issues
- Responsive issues

## Learning Audit

Be able to answer:

### React

- What is a component?
- Why are these components separated?
- What are props?
- Where is state used?
- Why is state needed there?
- How are lists rendered?
- What causes a component to re-render?
- How does component composition work here?

### TypeScript

- What types or interfaces were created?
- Why do components have typed props?
- How does TypeScript help catch errors?
- What happens if incorrect data are passed to a component?

### Styling

- Why was Flexbox or Grid chosen for each major layout?
- How do responsive breakpoints work?
- How do mobile and desktop layouts differ?
- How are consistent styles maintained?

### Architecture

- Why is certain content stored in data files?
- Why is something a component instead of static markup?
- How would the application handle significantly more projects?
- Where could a backend eventually fit?
- Why was a backend intentionally excluded from v1?

## Documentation

Update the README with:

- Project overview
- Technologies used
- How to run locally
- Basic project structure
- Available scripts
- Deployment information
- Link to the live website

## Deliverable

By the end of Day 7:

- The website is polished and deployed
- The repository is clean
- Documentation is complete
- Major code decisions are understandable
- I can explain how the application works
- I can independently make basic changes

**Suggested time: approximately 3 hours**

---

# Daily AI Pair-Programming Workflow

For each development session:

1. Identify the day's goal.
2. Break the goal into small implementation tasks.
3. Learn the relevant concept before implementing it.
4. Implement the code myself when practical.
5. Run and test the implementation.
6. Investigate errors before asking for the complete solution.
7. Ask the AI agent to explain errors and concepts.
8. Request a code review after completing a meaningful task.
9. Make a small, meaningful Git commit.
10. Record anything that needs to be revisited.

The AI agent should act as:

- Teacher
- Pair programmer
- Code reviewer
- Debugging partner

The AI agent should not act as an autonomous developer that generates the entire application without my involvement.

---

# Suggested Git Milestones

Possible commits include:

- `initialize react typescript project`
- `configure linting and formatting`
- `add initial site layout`
- `create navigation component`
- `add projects data model`
- `create reusable project cards`
- `add professional experience section`
- `implement responsive navigation`
- `add mobile responsive layouts`
- `polish portfolio content`
- `add site metadata`
- `prepare production deployment`
- `update project documentation`

Commit messages should accurately describe small, meaningful changes.

---

# Definition of Done

The project is considered complete for v1 when:

- [ ] The website clearly communicates my professional background.
- [ ] My bio and relevant professional information are included.
- [ ] My projects are presented clearly and professionally.
- [ ] Major technologies and skills are represented appropriately.
- [ ] GitHub and LinkedIn links work.
- [ ] Contact information or a contact method is available.
- [ ] The website is responsive on mobile and desktop.
- [ ] Navigation works correctly.
- [ ] There are no obvious console errors.
- [ ] The production build succeeds.
- [ ] The website is publicly deployed.
- [ ] The GitHub repository is clean and documented.
- [ ] The README explains how to run the project.
- [ ] I understand the major React components.
- [ ] I understand the major TypeScript types/interfaces.
- [ ] I can explain the major architectural decisions.
- [ ] I can independently make basic changes after the project is complete.

---

# Guiding Principle

> Build a professional website while learning how to build it.

The goal is not to use the largest number of technologies or create the most complicated architecture.

The goal is to finish a polished, functioning website and understand the engineering decisions and code well enough to discuss and maintain the project independently.
