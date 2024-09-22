class CreateCareers < ActiveRecord::Migration[7.0]
  def change
    create_table :careers do |t|
      t.string :project_name
      t.date :start_date
      t.date :end_date
      t.text :description

      t.timestamps
    end
  end
end
