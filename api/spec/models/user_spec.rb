require 'rails_helper'

RSpec.describe User, type: :model do

  describe "db structure" do
    it { is_expected.to have_db_column(:first_name).of_type(:string) }
    it { is_expected.to have_db_column(:last_name).of_type(:string) }
    it { is_expected.to have_db_column(:username).of_type(:string) }
    it { is_expected.to have_db_column(:email).of_type(:string) }
    it { is_expected.to have_db_column(:phone).of_type(:string) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:username) }
  end

end
