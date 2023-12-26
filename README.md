# collect-service

build docker
docker build . -t acrwebdev/collect-service:0.0.3

docker push
docker push acrwebdev/collect-service:0.0.3

docker pull
docker pull acrwebdev/collect-service:0.0.3

run docker

docker run -p 6001:6001 --env SERVER_IP=34.80.78.75 --env SERVER_PORT=6001 --env SWAGGER_IP=34.80.78.75 --env DB_PORT=27017 --env DB_IP=10.140.0.2 --env DB_URI="" --restart=always --name=collect-service -d acrwebdev/collect-service:0.0.3
