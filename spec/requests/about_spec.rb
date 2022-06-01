describe 'About' do
  describe 'GET /index' do
    before { InertiaRails.configure { |config| config.version = '1.0' } }

    let(:inertia_headers) do
      {
        'Accept' => 'application/json',
        'X-Inertia' => true,
        'X-Inertia-Version' => '1.0',
      }
    end

    it 'returns existing clicks' do
      get '/about', headers: inertia_headers

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to include(
        'props' => hash_including('features'),
      )
    end
  end
end
