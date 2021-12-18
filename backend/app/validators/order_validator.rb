class OrderValidator < ActiveModel::Validator
  def validate(record)
    def helper order, user, token
      price = {
        "btc" => 50000.0,
        "eth" => 4000.0,
        "doge" => 0.15,
        "bnb" => 500.0,
        "usdt" => 1.0
      }

      if !order.sell
        @usd = Token.find_by(ticker: "usd")
        @bal = Balance.where(user_id: user.id, token_id: @usd.id)[0]
        @amount = order.amount * price[token.ticker.downcase]
      else
        @amount = order.amount
        @bal = Balance.where(user_id: user.id, token_id: token.id)[0]
      end
      if @bal.balance < @amount
        return false
      else
        @bal.update(balance: @bal.balance - @amount)
        @amount = 0;
      end

        if @amount == 0
          return true;
        end

    end



    unless !record.sell
      unless helper record, record.user, record.token
        record.errors.add :amount, "You don't have enough of that token."
      end
    end
    
    if !record.sell
      unless helper record, record.user, record.token
        record.errors.add :amount, "Please deposit more USD";
      end
    end
  end
  
end