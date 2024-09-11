
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
  { skill_type: 'Python', experience: 2 },
  { skill_type: 'JavaScript', experience: 1.5 },
  { skill_type: 'HTML', experience: 1.0 },
  { skill_type: 'CSS', experience: 5.0 },
  { skill_type: 'React', experience: 4.5 }
])