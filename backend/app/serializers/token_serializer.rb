class TokenSerializer
  include FastJsonapi::ObjectSerializer
  attributes :ticker, :name
  has_many :balances
end
