class Api::TacosController < ApplicationController

  def index
    render json: current_user.tacos 
  end

  def create 
    @taco = current_user.tacos.new(taco_params)
    if @taco.save
      render json: @taco
    else
      render json: { errors: @taco.errors}, status: :unprocessable_entity
    end
  end

  def update 
    @taco = current_user.tacos.find(params[:id])
    if @taco.update(taco_params)
      render json: @taco
    else
      render json: { errors: @taco.errors}, status: :unprocessable_entity
    end
  end

  def destroy 
    @taco = current_user.tacos.find(params[:id])
    @taco.destroy
    render json: { message: 'Taco is eaten' }
  end

  private 
    def taco_params
      params.require(:taco).permit(:filling, :topping, :sauce, :kind)
    end

end