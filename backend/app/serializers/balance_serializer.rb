class BalanceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :token_id, :user_id, :balances
  belongs_to :user, :token
end
