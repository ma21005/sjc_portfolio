
# Sample profiles
Profile.create(
  name: "Hikaru Onda",
  age: 26,
  birthday: "1998-05-13",
  blood_type: "O",
  mail_address: "onda.hikaru@sjc-inc.co.jp"
)

# Sample careers
Career.create([
  {
    project_name: "タスク管理アプリケーションの開発",
    start_date: "2022-01-01",
    end_date: "2024-08-03",
    description: "チームでのタスク管理を効率化するアプリケーションを開発。ユーザーがタスクを追加・編集・削除でき、進捗状況を可視化するダッシュボードを実装。",
  },
  {
    project_name: "オンライン教育プラットフォームの構築",
    start_date: "2020-12-01",
    end_date: "2021-12-31",
    description: "学習者と講師をつなぐオンライン教育プラットフォームを構築。コース作成、ユーザー評価機能、動画配信機能を実装。",
  },
  {
    project_name: "eコマースサイトのリニューアル",
    start_date: "2020-03-01",
    end_date: "2020-11-30",
    description: "既存のeコマースサイトをリニューアルし、ユーザー体験を向上させるために新しいUI/UXデザインを適用。モバイル対応も実施。",
  },
  {
    project_name: "社内情報共有システムの開発",
    start_date: "2019-05-01",
    end_date: "2020-02-28",
    description: "社内での情報共有を促進するためのシステムを開発。ドキュメント管理、タスク割り当て、コミュニケーションツールを統合。",
  }
])

# Sample technologies
Technology.create([
  { name: 'HTML' },
  { name: 'CSS'  },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Ruby' },
  { name: 'Rails' },
  { name: 'React' }
])

CareerTechnology.create([
  { career_id: 1, technology_id: 5 },
  { career_id: 1, technology_id: 3 },
  { career_id: 1, technology_id: 6 },
  { career_id: 1, technology_id: 7 },
  { career_id: 2, technology_id: 3 },
  { career_id: 2, technology_id: 7 },
  { career_id: 3, technology_id: 5 },
  { career_id: 3, technology_id: 6 },
  { career_id: 4, technology_id: 1 },
  { career_id: 4, technology_id: 2 },
])

# Sample skills
Skill.create([
  { skill_type: 'Ruby', experience: 3.0 },
  { skill_type: 'Python', experience: 2.0 },
  { skill_type: 'JavaScript', experience: 1.5 },
  { skill_type: 'HTML', experience: 2.7 },
  { skill_type: 'CSS', experience: 5.0 },
  { skill_type: 'Rails', experience: 3.0 },
  { skill_type: 'React', experience: 4.5 }
])

# Sample products
Product.create([
  { name: 'メルカリ', url: 'https://jp.mercari.com/', description: '中古品や不要な物を簡単に売買できるフリマアプリ' },
  { name: 'Amazon', url: 'https://www.amazon.co.jp/', description: '世界最大級のオンラインショッピングサイト。幅広い商品を取り扱う' },
  { name: 'Yahoo!オークション', url: 'https://auctions.yahoo.co.jp/', description: '日本最大のオークションサイト。個人間で商品を売買できる' },
  { name: 'Minecraft', url: 'https://www.minecraft.net/ja-jp', description: 'ブロックを使って自由に世界を作れるサンドボックス型の人気ゲーム' },
  { name: '阿部 寛のホームページ', url: 'http://abehiroshi.la.coocan.jp/', description: '俳優・阿部寛さんの個人運営による話題のホームページ' }
])
