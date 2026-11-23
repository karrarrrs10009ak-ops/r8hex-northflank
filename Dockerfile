FROM node:22-bookworm-slim

ENV NODE_ENV=production \
    PORT=8999

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

COPY --chown=node:node server.js data.js ./
USER node

EXPOSE 8999
CMD ["npm", "start"]
