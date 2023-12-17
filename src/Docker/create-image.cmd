docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proekt3/app ../..
