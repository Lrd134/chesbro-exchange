class CreateBalances < ActiveRecord::Migration[6.1]
  def change
    create_table :balances do |t|
      t.integer :user_id
      t.integer :token_id
      t.float :balance
      t.timestamps
    end
  end
end
