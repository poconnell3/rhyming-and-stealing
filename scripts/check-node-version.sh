#!/usr/bin/env bash
set -euo pipefail

required="24.15.0"
current="$(node -v 2>/dev/null | sed 's/^v//')"

if [ "${CI:-}" = "true" ] || [ "${GITHUB_ACTIONS:-}" = "true" ]; then
  exit 0
fi

if [ "$current" != "$required" ]; then
  echo "Node $required is required (current: ${current:-not installed})." >&2
  echo "Run: nvm install && nvm use" >&2
  exit 1
fi
