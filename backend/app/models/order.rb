class Order < ApplicationRecord
  belongs_to :user
  belongs_to :token
  has_many :balances, through: :user
end
