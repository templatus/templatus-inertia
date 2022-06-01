class AboutController < ApplicationController
  include FeaturesHelper

  def show
    render inertia: 'About/Show', props: { features: }
  end
end
