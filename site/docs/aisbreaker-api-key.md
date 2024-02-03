---
#prev:
#  text: 'API Keys (Access Token)'
#  link: './api-keys.md'
#next:
#  text: 'Concepts'
#  link: './concepts'
---


AIsBreaker API Key (AIsBreaker Access Token)
============================================

Such [API Key (Access Token)](./api-keys.md) is (sometimes) needed to access an AIsBreaker server and its abstracted AI services.

An AIsBreaker API Key is often needed to access an AIsBreaker server and its abstracted AI services - to handle quotas and to use encrypted 3rd party API keys.

Format of an AIsBreaker API key: `aisbreaker_...`


Create an AIsBreaker API Key for a specific AIsBreaker Server
-------------------------------------------------------------

The following command creates access token, which contains an `OPENAI_API_KEY`. Everything is encrypted **for this specific server instance only**.

```bash
# the AIsBreaker server
#export HOSTPORT="http://localhost:3000"
export HOSTPORT="https://api.demo.aisbreaker.org"

# the included OPENAI_API_KEY
export OPENAI_API_KEY="sk_..."

# create the access token via API call
curl "${HOSTPORT}/api/v1/oauth/token" \
  -v -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "requestAuthAndQuotas": {
      "requestQuotas": {
        "perClientRequestLimits": {
          "requestsPerMinute": 60,
          "requestsPerHour": 600,
          "requestsPerDay": 600
        },
        "globalRequestLimits": {
          "requestsPerMinute": 120,
          "requestsPerHour": 1200,
          "requestsPerDay": 1200
        }
      },
      "serviceSecrets": [
        { "serviceId": "aisbreaker:network", "authSecret": "{{secret}}" },
        { "serviceId": "chat:openai.com", "authSecret": "'"${OPENAI_API_KEY}"'" },
        { "serviceId": "chat:dummy", "authSecret": "" },
        { "serviceId": "", "authSecret": "INVALID" }
      ]
    },
    "expirationTimeSpan": "365d"
  }'
```

The result will look like this
```json
{
  "access_token": "aisbreaker_eyJ2ZXIi...SJDUog",
  "token_type": "Bearer"
}
```
and includes the encrypted `OPENAI_API_KEY`. The AIsBreaker server can then be used with this key, inclusive access to OpenAI within the specified quotas.

To use the generated key for the usage example below, store it in an environment variable `AISBREAKER_API_KEY`.

Important: The generated API key in only valid for this API host (the API server hostname will also be used and checked).


Use an AIsBreaker API Key
-------------------------

```bash
# the AIsBreaker server
#export HOSTPORT="http://localhost:3000"
export HOSTPORT="https://api.demo.aisbreaker.org"

# the API key
export AISBREAKER_API_KEY="aisbreaker_..."

# create the access token via API call
curl "${HOSTPORT}/api/v1/foo" \
  -v -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${AISBREAKER_API_KEY}" \
  -d '{
    "xxx": {
  }'
```
