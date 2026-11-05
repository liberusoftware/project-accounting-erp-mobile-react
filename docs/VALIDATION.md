# Foundation validation

On 2026-11-05, the generated Expo SDK 58 / React Native 0.88.1 foundation passed `npm run lint`, `npm run typecheck` and `npm run export`. Metro produced Android and iOS Hermes bundles. These exports do not establish signed native builds, physical-device behavior, production API integration or store submission.

`npx expo lint` rejected its auto-installed ESLint version under the current CLI/Node combination. The equivalent direct ESLint command passes and is declared as `npm run lint`.

The baseline install reports moderate development-tool dependency advisories. Review current `npm audit` output before adoption and make compatible dependency updates deliberately; do not automatically force a framework-major downgrade.
