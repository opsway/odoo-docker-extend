#!/usr/bin/env bash

echo "OK"
cd /var/www/odoo-$PROJECT_NAME
git pull
cd env/$ENV_NAME
docker-compose up -d
echo "Deployed"
