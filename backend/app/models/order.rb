class Order < ApplicationRecord
  include ActiveModel::Validations
  validates_with OrderValidator
  belongs_to :user
  belongs_to :token
  has_many :balances, through: :user
  
end
