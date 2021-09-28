import HttpRequest from '../HttpRequest'

class AuthRequest extends HttpRequest {
  login (credentials) {
    return this.post('/oauth/token', credentials)
  }
}

export default new AuthRequest()
