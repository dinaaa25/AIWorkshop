#!/usr/bin/env bash
# Prints /servicios/pdf to public/business-context-ai-servicios.pdf with headless Chrome.
# Run `pnpm dev` first. Override the base URL with BASE_URL=http://localhost:3001.
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/business-context-ai-servicios.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$OUT" \
  "$BASE_URL/servicios/pdf"

echo "PDF written to $OUT"
