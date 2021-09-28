import HttpRequest from '../../HttpRequest'

class PostRequest extends HttpRequest {
  getListPosts (page, per_page) {
    return this.get('/posts', {page: page, per_page: per_page})
  }

  getPostById (postId) {
    return this.get(`/posts/${postId}`)
  }

  getPostsByCatId (catId, page, per_page) {
    return this.get(`/categories/${catId}/posts`, {page: page, per_page: per_page})
  }
}

export default new PostRequest()
