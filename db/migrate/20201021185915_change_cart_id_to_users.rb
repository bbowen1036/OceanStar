class ChangeCartIdToUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :cart_token
    add_column :users, :cart_token, :string
  end
end
