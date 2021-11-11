# my-app

[![GitHub Actions](https://github.com/RazvanRauta/nextjs-tailwind/actions/workflows/lint.yml/badge.svg)](https://github.com/RazvanRauta/nextjs-tailwind/actions/workflows/lint.yml)

## Environment setup

You need to have [Go](https://golang.org/),
[Node.js](https://nodejs.org/),
[Docker](https://www.docker.com/), and
[Docker Compose](https://docs.docker.com/compose/)
(comes pre-installed with Docker on Mac and Windows)
installed on your computer.

Verify the tools by running the following commands:

```sh
go version
npm --version
docker --version
docker-compose --version
```

If you are using Windows you will also need
[gcc](https://gcc.gnu.org/). It comes installed
on Mac and almost all Linux distributions.

## Start in development mode

In the project directory run the command (you might
need to prepend it with `sudo` depending on your setup):

```sh
docker-compose -f docker-compose-dev.yml up
```

This starts a local MongoDB on `localhost:27017`.
The database will be populated with test records
from the [init-db.js](init-db.js) file.

Install Air

```sh
curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin
```

For less typing, you could add `alias air='$GOPATH/bin/air'` to your `.bashrc` or `.zshrc`.

Navigate to the `server` folder and start the back end:

```sh
cd server
air 
#if no air :), use:
go run server.go
```

The back end will serve on <http://localhost:8080>.

Navigate to the `frontend` folder, install dependencies,
and start the front end development server by running:

```sh
cd frontend
yarn
yarn dev
```

The application will be available on <http://localhost:3000>.

## Start in production mode

Perform:

```sh
docker-compose up
```

This will build the application and start it together with
its database. Access the application on <http://localhost:8080>.
