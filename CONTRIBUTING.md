# Contributing to AppLaunch Wiki

First off, thank you for considering contributing to AppLaunch Wiki! It's people like you that make AppLaunch Wiki such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps** or provide mockups/wireframes.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most AppLaunch Wiki users.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the TypeScript and React styleguides
* Include screenshots and animated GIFs in your pull request whenever possible
* End all files with a newline
* Avoid platform-dependent code

## Development Process

### Setup Development Environment

1. Fork the repo and create your branch from `main`.
2. Clone your fork:
   ```bash
   git clone https://github.com/praveentcom/applaunch-wiki.git
   cd applaunch-wiki
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/my-new-feature
   ```
   or
   ```bash
   git checkout -b fix/my-bug-fix
   ```

2. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/my-new-feature
   ```

4. Create a Pull Request from your fork to the main repository.

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

* Use TypeScript for all new code
* Prefer interfaces over types when possible
* Use explicit types for function parameters and return values
* Follow the existing code style in the project

### Testing

* Test your changes on both desktop and mobile viewports
* Test both light and dark modes
* Ensure all feature flags work correctly
* Test with different configurations in `src/config/site.ts`

## Project Structure

```
applaunch-wiki/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── cookies/      # Cookie policy page
│   │   ├── privacy/      # Privacy policy page
│   │   ├── refund/       # Refund policy page
│   │   ├── terms/        # Terms of service page
│   │   ├── styles/       # Global styles
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── landing/      # Landing page components
│   │   └── layout/       # Layout components
│   ├── config/           # Configuration files
│   ├── content/          # Markdown content
│   └── lib/              # Utility functions
├── public/               # Static assets
└── ...
```

## Need Help?

If you have questions, feel free to:
* Open an issue with the `question` label
* Reach out through GitHub Discussions (if enabled)

## Recognition

Contributors will be recognized in our README and release notes. Thank you for your contributions!

