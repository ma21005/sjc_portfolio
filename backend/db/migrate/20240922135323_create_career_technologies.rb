class CreateCareerTechnologies < ActiveRecord::Migration[7.0]
  def change
    create_table :career_technologies do |t|
      t.references :career, null: false, foreign_key: true
      t.references :technology, null: false, foreign_key: true

      t.timestamps
    end
  end
end
