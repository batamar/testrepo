FROM node:12.16-slim
WORKDIR /api/
COPY . /api
EXPOSE 3100
ENTRYPOINT [ "node", "--max_old_space_size=8192", "src" ]
