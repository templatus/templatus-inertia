describe 'About', :inertia do
  describe 'GET /show' do
    it 'render features' do
      get '/about'

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component('About/Show')
      expect(inertia.props[:features]).to be_present
    end
  end
end
