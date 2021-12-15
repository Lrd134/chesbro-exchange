class CreateBalances < ActiveRecord::Migration[6.1]
  def change
    create_table :balances do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :token_id, null: false, foreign_key: true
      t.float :balance
      t.timestamps
    end
  end
end
