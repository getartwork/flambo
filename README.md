# flambo

## Features

- Collect data from several data sources:
    - Twitter
    - RSS feeds
    - Meetup
    - …
- Create topics and attach data sources
- Create custom collections

## Requirements

- Docker
- docker-compose
- Node 6 (only for development)

## Stack

- Rethinkdb
- elasticsearch
- rabbitmq
- Node.js

## Run it

```sh
make run
```

Now you can acces the app at http://localhost:3000/

## Development mode

Launch rethinkdb, elasticsearch and the api and start the webapp dev server.

```sh
make run-dev
```

You should now be able to access the api at http://localhost:3000/ and the webapp at http://localhost:8081

## Accessing services

- **rethinkdb ui** http://localhost:8080/
- **elasticsearch** http://localhost:9200/, I strongly encourage you to install the [sense chrome extension](https://chrome.google.com/webstore/detail/sense-beta/lhjgkmllcaadmopgmanpapmpjgmfcfig)
- **rabbitmq management console** http://localhost:15672/ 

## Postman

This repository provides a postman collection to play with the API.
To run it simply import `flamb.postman_collection.json` into postman.


## Operations

Reloading default data:

```sh
make data-reset
```

Collecting and indexing from existing sources

```sh
docker-compose exec api /bin/bash -c "cd flambo && node collect.js"
```

Running api functional tests

```sh
make test-api-bdd
```

## Documentation

You can generate several documentations (Node.js required on the host):

- **API** `make doc-api`
- **CSS styleguide** `make doc-css-styleguide`
- **webapp** `make doc-webapp`

If you want to build all docs at once `make doc`
