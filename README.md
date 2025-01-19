# .NET Caniuse

> Open [website](https://brave-beach-0b9f7861e.4.azurestaticapps.net/).

## Overview

.NET Caniuse is a project that provides information about the features available in different versions of .NET. It helps developers understand what features are supported in each version.

## How to Contribute

We welcome contributions from the community!

### Contribute by adding more .NET features

The JSON files containing the .NET version information are located in the `src/data/versions` directory. Each file represents a different version of .NET and includes details such as release date, end of support date, and features.

- [net9.json](./src/data/versions/net9.json)
- [net8.json](./src/data/versions/net8.json)
- [net7.json](./src/data/versions/net7.json)
- [net6.json](./src/data/versions/net6.json)

Feel free to explore and update these files as needed, you can just edit them directly in the GitHub UI (without setting up the project locally) and submit a pull request.

### Running the Project Locally

To run the project locally, follow these steps:

1. [Clone](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories) the repository. If you want to contribute, [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the repository first and then clone your fork.

2. Install the dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321` to see the project running.

## Built With

This project is built with:

- [Astro](https://astro.build)
- [Svelte](https://svelte.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Copilot](https://github.com/features/copilot)
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)
