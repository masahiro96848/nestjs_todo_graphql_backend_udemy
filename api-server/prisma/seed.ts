// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    { username: 'サンプルテスト001', email: 'sample01@example.com' },
    { username: 'サンプルテスト002', email: 'sample02@example.com' },
    { username: 'サンプルテスト003', email: 'sample03@example.com' },
    { username: 'サンプルテスト004', email: 'sample04@example.com' },
    { username: 'サンプルテスト005', email: 'sample05@example.com' },
  ];

  // 既存のデータをクリアしたい場合は以下をアンコメント
  // await prisma.user.deleteMany()

  // データを一括で作成
  await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // 重複をスキップする場合
  });

  console.log('初期ユーザーデータが作成されました。');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
