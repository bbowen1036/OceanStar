class AddCartIdToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :cart_token, :integer
  end
  
end
