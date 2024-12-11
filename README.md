# Coding Mini Projects

**Small programming projects and challenges to improve my skills in various languages and technologies.**  
This repository contains solutions to coding challenges, mini-applications, and exercises, organized by language and topic.

The goal is to have a centralized space to share, review, and continuously improve my projects.

---

## Contents 📂

- Solutions to coding challenges
- Mini-applications
- Hands-on exercises

---

## How to Clone a Specific Project 🛠️

If you want to clone only one specific project from this repository (e.g., `simple-coffe-listing`), you can use Git's **sparse-checkout** feature. Here's how:

1. Clone the repository without downloading all the content:
   ```bash
   git clone --no-checkout git@github.com:blazo-dev/coding-mini-projects.git
   cd coding-mini-projects
   ```

2. Enable sparse-checkout:
   ```bash
   git sparse-checkout init --cone
   ```

3. Define the project directory you want to clone:
   ```bash
   git sparse-checkout set simple-coffe-listing
   ```

4. Check out the branch (e.g., `main`):
   ```bash
   git checkout main
   ```

This will download only the **`simple-coffe-listing`** directory to your local machine.

---

## Contributions 🤝

Feel free to:

- Review the code.
- Suggest improvements or optimizations.
- Share feedback.

Let's collaborate to grow as developers!

---

## Happy Coding! 🚀
