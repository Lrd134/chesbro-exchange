class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :token, null: false, foreign_key: true
      t.float :amount
      t.boolean :sell
      t.timestamps
    end
  end
end
