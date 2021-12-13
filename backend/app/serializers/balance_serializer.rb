class BalanceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :balance, :token, :user
end
