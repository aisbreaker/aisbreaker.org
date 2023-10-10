---
#prev:
#  text: 'Monorepo'
#  link: '/docs/aisbreaker-api-js/monorepo'
#next:
#  text: 'Release and Deploy new Versions'
#  link: '/docs/aisbreaker-api-js/release'
---


Development Process
===================

See also:
- [Monorepo](./monorepo.md)
- [AIsBreaker@GitHub](https://github.com/aisbreaker/) - [Repositories](https://github.com/orgs/aisbreaker/repositories)


GitFlow Process
---------------

For git repo [aisbreaker-js](https://github.com/aisbreaker/aisbreaker-js/):

- code changes are pushed (directly or via pull request) to the `develop` branch (=default branch)
- set the new version to all packages:
  ```
  cd aisbreaker-js/
  ./set-version-in-all-packages.sh 0.0.1
  ```
  and push these changes to the `develop` branch
  - nothing will be published to npm or Docker repository so far
- changes are merged from `develop` to `main` branch
  - this triggers the publishing process in GitHub CI
  - all npm packages in `packages/*` are build and published
  - all Docker images (if `packages/Dockerfile` is avalable) are build and published

To deploy the new code to [demo.aisbreaker.org](https://demo.aisbreaker.org/) and to [api.demo.aisbreaker.org](https://api.demo.aisbreaker.org/):
- set the new version in [aisbreaker-js/deployment/aisbreaker-prod/](https://github.com/aisbreaker/aisbreaker-js/tree/develop/deployment/aisbreaker-prod/) and push it to the `main` branch
  - this triggers the publishing process in GitHub CI
  - see also initial Kubernetes setup repo [aisbreaker-k8s/](https://github.com/aisbreaker/aisbreaker-k8s/)
