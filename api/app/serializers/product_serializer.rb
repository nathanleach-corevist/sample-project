class ProductSerializer < ActiveModel::Serializer
  attributes :id, :material_number, :description, :available_quantity, :unit_price
end
