class OrderValidator < ActiveModel::Validator
  def validate(record)
    def helper order, user, token
      price = {
        "btc" => 50000.0,
        "eth" => 4000.0,
        "doge" => 0.15,
        "bnb" => 500,
        "usdt" => 1
      }

      if !order.sell
        @usd = Token.find_by(ticker: "usd")
        @bals = Balance.where(user_id: user.id, token_id: @usd.id)
        @amount = order.amount * price[token.ticker]
      else
        @amount = order.amount
        @bals = Balance.where(user_id: user.id, token_id: token.id)
      end

      @total = 0;
      @bals.each { | bal | @total += bal.balance }

      if @total < @amount
        return false
      else
        @bals.each do | bal | 
          if bal.balance <= @amount && @amount != 0
            @amount -= bal.balance
            bal.update(balance: 0)
          elsif bal.balance >= @amount && @amount != 0
            bal.update(balance: bal.balance - @amount)
            @amount = 0;
          end
        end

        if @amount == 0
          return true;
        end

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