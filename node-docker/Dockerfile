FROM keymetrics/pm2:8-alpine
RUN npm install -g pm2 @kapitchi/bb-box

WORKDIR /app

CMD ["pm2-runtime", "service.config.js"]
