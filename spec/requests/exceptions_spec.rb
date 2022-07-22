describe 'Exception handling' do
  context 'when URL does NOT exist' do
    %w[
      /this-does-not-exist
      /this/does/not/exist
      /index.html
      /contribute.json
      /docker-compose.yml
      /jquery.js
      /babel.config.js
      /bootstrap.css
      /sitemap.xml
      /password.txt
      /picture.png
      /picture.gif
      /picture.jpg
      /picture.jpeg
      /wp-login.php
      /.git/config
      /../root
      /.env
      /.git
    ].each do |url|
      context "for #{url}" do
        it 'returns a 404 status code' do
          rails_respond_without_detailed_exceptions { get(url) }
          expect(response).to have_http_status(:not_found)
        end
      end
    end
  end
end
