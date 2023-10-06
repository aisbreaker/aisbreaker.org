#!/bin/bash

npm run reference-docs:prepare || exit 1
npm run reference-docs:build   || exit 1

