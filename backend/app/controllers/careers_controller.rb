class CareersController < ApplicationController
  def index
    @careers = Career.includes(:technologies).all
    render json: @careers, include: :technologies
  end
end
