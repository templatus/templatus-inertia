describe 'Clicks', :inertia do
  include ActiveSupport::Testing::TimeHelpers

  let(:user_agent) { 'Netscape Navigator' }
  let(:ip) { '1.2.3.4' }

  describe 'POST /clicks' do
    let(:user_agent) { 'Netscape Navigator' }

    def call(ip)
      post clicks_path,
           headers: {
             HTTP_USER_AGENT: user_agent,
             REMOTE_ADDR: ip,
           }

      expect_inertia.to render_component('Clicks/Index')
    end

    context 'when IPv4' do
      let(:ipv4) { '1.2.3.4' }

      it 'saves click' do
        call(ipv4)

        expect(response).to have_http_status(:created)
        expect(inertia.props[:flash]).to eq(
          { notice: 'Click was successfully recorded.' },
        )
        expect(Click.last.ip).to eq('1.2.3.0')
        expect(Click.last.user_agent).to eq(user_agent)
      end
    end

    context 'when IPv6' do
      let(:ipv6) { '2001:db8::1' }

      it 'saves click' do
        call(ipv6)

        expect(response).to have_http_status(:created)
        expect(inertia.props[:flash]).to eq(
          { notice: 'Click was successfully recorded.' },
        )
        expect(Click.last.ip).to eq('2001:0db8:0:0:0:0:0:0')
        expect(Click.last.user_agent).to eq(user_agent)
      end
    end

    context 'when saving fails' do
      let(:ipv6) { 'invalid' }

      it 'fails and returns http failure' do
        call(ipv6)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(inertia.props[:flash]).to eq(
          { alert: 'Click recording failed!' },
        )
      end
    end
  end

  describe 'GET /' do
    let!(:click) { Click.create! ip:, user_agent: }

    it 'renders existing clicks' do
      get '/'

      expect(response).to have_http_status(:ok)
      expect_inertia.to render_component('Clicks/Index')
      expect_inertia.to have_exact_props(total: 1, items: [click], flash: {})
    end
  end
end
