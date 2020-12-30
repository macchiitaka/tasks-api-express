# tasks-api-express

[Tasks] Web API using Express + TypeScript + Prisma. [Demo](https://tasks-api-express.herokuapp.com/api/v1/tasks)

## Technologies

- Architecture
  - [Clean Coder Blog](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- API
  - [REST API](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- Web framework
  - [Express - Node.js web application framework](https://expressjs.com/)
- Programming language
  - [TypeScript: Typed JavaScript at Any Scale.](https://www.typescriptlang.org/)
- ORM
  - [Prisma - Next-generation ORM for Node.js and TypeScript](https://www.prisma.io/)
- DB
  - [PostgreSQL: The world's most advanced open source database](https://www.postgresql.org/)
- Formatter
  - [Prettier · Opinionated Code Formatter](https://prettier.io/)
  - [EditorConfig](https://editorconfig.org/)
- Linter
  - [ESLint - Pluggable JavaScript linter](https://eslint.org/)
    - [benmosher/eslint-plugin-import: ESLint plugin with rules that help validate proper imports.](https://github.com/benmosher/eslint-plugin-import)
    - [jest-community/eslint-plugin-jest: ESLint plugin for Jest](https://github.com/jest-community/eslint-plugin-jest)
    - [mysticatea/eslint-plugin-node: Additional ESLint's rules for Node.js](https://github.com/mysticatea/eslint-plugin-node#readme)
    - [sindresorhus/eslint-plugin-unicorn: Various awesome ESLint rules](https://github.com/sindresorhus/eslint-plugin-unicorn)
- Others
  - [typicode/husky: Git hooks made easy 🐶 woof!](https://github.com/typicode/husky)
  - [okonet/lint-staged: 🚫💩 — Run linters on git staged files](https://github.com/okonet/lint-staged)
- Test Runner
  - [Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)
- Security
  - [Helmet](https://helmetjs.github.io/)
  - [expressjs/cors: Node.js CORS middleware](https://github.com/expressjs/cors#readme)
- Git
  - [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/)
- Paas
  - [Heroku](https://jp.heroku.com/)

## Command (Development)

```bash
$ docker run -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=tasks -p 5432:5432 postgres:12
```

Run PostgreSQL.

```bash
$ npx prisma migrate dev --preview-feature
```

Create a migration from changes in Prisma schema, apply it to the database trigger generators (e.g. Prisma Client)

```bash
$ npx prisma migrate deploy --preview-feature
```

The migrate deploy command applies all pending migrations. Primarily used in non-development environments.

```bash
$ npx prisma generate
```

The generate command generates assets like Prisma Client based on the generator and data model blocks defined in your prisma/schema.prisma file.
