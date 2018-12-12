class DashboardController < ApplicationController
  def index
  	load_recent_listened
  	load_recommendations
  end


  private

  def load_recent_listened
  	@recent_albums = current_user.recently_listeneds.order('created_at DESC').limit(4).map(&:album)
  end

  def load_recommendations
  	listened_categories = @recent_albums.map(&:category)
  	@recomended_albums = Album.joins(:category, :songs).where(category: listened_categories).order("songs.played_count")
  							  .select("distinct albums.*").limit(4)
  end
end
