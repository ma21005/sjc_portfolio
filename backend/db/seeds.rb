
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
  { name: 'メルカリ', url: 'https://jp.mercari.com/' },
  { name: 'Amazon', url: 'https://www.amazon.co.jp/' },
  { name: 'Yahoo!オークション', url: 'https://auctions.yahoo.co.jp/' },
  { name: 'スーパーマリオブラザーズ', url: 'https://www.nintendo.com/jp/famicom/software/smb1/index.html' },
  { name: '阿部 寛のホームページ', url: 'http://abehiroshi.la.coocan.jp/' }
])
