# Trip Yoga Website

NextJs application for [Trip Yoga community website](https://tripyoganp.com).

## Development

Before you start, create `.env.local` file:

```bash
touch .env.local
```

Set these environment variables:

```env
NEXT_PUBLIC_POSTHOG_KEY=<posthog-key>
```

### Running

```bash
yarn install
yarn dev
```

Before creating a pull request, all lint and type issues must be fixed.
To check for issues:

```bash
yarn lint
yarn css-lint
yarn typecheck
yarn unimported
```

### Building

```bash
yarn build
```

### Automatic Deployment

Deployments will be triggered in 1 way:

1. Anything pushed to `main` branch will trigger immediate deployment
to configured github io page.
