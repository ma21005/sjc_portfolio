## SJC_PORTFOLIO 2024
https://happytreesun0513.com/

**※上記エンドポイントアクセス後に EC2 インスタンスを起動するので、画面が表示されるまでに30秒程度かかります**

![image](https://github.com/user-attachments/assets/7bc775de-dfc2-4821-bbb6-3cfe44072011)

## How To Use
<img src="https://github.com/user-attachments/assets/250b5d55-ef89-4fda-8ae4-851bf3aea1a1" width="1000" alt="sjc_portfolio_manual drawio">

## 構成
![sjc_portfolio_aws drawio](https://github.com/user-attachments/assets/48282696-a3bc-4724-9148-0cced119c1b2)

<img src="https://github.com/user-attachments/assets/1b482ab7-9ba8-449d-b6b0-508ae8f7c3ac" width="600" alt="backend_development - public">

## 使用技術
```
Ruby 3.1.3
Ruby on Rails 7.0.8
React 18.2.0
PostgreSQL 16.1
Docker/Docker-compose
```


## ローカルでの動作手順
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


## クレジット情報
- 背景画像： [Freepik](https://jp.freepik.com/free-photo/flat-lay-desk-arrangement-with-copy-space_13523365.htm#query=%E6%9C%BA%E3%81%AE%E4%B8%8A&position=2&from_view=keyword&track=ais&uuid=5d5dda67-b9ac-430f-a6fa-2c57dda79f84)
- サウンド： [甘茶の音楽工房](https://amachamusic.chagasi.com), [効果音ラボ](https://soundeffect-lab.info)
