describe 'About', inertia: true do
  describe 'GET /show' do
    it 'render features' do
      get '/about'

      expect_inertia.to render_component('About/Show')
      expect_inertia.to include_props(:features)
    end
  end
end
