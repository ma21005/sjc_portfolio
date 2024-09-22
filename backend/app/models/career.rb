class Career < ApplicationRecord
  has_many :career_technologies
  has_many :technologies, through: :career_technologies
end
