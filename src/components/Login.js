import React from 'react'

function Login(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function onEmailChange(e) {
    setEmail(e.target.value)
  }

  function onPasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit(email, password)
  }

  return (
    <main className="main">
      <section className="entry-page">
        <h1 className="entry-page__title">Вход</h1>
        <form
          className="entry-page__form"
          name="sign-in-form"
          onSubmit={handleSubmit}
        >
          <input
            className="entry-page__input"
            type="email"
            placeholder="Email"
            name="email"
            minLength="2"
            maxLength="40"
            value={email}
            onChange={onEmailChange}
            required
          />
          <input
            className="entry-page__input"
            type="password"
            placeholder="Пароль"
            name="password"
            minLength="3"
            maxLength="10"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <button className="entry-page__button" type="submit">
            Войти
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login
