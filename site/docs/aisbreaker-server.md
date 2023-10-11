---
#prev:
#  text: 'Home'
#  link: '/'
#next:
#  text: 'Reference'
#  link: '/reference/'
---

AIsBreaker Server
=================

Introduction
------------
The AIsBreaker Server provides a REST API to access the AIs for the AIsBreaker Client API. It is implemented in TypeScript/JavaScript and can be used as a standalone server or as a library in your own Node.js app.


Features
--------
- [AIsBreaker REST API](aisbreaker-rest-api)
- access to all AI service connectors via a single API ([Services (List)](/docs/services))
- authentication and quotas with [AIsBreakers API Key (AIsBreaker Access Tokens)](aisbreaker-api-key)


Public Demo Server
------------------
For testing purposes, we provide a public demo server at [api.demo.aisbreaker.org](https://api.demo.aisbreaker.org/api/v1/version). It is a free service and can be used by anyone. However, it is not intended for production use and may be shut down at any time without notice.


Installation
------------

### With Docker
The server is available as standalone [Docker]() image ([Dockerfile](https://github.com/aisbreaker/aisbreaker-js/blob/develop/packages/aisbreaker-server/Dockerfile), repo [aisbreaker/aisbreaker-server](https://hub.docker.com/r/aisbreaker/aisbreaker-server)). It has no further container dependecies and it currently doesn't require persistent storage (because the server is stateless).

Start server on host port 8080
```bash
export AUTH_ENCRYPTION_KEYPHRASE="my secret server keyphrase"
docker run \
  -e AUTH_ENCRYPTION_KEYPHRASE="$AUTH_ENCRYPTION_KEYPHRASE" \
  -p 8080:3000 \
  aisbreaker/aisbreaker-server:latest
```

and check if it's running (in a 2nd terminal)
```bash
curl -X GET "http://localhost:8080/api/v1/version"
```
should return something like
```json
{
  "version": "unknown version",
  "message": "Hello stranger, ... I'm AIsBreaker.org server version unknown version !"
}
```

### With Kubernetes
Here we explain hot to run the server under [Kubernetes](https://kubernetes.io/).

First set the required secret(s) `aisbreaker-api-server-secrets` in your namespace:
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: aisbreaker-api-server-secrets
  namespace: <NAMESPACE>
type: Opaque
data:
  # key is base64 encoded:
  #   export AUTH_ENCRYPTION_KEYPHRASE='api.demo...'
  #   echo -n "${AUTH_ENCRYPTION_KEYPHRASE}" | base64 -w 0
  auth-encryption-keyphrase: YXB...
```

Then customize [aisbreaker-demo-api-server-server.yaml.tmpl](https://github.com/aisbreaker/aisbreaker-js/blob/develop/deployment/aisbreaker-prod/aisbreaker-demo-api-server-server.yaml.tmpl) with replacement of
- `${IMAGE_NAME}` by `aisbreaker/aisbreaker-server`
- `${VERSION}` by `latest` or a specific version number from [aisbreaker-server/tags](https://hub.docker.com/r/aisbreaker/aisbreaker-server/tags)

and apply it with `kubectl apply -n <NAMESPACE> -f aisbreaker-server.yaml`.

In addition you can configure a Kubernetes [service](https://kubernetes.io/docs/concepts/services-networking/service/) and [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) as needed.


### With Plain Node.js

Prepare
```bash
git clone git@github.com:aisbreaker/aisbreaker-js.git
cd aisbreaker-js/packages/aisbreaker-server/
npm install
npm run build
```

and start the server
::: code-group
```bash[With npm]
export AUTH_ENCRYPTION_KEYPHRASE="my secret server keyphrase"
# ./start.sh
npm run start
```

```bash[With NodeJS directly]
export AUTH_ENCRYPTION_KEYPHRASE="my secret server keyphrase"
node build/index.js
```

```bash[Start Dev Server]
export AUTH_ENCRYPTION_KEYPHRASE="my secret server keyphrase"
startDev.sh
```
:::


Implementation Details
----------------------
- `aisbreaker-server`
  - code to run an NodeJS + [Express](https://expressjs.com/) HTTP server, to serve the AIsBreaker API via REST
  - inclusive server default setup
  - [source code](https://github.com/aisbreaker/aisbreaker-js/tree/develop/packages/aisbreaker-server/)
