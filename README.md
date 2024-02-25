```
Ruby:3.1.3
Ruby on Rails:7.0.8
React:18.2.0
```

TODO: frontend/.gitignoreを編集

```
docker-compose build
docker-compose run api rails db:create

docker-compose run front sh -c "create-react-app app --template typescript"
docker-compose build

docker-compose up
```
