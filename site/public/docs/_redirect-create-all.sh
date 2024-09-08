#!/bin/bash

cat _redirect-for-mds.txt | grep .md | xargs -iXXX ./_redirect-create-single-md.sh XXX

