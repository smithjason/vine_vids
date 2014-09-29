class ApplicationController < ActionController::Base
  include Vine

  # module VineAPI

  #   def self.hello
  #     "hello!"
  #   end

  #   def self.get_popular_vines
  #     HTTParty.get('https://api.vineapp.com/timelines/popular')
  #   end

  # end


  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
