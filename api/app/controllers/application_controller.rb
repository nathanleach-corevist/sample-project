class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  rescue_from ActiveRecord::RecordNotFound,       with: :not_found
  rescue_from ActionController::ParameterMissing, with: :missing_param_error

  def not_found
    render status: :not_found, json: ""
  end

  def missing_param_error(exception)
    render status: :unprocessable_entity, json: { error: exception.message }
  end

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized'}, status: 401 unless @current_user
  end
end
