ARG FUNCTION_DIR="/function"

FROM node:14-buster-slim

RUN apt-get update && \
    apt install -y \
    g++ \
    make \
    cmake \
    python \
    autoconf \
    libtool \
    openssh-client

ARG FUNCTION_DIR

RUN mkdir -p ${FUNCTION_DIR} && chmod -R 755 ${FUNCTION_DIR}

WORKDIR ${FUNCTION_DIR}

COPY package.json .
RUN npm install
COPY app.js .

ENTRYPOINT ["/usr/local/bin/npx", "aws-lambda-ric"]
CMD ["app.handler"]