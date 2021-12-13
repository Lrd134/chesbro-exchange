class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :email, :balances
end
