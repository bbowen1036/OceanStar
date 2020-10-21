class Api::CartsController < ApplicationController
  def index
    @carts = Cart.all
  end


  def new
    @cart = Cart.new
  end

  def create
    @cart = Cart.create!
  end

end

