class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.integer :age
      t.date :birthday
      t.string :blood_type
      t.string :mail_address

      t.timestamps
    end
  end
end
