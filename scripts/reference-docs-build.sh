#!/bin/bash

echo "====== Build site/reference/aisbreaker-*js/ (TypeScript reference docs) ..."
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
DOCS_DIR="${SCRIPT_DIR}/.."
cd ${DOCS_DIR}/

#
# build the reference docs:create *.md files
#
set -x

# aisbreaker-api-js
PACKAGE="aisbreaker-api-js"
echo -e "\n===== ${PACKAGE} ..."
rm -rf ./site/reference/${PACKAGE}
# action (pre)
pushd ../aisbreaker-js/packages/${PACKAGE}/
# workaround because `--exclude` is not working as expected
touch ./build
mv ./build ../build-tmp-${PACKAGE}
# action
typedoc --plugin typedoc-plugin-markdown \
        --entryPointStrategy Expand \
        --entryPoints ./src \
        --exclude     "'**/*.js'" \
        --readme none \
        --tsconfig    ./tsconfig.docs.json \
        --categorizeByGroup true \
        --excludePrivate true \
        --excludeReferences false \
        --includeVersion true \
        --gitRevision develop \
        --sourceLinkTemplate 'https://github.com/aisbreaker/aisbreaker-js/blob/{gitRevision}/{path}#L{line}' \
        --out ${DOCS_DIR}/site/reference/${PACKAGE} \
        || exit 1
# rollback workaround
mv ../build-tmp-${PACKAGE} ./build
# action (post)
popd


# aisbreaker-core-nodejs
PACKAGE="aisbreaker-core-nodejs"
echo -e "\n===== ${PACKAGE} ..."
rm -rf ./site/reference/${PACKAGE}
# action
pushd ../aisbreaker-js/packages/${PACKAGE}/
typedoc --plugin typedoc-plugin-markdown \
        --entryPointStrategy Expand \
        --entryPoints ./src \
        --readme none \
        --tsconfig    ./tsconfig.docs.json \
        --categorizeByGroup true \
        --excludePrivate true \
        --excludeReferences false \
        --includeVersion true \
        --gitRevision develop \
        --sourceLinkTemplate 'https://github.com/aisbreaker/aisbreaker-js/blob/{gitRevision}/{path}#L{line}' \
        --out ${DOCS_DIR}/site/reference/${PACKAGE} \
        || exit 1
popd

# aisbreaker-core-browserjs
PACKAGE="aisbreaker-core-browserjs"
echo -e "\n===== ${PACKAGE} ..."
rm -rf ./site/reference/${PACKAGE}
# action
pushd ../aisbreaker-js/packages/${PACKAGE}/
typedoc --plugin typedoc-plugin-markdown \
        --entryPointStrategy Expand \
        --entryPoints ./src \
        --readme none \
        --tsconfig    ./tsconfig.docs.json \
        --categorizeByGroup true \
        --excludePrivate true \
        --excludeReferences false \
        --includeVersion true \
        --gitRevision develop \
        --sourceLinkTemplate 'https://github.com/aisbreaker/aisbreaker-js/blob/{gitRevision}/{path}#L{line}' \
        --out ${DOCS_DIR}/site/reference/${PACKAGE} \
        || exit 1
popd

# show results
echo -e "\n====== DONE with results ..."
sleep 10
find site/reference/
