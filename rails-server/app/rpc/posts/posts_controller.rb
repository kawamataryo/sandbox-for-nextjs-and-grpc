module Posts
  class PostsController < ::Gruf::Controllers::Base
    bind ::Posts::Posts::Service

    def get_posts
      ::Posts::GetPostsResponse.new(post: ::Posts::Post.new(id: 1, title: 'タイトル', content: '記事内容'))
    end
  end
end
