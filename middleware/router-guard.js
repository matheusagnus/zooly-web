export default function({ store, redirect }) {
  const token = sessionStorage.getItem('token')

  if (token == null || store.state.auth.token == null) {
    return redirect ('/auth/login')
  }
}
