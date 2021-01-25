require 'rails_helper'

describe 'request spec', type: :request do
  describe 'GET /posts' do
    it 'success' do
      get '/posts'
      expect(response).to have_http_status(:ok)
      assert_response_schema_confirm
    end
  end

  describe 'POST /post' do
    it 'success' do
      post '/post', params: { title: 'タイトル', content: '記事内容' }, as: :json
      expect(response).to have_http_status(:ok)
      assert_request_schema_confirm
    end
  end
end
