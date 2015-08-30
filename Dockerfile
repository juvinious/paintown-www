FROM ubuntu:latest

ENV HOME /root

# Install NGINX
RUN apt-get update \
    && apt-get install -y -qq vim \
        python \
        git \
        curl \
        wget \
        build-essential \
        nginx \
    && update-rc.d nginx defaults \
    && mkdir -p /var/nginx \
    && sed -i 's/\/usr\/share\/nginx\/html/\/var\/nginx\/build/g' /etc/nginx/sites-enabled/default

# Install node
RUN curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash - \
    && apt-get install -y -qq nodejs \
    && npm -g install grunt-cli karma bower

# Setup environment and watch build
CMD service nginx restart \
    && cd /var/nginx \
    && npm install \
    && bower --config.interactive=false --allow-root install \
    && grunt watch --force