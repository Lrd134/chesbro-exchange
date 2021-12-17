class Balance < ApplicationRecord
  belongs_to :token
  belongs_to :user
  validates :balance, numericality: { greater_than_or_equal_to: 0.0 }
  after_update :check_balance

  def check_balance
    if self.balance <= 0
      self.destroy
    end
  end

  def self.exists params
    Balance.where(user_id: params[:user_id], token_id: params[:token_id])[0]
  end

end
