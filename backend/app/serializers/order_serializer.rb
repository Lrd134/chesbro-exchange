class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :amount, :user_id, :token
end
