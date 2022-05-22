# collect-service

build docker
docker build . -t acrwebdev/collect-service

docker push
docker push acrwebdev/collect-service

run docker
docker run -p 6000:6000 --env SERVER_IP=34.81.209.11 --env SERVER_PORT=3000 --env SWAGGER_IP=34.81.209.11 --env DB_PORT=27017 --env DB_IP=10.140.0.2 --restart=always --name=collect-service -d acrwebdev/collect-service
