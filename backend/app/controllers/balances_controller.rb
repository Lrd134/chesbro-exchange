class BalancesController < ApplicationController
before_action :set_balance, only: %i[show update destroy]

  def index
    @balances = Balance.all
    render json: balance_serializer(@balances, {:is_collection => true})
  end
  
  def show
    render json: balance_serializer(@balance)
  end
  
  def create
    @balance = Balance.exists params.require(:balance).permit(:user_id, :token_id)

    if @balance
      @balance.update(balance: @balance.balance + params.require(:balance).permit(:balance)[:balance].to_f)
    else
      @balance = Balance.create(balance_params)
    end

    if @balance
      render json: balance_serializer(@balance)
    else
      render json: {message => "Deposit Failed"}
    end
  end

  def update
    @balance.update(balance_params) ? (render json: balance_serializer(@balance)) : (render json: {message => "Failed to update balance"})   
  end

  def destroy
    if @balance
      @balance.destroy
      render json: {message => "Destroyed Successfully."}
    else
      render json: {message => "Failed to delete balance."}
    end
  end

  private
    def set_balance
      @balance = Balance.find(params[:id])
    end

    def balance_serializer(balance, options = nil)
      !options ? BalanceSerializer.new(balance).serialized_json : BalanceSerializer.new(balance, options).serialized_json
    end

    def balance_params
      params.require(:balance).permit(:user_id, :token_id, :balance)
    end

end