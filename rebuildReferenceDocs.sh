#!/bin/bash

npm run docs:prepare || exit 1
npm run docs:build   || exit 1
