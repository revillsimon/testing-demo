# Testing Demo

Repo for the talk I did at Vertu House on 5th December 2024 on TDD.

`vite` was used to scaffold a basic project with TypeScript.

Tests are run by `vitest` with extended matchers from `@testing-library/jest-dom`.

## Getting Started

### Requirements

View the [requirements.md](requirements.md) for the simple counter app we will build.

### Installation

```shell
$ yarn
```

### Running locally

```shell
$ yarn dev
```

### Run the test suite

```shell
$ yarn test
```

<small>\* Runs in watch mode and generates coverage report.</small>

#### View the coverage report

Run `coverage/index.html` with LiveServer extension for vscode.

### Run the mutation test suite

```shell
$ yarn test:mutation
```

<small>\* Generates coverage report.</small>

#### View the mutation test report

Run `reports/mutation/mutation.html` with LiveServer extension for vscode.
