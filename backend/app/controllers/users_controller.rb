class UsersController < ApplicationController
  before_action :set_user, only: %i[show destroy update]

  def index
    users = User.all
    options = {
      :is_collection => true
    }
    render json: serialize_user(users, options)
  end

  def show
    render json: serialize_user(@user)
  end

  def create
    @user = User.create(user_params)
    render json: serialize_user(@user)
  end

  def update
    @user = User.update(user_params)
    render json: serialize_user(@user)
  end

  def destroy
    @user.destroy
    message = { :message => "Destroyed Successfully." }
    render json: message
  end

  private
    def user_params
      params.require(:user).permit(:name, :email)
    end

    def serialize_user(user, options = nil)
      if !options
        UserSerializer.new(user).serialized_json
      else
        UserSerializer.new(user, options).serialized_json
      end
    end

    def set_user
      @user = User.find_by_any_params(params[:id])
      @user ? @user : (render json: { :message => "User not found." })
    end
end
