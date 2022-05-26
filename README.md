# collect-service

build docker
docker build . -t acrwebdev/collect-service:0.0.1

docker push
docker push acrwebdev/collect-service:0.0.1

docker pull
docker pull acrwebdev/collect-service:0.0.1

run docker
docker run -p 6001:6001 --env SERVER_IP=104.199.204.162 --env SERVER_PORT=6001 --env SWAGGER_IP=104.199.204.162 --env DB_PORT=27017 --env DB_IP=10.140.0.7 --restart=always --name=collect-service -d acrwebdev/collect-service:0.0.1
