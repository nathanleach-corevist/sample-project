require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  it_behaves_like "api_controller"

  # This should return the minimal set of attributes required to create a valid
  # User. As you add validations to User, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    { first_name: "John", last_name: "Doe", username: "jdoe", email: "john.doe@example.com", phone: "123456789", password: "password", password_confirmation: "password" }
  }

  let(:invalid_attributes) {
    { first_name: "John", last_name: "Doe", username: nil, email: "john.doe@example.com", phone: "123456789" }
  }

  let!(:user) { User.create(valid_attributes) }

  describe "GET #index" do
    it "assigns all users as @users" do
      get :index, params: { format: :json }
      expect(assigns(:users)).to eq([user])
    end
  end

  describe "GET #show" do
    it "assigns the requested user as @user" do
      get :show, params: { id: user.id, format: :json }
      expect(assigns(:user)).to eq(user)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new User" do
        expect {
          post :create, params: { user: valid_attributes, format: :json  }
        }.to change(User, :count).by(1)
      end

      it "assigns a newly created user as @user" do
        post :create, params: { user: valid_attributes, format: :json  }
        expect(assigns(:user)).to be_a(User)
        expect(assigns(:user)).to be_persisted
      end
    end

    context "with invalid params" do
      it "assigns a newly created but unsaved user as @user" do
        post :create, params: { user: invalid_attributes, format: :json  }
        expect(assigns(:user)).to be_a_new(User)
      end

      it "returns unprocessable_entity status" do
        put :create, params: { user: invalid_attributes }
        expect(response.status).to eq(422)
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        { first_name: "Jane", last_name: "Poe", username: "jpoe", email: "jane.poe@example.com", phone: "987654321" }
      }

      it "updates the requested user" do
        put :update, params: { id: user.id, user: new_attributes, format: :json  }
        user.reload
        expect(user.first_name).to eq("Jane")
        expect(user.last_name).to eq("Poe")
        expect(user.username).to eq("jpoe")
        expect(user.email).to eq("jane.poe@example.com")
        expect(user.phone).to eq("987654321")
      end

      it "assigns the requested user as @user" do
        put :update, params: { id: user.id, user: valid_attributes, format: :json  }
        expect(assigns(:user)).to eq(user)
      end
    end

    context "with invalid params" do
      it "assigns the user as @user" do
        put :update, params: { id: user.id, user: invalid_attributes, format: :json  }
        expect(assigns(:user)).to eq(user)
      end

      it "returns unprocessable_entity status" do
        put :update, params: { id: user.id, user: invalid_attributes, format: :json }
        expect(response.status).to eq(422)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested user" do
      expect {
        delete :destroy, params: { id: user.id, format: :json  }
      }.to change(User, :count).by(-1)
    end

    it "redirects to the users list" do
      delete :destroy, params: { id: user.id, format: :json  }
      expect(response.status).to eq(204)
    end
  end

end
