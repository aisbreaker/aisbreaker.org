Release and Deploy new Versions
===============================

Upgrade Version of aisbreaker-js Packages
-----------------------------------------

After a successful [CI build](https://github.com/aisbreaker/aisbreaker-js/actions/workflows/ci-build-publish-deploy.yml) of the `develop` branch, follow these steps to upgrade the version of the aisbreaker-js packages:

```bash
# fresh checkout (after successful CI build of `develop` branch
git clone git@github.com-aisbreaker:aisbreaker/aisbreaker-js.git
cd aisbreaker-js/

# increase version (use the desired version number instead of 0.0.0)
./set-version-in-all-packages.sh 0.0.0

# commit and push
git status
git add -A .
git commit -m "Upgraded to version 0.0.0"
git push
```

Wait again for a successful build. Then merge to `main` branch:
```bash
git checkout main
git merge develop
git status
git push
```

Check the [CI build](https://github.com/aisbreaker/aisbreaker-js/actions/workflows/ci-build-publish-deploy.yml) of `main` branch and *Review pending deployments* and approve `demo-prod` deployments. 


Released Artifacts
------------------
If the process was successful, then the new versions should be published/deployed:
- npm packages:
  - [npmjs.com/package/aisbreaker-api-js](https://www.npmjs.com/package/aisbreaker-api-js?activeTab=versions)
  - [npmjs.com/package/aisbreaker-core-nodejs](https://www.npmjs.com/package/aisbreaker-core-nodejs?activeTab=versions)
  - [npmjs.com/package/aisbreaker-core-browserjs](https://www.npmjs.com/package/aisbreaker-core-browserjs?activeTab=versions)
- Docker/OCI images:
  - [aisbreaker-server](https://hub.docker.com/r/aisbreaker/aisbreaker-server/tags)
  - [aisbreaker-chat-webapp](https://hub.docker.com/r/aisbreaker/aisbreaker-chat-webapp/tags)
- Demo
  - [api.demo.aisbreaker.org/api/v1/version](https://api.demo.aisbreaker.org/api/v1/version) (aisbreaker-server)
  - [demo.aisbreaker.org](https://demo.aisbreaker.org/) (aisbreaker-chat-webapp) - browser relaod is required
