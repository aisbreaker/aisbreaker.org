#!/bin/bash

echo "===== Preparing site/reference/aisbreaker-*js/ generation (TypeScript reference docs) ..."
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd ${SCRIPT_DIR}/../

#
# prepare TypeScript packages as far as needed
#
set -x
pushd ../aisbreaker-js/ || exit 1
# install dependencies ... to run typedoc
npm install || exit 1
# build package that is needed by other packages ... to run typedoc
cd packages/aisbreaker-api-js/ || exit 1
npm run build || exit 1
popd
