class EditProductCategoryIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, :category_id
    add_index :products, :category_id
  end
end
