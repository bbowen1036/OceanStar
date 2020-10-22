class RemoveIndexCartItem < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :cart_id
    remove_column :cart_items, :cart_id

    add_column :cart_items, :cart_key, :string
    add_index :cart_items, :cart_key
  end
end
