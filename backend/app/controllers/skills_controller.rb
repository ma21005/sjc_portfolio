class SkillsController < ApplicationController
  def index
    @skills = Skill.includes(:technology).all
    render json: @skills.as_json(include: :technology)
  end
end
