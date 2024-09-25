class ChangeSkillTypeToTechnologyIdInSkills < ActiveRecord::Migration[7.0]
  def change
    # skill_typeカラムを削除
    remove_column :skills, :skill_type, :string

    # technology_idカラムを追加し、Technologyテーブルとの外部キーを設定
    add_reference :skills, :technology, foreign_key: true
  end
end
