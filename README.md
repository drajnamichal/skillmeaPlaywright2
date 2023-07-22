# Skillmea Playwright 2

This is a repo for advanced Playwright course on Skillmea.


## Dependencies

- Playwright v1.36.1
- Node v20.3.0
- npm v9.6.5
- VSCode Version: 1.80.0 (Universal)

> Pre requirements: 
- [Node setup](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [VS Code setup](https://code.visualstudio.com/learn/get-started/basics)


## Fork and clone the project

1. Copy the project URL `https://github.com/drajnamichal/skillmeaPlaywright2.git`;
1. Fork the project following the [GitHub instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo) - (use the parameter --clone=true);
1. Access the forked project `cd skillmeaPlaywright2`

NOTE: Remember to add the secrets & variables to your local repo.

IMPORTANT: Create your [.env](.env) file following the [.env.example](.env.example).


## Installation

If you want to run this on your local machine, git clone the repo to local. In the main directory run the below commands. This will install playwright dependencies on your machine.

```bash
npm install
npx playwright install
```

## Running the automated checks

```bash
npx playwright test
```

Happy Playwright Testing 🎭
