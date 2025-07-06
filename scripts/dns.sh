#!/bin/sh
set -eu

SOPS_AGE_KEY_FILE=keys.txt \
    sops exec-file \
    ./dnscontrol/creds.json \
    'dnscontrol push --config ./dnscontrol/dnsconfig.js --creds {}'
