class RoleSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_by, :created_at, :updated_by, :updated_at, :active, :admin, :users

  def created_at
    t = object.created_at
    t.strftime("%m/%d/%Y %I:%M:%S %p")
  end

  def updated_at
    t = object.updated_at
    t.strftime("%m/%d/%Y %I:%M:%S %p")
  end
end
