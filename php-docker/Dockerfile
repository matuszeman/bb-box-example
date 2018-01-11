FROM keymetrics/pm2:8-alpine
RUN npm install -g pm2 @kapitchi/bb-box

### system tools ###
RUN apk update && apk upgrade && apk add ca-certificates wget curl

### php ###
RUN apk add php7 php7-fpm php7-openssl php7-json php7-json php7-phar php7-mbstring php7-zlib php7-zip

### composer ###
ENV COMPOSER_HOME /composer
ENV PATH /composer/vendor/bin:$PATH
# Allow Composer to be run as root
#ENV COMPOSER_ALLOW_SUPERUSER 1
# Setup the Composer installer
RUN curl -o /tmp/composer-setup.php https://getcomposer.org/installer \
  && curl -o /tmp/composer-setup.sig https://composer.github.io/installer.sig \
  && php -r "if (hash('SHA384', file_get_contents('/tmp/composer-setup.php')) !== trim(file_get_contents('/tmp/composer-setup.sig'))) { unlink('/tmp/composer-setup.php'); echo 'Invalid installer' . PHP_EOL; exit(1); }" \
  && php /tmp/composer-setup.php --install-dir /bin --filename=composer
# Make composer folder being read/write to all users
RUN chmod -R o+rw /composer

WORKDIR /app
CMD ["pm2-runtime", "service.config.js"]
