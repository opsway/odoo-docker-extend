# Odoo production and development ready deployment setup
v. 1.1.0

Ready for deployment and development odoo setup.
Prerequisite for such deployment configuration is to have registered host domain and external PostgreSQL database.

In order deploy:
- Choose appropriate environment
- for live env configure your deployment by providing information in host.env, variables.env and credentails.env files.
- run `docker-compose up -d`

It setups up in the way that docker image is build locally using Dockerfile which is used to for running and instance.
 
It will expose your Odoo instance with https:// with automatic certificate update.

##Configuration:
 - **/addons** folder - contains extra addons for your Odoo instance.
  
    One can for this repo and add copy required module to this folder, or use git submodule functionality to add existing git repo.
 
 - **env/$ENV/conf** folder - contains configuration files.
 
    * docker-compose.yml - deployment configuration
    * odoo.conf - responsible for live server configuration.
    * credentials.env - contains external database credentials;
    * host.env - contains host domain for nginx configuration;
    * variables.env - contains data for letsencrypt proxy service
    * entrypoint.sh - entry point file for Dockerfile
    * odoo_example.conf - more extensive odoo configuration file example,
   
  - **/nginx** - Nginx configuration setup
  - deploy.sh - is used for CI purpose. Jenkins using github web hooks to trigger this file.
    
    

