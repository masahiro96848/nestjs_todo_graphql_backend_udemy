# Nest.jsとPrismaのテンプレートレポジトリ

### ディレクトリを変更
```
cd nest_todo_graphql/api-server/
```


### .envを作成
```
cp .env.sample .env
```

### ディレクトリを元に戻す
```
cd ../
```

### dockerで立ち上げ
```
docker compose up -d
```

### backendコンテナに入る
```
docker exec -it backend sh
```

### パッケージをインストール
```
npm install
```

### Prismaでマイグレーション
```
npx prisma migrate dev --name init
```

Userテーブルが出来ていることを確認。

SequelAceなどのGUIのツールを使って確認。


### サーバー起動(backendコンテナに入って)
```
npm run start:dev
```
