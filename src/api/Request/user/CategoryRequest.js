import HttpRequest from '../../HttpRequest'

class CategoryRequest extends HttpRequest {
  getListCategories () {
    return this.get('/categories')
  }

  getCategoryById (catId) {
    return this.get(`/categories/${catId}`)
  }
}

export default new CategoryRequest()
