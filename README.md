# Odoo production and development ready deployment setup
v. 1.0.0

Ready for deployment and development odoo setup.
Prerequisite for such deployment configuration is to have registered host domain and external PostgreSQL database.

In order deploy:
- configure your deployment by providing information in host.env, variables.env and credentails.env files.
- run `docker-compose up -d`

Development setup relies on `docker-compose_local_build.yml`, which in its turn uses local database.
In order to run dev instance locally on the port 8079:
- run `docker-compose -f docker-compose_local_build.yml up -d`

The flow setup in the way that docker image is build locally using Dockerfile which is used to for running and instance.
 
It will expose your Odoo instance with https:// with automatic certificate update.
It allows adding extra JS dependencies for more efficient website development

##Configuration:
 - **/addons** folder - contains extra addons for your Odoo instance.
  
    One can for this repo and add copy required module to this folder, or use git submodule functionality to add existing git repo.
 
 - **/conf** folder - contains configuration files.
 
    * odoo.conf - responsible for live server configuration, while odoo_local.conf, for local development instance.
    
    Files below are added to `.gitignore` and should be modified dirrectly on the server for security reasons. 
    
    * credentials.env - contains external database credentials;
    * host.env - contains host domain for nginx configuration;
    * variables.env - contains data for letsencrypt proxy service
   
  - **/docker** - contains:
   * entrypoint.sh - entry point file for Dockerfile
   * odoo_example.conf - more extensive odoo configuration file example,
   * package.json - JS external dependencies
   
  - **/nginx** - Nginx configuration setup
    
    

