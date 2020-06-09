export default function({ store, redirect }) {
  const token = sessionStorage.getItem('token')

  if (token == null) {
    return redirect ('/auth/login')
  }
}
