class Api::CartItemsController < ApplicationController
 

  # before_action :set_cart_item, only: [:show, :edit, :update, :destroy]
  # before_action :current_shopping_cart, only: [:create]

  # def index
  #   @cart_items = CartItem.all
  # end

  # def show
  # end

  # def new
  #   @cart_item = CartItem.new
  # end

  # def create
  #   @product = Product.find(params[:product_id])
  #   @cart_item = @cart.add_product(@product)

  #   # respond_to do |format|
  #   #   if @cart_item.save
  #   #     format.html { redirect_to @cart_item.cart, notice: 'Line item was successfully created.' }
  #   #     format.json { render :show, status: :created, location: @cart_item }
  #   #   else
  #   #     format.html { render :new }
  #   #     format.json { render json: @cart_item.errors, status: :unprocessable_entity }
  #   #   end
  #   # end
  # end



  # private
  # def set_cart_item
  #   @cart_item = CartItem.find(params[:id])
  # end

  # def cart_item_params
  #   params.require(:cart_item).permit(:product_id)
  # end

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
      params.require(:cartItem).permit(:product_id, :quantity, :customer_id, :cart_id)
  end



end
