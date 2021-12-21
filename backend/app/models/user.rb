class User < ApplicationRecord
  has_many :balances, dependent: :destroy
  has_many :orders, dependent: :destroy
  def self.find_by_any_params params
    params.match(/\D/) ? self.find_by_name(params) : self.find(params)
  end
end
