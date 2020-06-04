class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :sku_number
      t.string :color
      t.integer :size_s_quantity 
      t.integer :size_m_quantity
      t.integer :size_l_quantity 
      t.integer :size_xxl_quantity 
      t.string :description
      t.string :image
      t.float :price
      t.string :category
      t.timestamps
    end
  end
end
