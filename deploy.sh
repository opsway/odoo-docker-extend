#!/usr/bin/env bash

echo "OK"
cd /var/www/odoo-rayim
git pull
cd env/stage
docker-compose up -d
echo "Deployed"
