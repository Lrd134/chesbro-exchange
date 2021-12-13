class TokenSerializer
  include FastJsonapi::ObjectSerializer
  attributes :ticker, :name, :balances
end
