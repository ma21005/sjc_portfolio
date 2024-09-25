class ChangeExperienceToIntegerInSkills < ActiveRecord::Migration[7.0]
  def change
    change_column :skills, :experience, :integer
  end
end
