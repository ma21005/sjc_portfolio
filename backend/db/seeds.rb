
# Sample profiles
Profile.create(
  name: "Hikaru Onda",
  age: 26,
  birthday: "1998-05-13",
  blood_type: "O",
  mail_address: "onda.hikaru@sjc-inc.co.jp"
)

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
