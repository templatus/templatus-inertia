describe 'Basic functionality' do
  before { visit root_path }

  it 'can navigate between pages' do
    click_link_or_button 'About'
    expect(page).to have_css('main h1', text: 'About')

    click_link_or_button 'Home'
    expect(page).to have_css('main h1', text: 'Hello')
  end

  it 'can click button and see results' do
    expect(page).to have_css('main h1', text: 'Hello, Templatus!')
    expect(page).to have_css('#counter', text: '0')

    click_link_or_button 'Click me!'

    expect(page).to have_css('#counter', text: '1')
    expect(page).to have_css('ul', text: '127.0.0.0')
    expect(page).to have_css('li', count: 1)
    expect(page).to have_css('#flash', text: 'successfully')
  end
end
