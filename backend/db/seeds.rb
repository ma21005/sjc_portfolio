
# Sample profiles
Profile.create(
  name: "Hikaru Onda",
  age: 26,
  birthday: "1998-05-13",
  blood_type: "O",
  mail_address: "onda.hikaru@sjc-inc.co.jp"
)

# Sample careers
careers = Career.create([
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
technologies = Technology.create([
  # フロントエンド技術
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'JQuery' },

  # バックエンド技術
  { name: 'Python' },
  { name: 'Ruby' },
  { name: 'Rails' },
  { name: 'Java' },

  # データベース
  { name: 'MySQL' },
  { name: 'PostgreSQL' },
  { name: 'SQLite' },

  # ツール・プラットフォーム
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Figma' },
  { name: 'Github' },
  { name: 'Notion' },

  # OS
  { name: 'Linux' },
  { name: 'Mac' },
  { name: 'Windows' }
])

# Sample career_technologies
career_technologies = {
  'タスク管理アプリケーションの開発' => ['Ruby', 'JavaScript', 'Rails', 'React', 'PostgreSQL', 'AWS', 'Docker', 'Linux'],
  'オンライン教育プラットフォームの構築' => ['JavaScript', 'React', 'MySQL', 'Figma', 'Linux'],
  'eコマースサイトのリニューアル' => ['Ruby', 'Rails', 'SQLite', 'Notion', 'Mac'],
  '社内情報共有システムの開発' => ['HTML', 'CSS', 'SQLite', 'Github', 'Windows']
}
career_technologies.each do |project_name, tech_names|
  career_id = careers.find { |c| c.project_name == project_name }.id
  tech_names.each do |tech_name|
    technology_id = technologies.find { |t| t.name == tech_name }.id
    CareerTechnology.create(career_id: career_id, technology_id: technology_id)
  end
end

# Sample skills
skill_data = {
  'HTML' => 2,
  'CSS' => 5,
  'Java' => 2,
  'JavaScript' => 1,
  'JQuery' => 2,
  'Ruby' => 3,
  'Python' => 2,
  'Rails' => 3,
  'React' => 4,
  'MySQL' => 1,
  'PostgreSQL' => 4,
  'SQLite' => 5,
  'AWS' => 3,
  'Docker' => 2,
  'Figma' => 1,
  'Github' => 3,
  'Notion' => 2,
  'Windows' => 3,
  'Linux' => 3,
  'Mac' => 1
}
skill_data.each do |tech_name, experience|
  technology = technologies.find { |t| t.name == tech_name }
  Skill.create(technology_id: technology.id, experience: experience)
end

# Sample products
Product.create([
  { name: 'メルカリ', url: 'https://jp.mercari.com/', description: '中古品や不要な物を簡単に売買できるフリマアプリ' },
  { name: 'Amazon', url: 'https://www.amazon.co.jp/', description: '世界最大級のオンラインショッピングサイト。幅広い商品を取り扱う' },
  { name: 'Yahoo!オークション', url: 'https://auctions.yahoo.co.jp/', description: '日本最大のオークションサイト。個人間で商品を売買できる' },
  { name: 'Minecraft', url: 'https://www.minecraft.net/ja-jp', description: 'ブロックを使って自由に世界を作れるサンドボックス型の人気ゲーム' },
  { name: '阿部 寛のホームページ', url: 'http://abehiroshi.la.coocan.jp/', description: '俳優・阿部寛さんの個人運営による話題のホームページ' }
])
