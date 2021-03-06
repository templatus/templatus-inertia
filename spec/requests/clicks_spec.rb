describe 'Clicks', inertia: true do
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
      expect_inertia.to have_exact_props({})

      expect(Click.last.user_agent).to eq(user_agent)
    end

    context 'when IPv4' do
      let(:ipv4) { '1.2.3.4' }

      it 'saves click' do
        call(ipv4)

        expect(Click.last.ip).to eq('1.2.3.0')
      end
    end

    context 'when IPv6' do
      let(:ipv6) { '2001:db8::1' }

      it 'saves click' do
        call(ipv6)

        expect(Click.last.ip).to eq('2001:0db8:0:0:0:0:0:0')
      end
    end
  end

  describe 'GET /' do
    let!(:click) { Click.create! ip:, user_agent: }

    it 'renders existing clicks' do
      get '/'

      expect_inertia.to render_component('Clicks/Index')
      expect_inertia.to have_exact_props(total: 1, items: [click])
    end
  end
end
