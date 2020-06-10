export default function({ store, redirect }) {
  const token = sessionStorage.getItem('token')

  if (!token || !store.state.auth.token) {
    return redirect ('/auth/login')
  }
}
