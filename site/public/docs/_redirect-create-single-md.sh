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

# create HTML filename
file=$(echo "$arg" | sed 's/\.md$/.html/')

echo "Creating '$file' redirect for '$uri'"

# write multiline string to file
#cat > "$file" <<EOF
#---
#layout: forward
#target: https://aisbreaker.org/deprecated/aisbreaker-api/docs/$uri
#---
#EOF

cat > "$file" <<EOF
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=https://aisbreaker.org/deprecated/aisbreaker-api/docs/$uri" />
  </head>
  <body>
    <p>Please wait while you are redirected ... or click directly ... <a href= "https://aisbreaker.org/deprecated/aisbreaker-api/docs/$uri">https://aisbreaker.org/deprecated/aisbreaker-api/docs/$uri</a>
    </p>
</html>
EOF
