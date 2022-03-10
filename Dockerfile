FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN yarn && yarn build

# runner
FROM caddy:2-alpine AS runner

RUN apk add --no-cache libc6-compat
RUN apk add --no-cache tini
# Tini is now available at /sbin/tini

COPY Caddyfile /etc/caddy/Caddyfile

COPY --from=builder /app/dist /srv

EXPOSE 8030

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "caddy" ]
