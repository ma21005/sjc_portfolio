class Technology < ApplicationRecord
  has_many :career_technologies
  has_many :careers, through: :career_technologies
end
