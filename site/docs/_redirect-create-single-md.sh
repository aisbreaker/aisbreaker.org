#!/bin/bash

# arg: $1 = source path, e.g. "./foo/bar.md"
arg="$1"

# convert to file without extension
file=$(echo "$arg" | sed 's/^\.\///')
dir=$(dirname "$file")
uri=$(basename "$file" .md)
# remove ./ from dir
uridir=$(echo "$dir" | sed 's/^\.\///')
# include directory in uri if it's not index.md
if [ "$uri" != "index" ]; then
  uri="$uridir/$uri"
  uri=$(echo "$uri" | sed 's/^\.\///')
fi

# make uri empty if it's index.md
if [ "$uri" = "index" ]; then
  uri=""
fi

# create directory if it doesn't exist
mkdir -p "$dir"

echo "Creating '$file' redirect for '$uri'"

# write multiline string to file
cat > "$file" <<EOF
---
layout: forward
target: https://aisbreaker.org/deprecated/aisbreaker-api/docs/$uri
---
EOF
