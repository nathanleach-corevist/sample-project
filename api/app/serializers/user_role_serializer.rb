class UserRoleSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :role
end
