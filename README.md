### 使用技術
```
Ruby 3.1.3
Ruby on Rails 7.0.8
React 18.2.0
PostgreSQL 16.1
Docker/Docker-compose
```


### 動作手順

1.
```
git clone https://github.com/ma21005/sjc_portfolio.git
```

2.
```
docker-compose build
docker-compose run api rails db:create

cd frontend/app
npm install
docker-compose build

docker-compose up -d
docker-compose exec api bin/rails db:migrate
docker-compose exec api bin/rails db:seed
```

3. http://localhost:3001/ にアクセス


### クレジット情報

- 背景画像： [Freepik](https://jp.freepik.com/free-photo/flat-lay-desk-arrangement-with-copy-space_13523365.htm#query=%E6%9C%BA%E3%81%AE%E4%B8%8A&position=2&from_view=keyword&track=ais&uuid=5d5dda67-b9ac-430f-a6fa-2c57dda79f84)
- サウンド： [甘茶の音楽工房](https://amachamusic.chagasi.com), [効果音ラボ](https://soundeffect-lab.info)
