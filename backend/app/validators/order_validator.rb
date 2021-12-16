class OrderValidator < ActiveModel::Validator
  def validate(record)
    unless !record.sell
      unless Balance.by_order record, record.user, record.token
        record.errors.add :amount, "You don't have enough of that token."
      end
    end
    
    if !record.sell
      unless Balance.by_order record, record.user, record.token
        record.errors.add :amount, "Please deposit more USD";
      end
    end
  end
  
end