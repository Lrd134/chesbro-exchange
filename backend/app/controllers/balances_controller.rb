class BalancesController < ApplicationController
before_action :set_balance, only: %i[show update destroy]

  def index
    @balances = Balance.all
    render json: @balances
  end
  
  def show
    render json: @balance
  end
  
  def create
    @balance = Balance.create(balance_params)
    if @balance
      render json: @balance
    else
      render json: {message => "Deposit Failed"}
    end
  end

  def update
    @balance.update(balance_params) ? (render json: @balance) : (render json: {message => "Failed to update balance"})   
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

    def balance_params
      params.require(:balance).permit(:user_id, :token_id, :balance)
    end

end