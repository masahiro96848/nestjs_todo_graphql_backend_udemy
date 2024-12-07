# Nest.jsとPrismaのテンプレートレポジトリ

### ディレクトリを変更
```
cd api-server/
```


### .envを作成
```
cp .env.sample .env
```

### dockerで立ち上げ
```
docker compose up -d
```

### backendコンテナに入る
```
docker exec -it backend sh
```

### backendコンテナに入る
```
docker exec -it backend sh
```

### Prismaでマイグレーション
```
npx prisma migrate dev --name init
```

Userテーブルが出来ていることを確認。

SequelAceなどのGUIのツールを使って確認。
