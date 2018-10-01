From node:8.12.0-alpine
Expose 8080

WORKDIR /app

ADD . /app

CMD ["node", "app/test.js"]