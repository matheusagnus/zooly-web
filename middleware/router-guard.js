export default function({ store, redirect }) {
  const token = sessionStorage.getItem('token')

  if (token == null && store.state.auth.token) {
    return redirect ('/auth/login')
  }
}
