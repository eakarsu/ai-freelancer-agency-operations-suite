#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

PORT="${PORT:-5209}"
DB_NAME="${PGDATABASE:-ai_freelancer_agency_operations_suite}"

echo "======================================="
echo "      AI Freelancer Agency Operations Suite"
echo "======================================="
echo
echo "Ensuring PostgreSQL database '$DB_NAME' exists..."
createdb "$DB_NAME" 2>/dev/null || true

if command -v lsof >/dev/null 2>&1; then
  BUSY_PIDS="$(lsof -ti tcp:"$PORT" 2>/dev/null || true)"
  if [ -n "$BUSY_PIDS" ]; then
    echo "Port $PORT is already in use. Stopping existing local process(es): $BUSY_PIDS"
    kill $BUSY_PIDS 2>/dev/null || true
    sleep 1
  fi
fi

export PGDATABASE="$DB_NAME"
export NEXT_PUBLIC_APP_NAME="AI Freelancer Agency Operations Suite"
export NEXT_PUBLIC_LOGIN_EMAIL="admin@ai-freelancer-agency.local"
export PORT

echo "Starting ai freelancer agency operations on http://localhost:$PORT"
echo "Login: admin@ai-freelancer-agency.local / admin123"
echo "Press Ctrl-C to stop."
echo

cd frontend
npm install --silent >/dev/null 2>&1 || npm install
exec npx next dev --hostname 127.0.0.1 --port "$PORT"
