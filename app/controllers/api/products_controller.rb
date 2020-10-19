class Api::ProductsController < ApplicationController

  def index
    # sleep 0.5
    @products = Product.all
    render :index
  end


  def show
    sleep 0.5
    @product = Product.find(params[:id])
    if @product
      render :show
    else
      render json: ["sorrry"], status: 401
    end
  end

  def create
    @product = Product.create!(product_params)
    render :show
  end


  def destroy
    @product = Product.find(params[:id])
    @product.destroy!
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :category_id, :description)
  end
end
