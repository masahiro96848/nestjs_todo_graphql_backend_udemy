# Nest.js と Prisma のテンプレートレポジトリ

### ディレクトリを変更

```
cd nest_todo_graphql/api-server/
```

### .env を作成

```
cp .env.sample .env
```

### ディレクトリを元に戻す

```
cd ../
```

### docker で立ち上げ

```
docker compose up -d
```

### backend コンテナに入る

```
docker exec -it backend sh
```

### パッケージをインストール

```
npm install
```

### Prisma でマイグレーション

```
npx prisma migrate dev --name init
```

### seed データを投入

```
npm run seed
```

### prisma studio 起動

```
npx prisma studio
```

http://localhost:5555/

User テーブルが出来ていることを確認。データが入っていることを確認

SequelAce などの GUI のツールを使って確認。

### サーバー起動(backend コンテナに入って)

```
npm run start:dev
```
