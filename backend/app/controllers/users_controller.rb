class UsersController < ApplicationController
  before_action :set_user, only: %i[show destroy update]

  def index
    users = User.all
    render json: users
  end

  def show
    render json: @user
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def update
    @user = User.update(user_params)
    render json: @user
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

    def set_user
      @user = User.find_by_any_params(params[:id])
      @user ? @user : (render json: { :message => "User not found." })
    end
end
