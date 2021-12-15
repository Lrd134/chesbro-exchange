class Token < ApplicationRecord
  has_many :balances
  has_many :orders
end
