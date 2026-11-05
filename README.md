# Accounting ERP · React Native · Expo

Ledgers, tax, reporting and finance workflows. Native iOS/Android application using React Native and Expo.

This is a presentation skeleton. Product workflows, identity integration and reviewed API adapters must be implemented and verified before production use. Module plans describe intended behavior; they are not installed or published packages.

Based on [project-boilerplate-mobile-react](https://github.com/liberusoftware/project-boilerplate-mobile-react) at `92043c80ff898e28b35ba56c566dde6d06269895`.

## Start locally

Clone this repository, enter its directory and use the declared toolchain and committed lockfiles:

```bash
npm ci
npm start
```

Use Node from `.node-version`. Expo manages native generation from `app.json`; use SDK-compatible `npx expo install` for dependencies. Change app identifiers and configure credentials before `npx eas-cli@latest build --profile production --platform all`. No signing or store submission is performed by this starter. Test permissions, deep links, resume, offline drafts and logout on iOS and Android devices before release.

## Verify and extend

```bash
npm run lint
npm run typecheck
npm run export
```

Read [AGENTS.md](AGENTS.md), [integration responsibilities](docs/INTEGRATION.md), the [presentation runbook](https://github.com/liberusoftware/documentation/blob/main/guides/presentation/REACT-NATIVE.md) and the [product scope](https://github.com/liberusoftware/documentation/blob/main/projects/accounting/README.md). Enable one vertical journey at a time against reviewed contracts. Verify allowed, denied, wrong-tenant, expired-session, validation and concurrency outcomes when implementing protected behavior. A pending operation is not a completed business transition.

## Other projects using React Native · Expo

Use the same presentation foundation for other domains. These repositories provide starting structures; their availability does not establish feature parity.

| Project | Scope |
| --- | --- |
| [Boilerplate](https://github.com/liberusoftware/project-boilerplate-mobile-react) | Shared application foundation and module composition |
| [Automation](https://github.com/liberusoftware/project-automation-mobile-react) | AI gateways, approvals, rules and integrations |
| [Billing](https://github.com/liberusoftware/project-billing-mobile-react) | Subscriptions, pricing, payments and provisioning |
| [Browser Game](https://github.com/liberusoftware/project-browser-game-mobile-react) | Game worlds, players and community workflows |
| [CMS](https://github.com/liberusoftware/project-cms-mobile-react) | Content authoring, publishing and delivery |
| [Control Panel](https://github.com/liberusoftware/project-control-panel-mobile-react) | Infrastructure and hosting operations |
| [CRM](https://github.com/liberusoftware/project-crm-mobile-react) | Relationships, sales pipelines and customer service |
| [Ecommerce](https://github.com/liberusoftware/project-ecommerce-mobile-react) | Catalogs, checkout, orders and fulfillment |
| [Enterprise SAP](https://github.com/liberusoftware/project-enterprise-sap-mobile-react) | Enterprise workspace and cross-product orchestration |
| [Genealogy](https://github.com/liberusoftware/project-genealogy-mobile-react) | Family trees, research, evidence and collaboration |
| [Liberu Platform](https://github.com/liberusoftware/project-liberu-official-mobile-react) | Official sites, staff applications and platform composition |
| [Maintenance](https://github.com/liberusoftware/project-maintenance-mobile-react) | Assets, work orders, schedules and field operations |
| [Music DAW](https://github.com/liberusoftware/project-music-daw-mobile-react) | Composition, recording, sequencing and audio production |
| [Real Estate](https://github.com/liberusoftware/project-real-estate-mobile-react) | Listings, sales, lettings and agency operations |
| [Social Network](https://github.com/liberusoftware/project-social-network-mobile-react) | Profiles, feeds, communities and moderation |

## Other presentations for Accounting ERP

Choose the surface that fits the audience and deployment boundary. The Laravel core remains authoritative across these alternatives.

- [Laravel · Filament](https://github.com/liberusoftware/project-accounting-erp-laravel-filament): PHP/Composer Laravel host with Filament panels.
- [Laravel · Inertia · Vue](https://github.com/liberusoftware/project-accounting-erp-laravel-inertia-vue): Laravel routes and sessions with Vue pages over the Inertia protocol.
- [Laravel · Inertia · React](https://github.com/liberusoftware/project-accounting-erp-laravel-inertia-react): Laravel routes and sessions with React pages over the Inertia protocol.
- [Nuxt · Vue](https://github.com/liberusoftware/project-accounting-erp-nuxt-vue): Independent Vue application with Nuxt server rendering and reviewed API integration.
- [Next.js · React](https://github.com/liberusoftware/project-accounting-erp-next-react): Independent React application with explicit Next.js server/client boundaries.
- [Flutter · Mobile](https://github.com/liberusoftware/project-accounting-erp-mobile-flutter): Flutter iOS/Android application using Dart and mobile widgets.
- [Dart · Desktop](https://github.com/liberusoftware/project-accounting-erp-dart-desktop): Dedicated Dart desktop application with a Flutter host for Linux, macOS and Windows.
- [Dart · Mobile](https://github.com/liberusoftware/project-accounting-erp-dart-mobile): Separate Dart mobile application with a Flutter host for iOS and Android.

## License and delivery

See the repository license and preserve upstream notices. Review environment configuration, dependencies, backups and rollback before deployment. Publish reusable packages separately from deploying applications. The CI example, where supplied under `docs/`, must be activated with a credential authorized to manage GitHub workflows.
