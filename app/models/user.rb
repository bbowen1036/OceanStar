# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  cart_token      :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :products

  has_many :cart_items, 
    foreign_key: :customer_id,
    class_name: :CartItem


    belongs_to :cart_item,
        foreign_key: :cart_token,
        class_name: :CartItem




  after_initialize :ensure_session_token, :ensure_cart_token
    ## S P I R E

    attr_reader :password 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end

    def password=(password) 
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token! 
        self.session_token = SecureRandom::urlsafe_base64
        self.save! 
        self.session_token 
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end


    def reset_cart_token!
        self.cart_token = SecureRandom::urlsafe_base64
        self.save!
        self.cart_token
    end

    def ensure_cart_token
        self.cart_token ||= SecureRandom::urlsafe_base64
    end


end
