class TokensController < ApplicationController
  before_action :set_token, only: %i[show]
  
  def index
    @tokens = Token.all
    render json: serialize_token(@tokens, {:is_collection => true})
  end

  def show
    render json: serialize_token(@token)
  end

  private

    def token_params
      params.require(:token)
    end

    def serialize_token (token, options = nil)
      !options ? TokenSerializer.new(token).serialized_json : TokenSerializer.new(token, options).serialized_json
    end

    def set_token
      @token = Token.find(params[:id])
    end

end
