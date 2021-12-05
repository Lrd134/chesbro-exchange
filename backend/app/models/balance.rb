class Balance < ApplicationRecord
  belongs_to :token
  belongs_to :user

end
