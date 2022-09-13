describe 'About', inertia: true do
  describe 'GET /show' do
    it 'render features' do
      get '/about'

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component('About/Show')
      expect_inertia.to include_props(:features)
    end
  end
end
