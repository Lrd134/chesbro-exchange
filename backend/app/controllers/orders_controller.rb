class OrdersController < ApplicationController
  before_action :set_order, only: %i[show update destroy]

  def index
    @orders = Order.all
    render json: serialize_order(@orders, {:is_collection => true})
  end

  def show
    render json: serialize_order(@order)
  end

  def create
    @token = Token.find_by(params.require(:order).permit(:ticker))
    params[:order][:token_id] = @token.id
    @order = Order.create(order_params)

    if @order.errors.messages != {}
      render json: {:message => @order.errors.messages[:amount]}
    else
      render json: serialize_order(@order)
    end

  end

  def update
    @order.update(order_params)
    render json: serialize_order(@order)
  end

  def destroy
    if @order
      @order.destroy
      render json: {:message => "User Destroyed Successfully."}
    else
      render json: {:message => "User not found."}
    end
  end

  private
    def set_order
      @order = Order.find(params[:id])
    end

    def order_params
      params.require(:order).permit(:user_id, :token_id, :amount, :sell)
    end
    
    def serialize_order(order, options = nil)
      if !options
        OrderSerializer.new(order).serialized_json
      else
        OrderSerializer.new(order, options).serialized_json
      end
    end
end