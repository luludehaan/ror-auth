class CreateTacos < ActiveRecord::Migration[6.1]
  def change
    create_table :tacos do |t|
      t.string :filling
      t.string :topping
      t.string :sauce
      t.string :kind
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
