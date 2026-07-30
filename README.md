# Haywo Hsieh — Professional Portfolio

A complete, dependency-free portfolio website designed for software development, quality assurance, application support, and technical systems opportunities.

## Live structure

- **Hero:** establishes the target role and value proposition in the first screen.
- **Projects:** explains technical work as systems and decisions, not school assignments.
- **Experience:** connects QA, operations leadership, and client communication.
- **About:** presents one coherent career narrative.
- **Skills:** groups tools by the software delivery lifecycle.
- **Education:** shows formal technical and academic foundations.
- **Contact:** provides direct, low-friction actions.

## Technology

- Semantic HTML5
- Modern CSS with custom properties, Grid, and Flexbox
- Vanilla JavaScript
- GitHub Pages-compatible relative paths
- No external packages or build step

## Run locally

Option 1: open `index.html` directly.

Option 2, recommended:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to GitHub Pages

1. Create a new repository, for example `Portfolio-v2`.
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will provide the live URL.

## Replace the current portfolio

To use the existing `Portfolio` repository:

1. Download or back up the current repository.
2. Replace its published-site files with these files.
3. Commit and push to `main`.
4. Keep the resume at `assets/Haywo_Hsieh_Resume.pdf` or update every resume link in `index.html`.

## Content that still needs factual confirmation

Before final deployment, confirm:

- SAIT completion year (`2024` is currently used).
- Whether `Wipro — Google Nest Project` is the correct employer/client presentation.
- Exact Java certificate title, issuer, and year.
- Exact Information Systems Management certificate title, issuer, and year.

The certifications are intentionally omitted from the published page until their official wording is confirmed. Add them using the pattern explained in `LEARNING_GUIDE.md`.
