class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :skill_type
      t.float :experience

      t.timestamps
    end
  end
end
