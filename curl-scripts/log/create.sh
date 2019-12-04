#!/bin/bash

API="http://localhost:4741"
URL_PATH="/logs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "log": {
      "date": "'"${DATE}"'",
      "hours_coding": "'"${HOURS_CODING}"'",
      "what_I_did": "'"${WHAT_I_DID}"'"
    }
  }'

echo
