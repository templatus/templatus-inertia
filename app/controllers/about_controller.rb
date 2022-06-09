class AboutController < ApplicationController
  def show
    render inertia: 'About/Show', props: { features: Features.new.data }
  end
end
