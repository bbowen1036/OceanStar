class ChangeCartItemColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :cart_items, :cart_key
    add_column :cart_items, :cart_key, :float
  end
end
