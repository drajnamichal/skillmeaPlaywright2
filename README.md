# Skillmea Playwright 2

This is a repo for advanced Playwright course on Skillmea.


## Prerequisites

You will need the following tools:

1. A recent version of [Node.js](https://nodejs.org/).
2. A good editor like [Visual Studio Code](https://code.visualstudio.com/) with the [Playwright extension](https://playwright.dev/docs/getting-started-vscode).
3. A [GitHub](https://github.com/) account with a [Git](https://git-scm.com/) client.


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
