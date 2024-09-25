class Skill < ApplicationRecord
  belongs_to :technology

  validates :experience, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :technology_id, presence: true
end
