# collect-service

build docker
docker build . -t acrwebdev/collect-service

docker push
docker push acrwebdev/collect-service

docker pull
docker pull acrwebdev/collect-service:latest

run docker
docker run -p 6001:6001 --env SERVER_IP=35.234.42.100 --env SERVER_PORT=6001 --env SWAGGER_IP=35.234.42.100 --env DB_PORT=27017 --env DB_IP=10.140.0.2 --restart=always --name=collect-service -d acrwebdev/collect-service
