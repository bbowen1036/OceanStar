class Api::CartItemsController < ApplicationController

  def index
    @cart_items = CartItem.all

    render :index
  end

  def show
    @cart_item = CartItem.find(params[:id])
    render :show
  end


  def create
      @cart_item = CartItem.new(cart_items_params)
      if @cart_item.save
          render :show
      else
          render json: @cart_item.errors.full_messages, status: 422
      end
  end

  def update
      @cart_item = CartItem.find(params[:id])
      if @cart_item.update(cart_items_params)
          render :show
      else
          render json: @cart_item.errors.full_messages, status: 422
      end
  end

  def destroy
      @cart_item = CartItem.find(params[:id])
      @cart_item.destroy
      render :show
  end

  private
  def cart_items_params
      params.require(:cartItem).permit(:product_id, :quantity, :customer_id) #:cart_id
  end


end
