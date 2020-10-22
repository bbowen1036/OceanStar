class ApplicationController < ActionController::Base
   skip_before_action :verify_authenticity_token
    ## C  R  L  L  L 

    helper_method :current_user, :logged_in?
    # before_action :current_user, :current_shopping_cart

    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end
  
    def require_log_in!
      render json: ['Invalid credentials'] unless logged_in?
    end
  
    def logged_in?
      !!current_user
    end
  
    def login!(user)
      user.reset_session_token!
      session[:session_token] = user.reset_session_token!
      @current_user = user
    end
  
    def logout!
      current_user.reset_session_token! if logged_in?
      session[:session_token] = nil
    end

    def current_shopping_cart 
      if logged_in? 
        @cart = @current_user.cart
      else
        if session[:cart]
          @cart = Cart.find(session[:cart])
        else
          @cart = Cart.create
          session[:cart] = @cart.id
        end
      end
    end



    

end
