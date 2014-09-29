class VineController < ApplicationController

  def get_vines
    render json: Vine.get_popular_vines
  end



end
