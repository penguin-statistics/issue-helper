FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN yarn && yarn build

# runner
FROM nginx:1.21.6 AS runner

COPY build/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /srv
