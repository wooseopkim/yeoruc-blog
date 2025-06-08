#!/bin/sh
set -eu

SOPS_AGE_KEY_FILE=keys.txt \
    sops exec-file \
    creds.json \
    'dnscontrol push --config ./dnscontrol/dnsconfig.js --creds {}'
