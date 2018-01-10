FROM keymetrics/pm2:8-alpine

RUN apk update && apk upgrade && apk add php7 php7-fpm

WORKDIR /app

CMD ["pm2-runtime", "service.config.js"]
