module Vine

  def self.hello
    "hello!"
  end

  def self.get_popular_vines
    HTTParty.get('https://api.vineapp.com/timelines/popular')
  end

end
