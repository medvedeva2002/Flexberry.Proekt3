FROM node:12 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/Proekt3 /src/Proekt3

RUN \
 cd /src/Proekt3 ;\
 nuget restore Proekt3.sln; \
 msbuild /p:Configuration=Release Proekt3.sln

FROM flexberry/mono-xsp:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/Proekt3/ODataBackend /app
COPY --from=ember_app /src/ember-app/dist /app
WORKDIR /app
