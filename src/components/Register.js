import React from 'react'
import { Link } from 'react-router-dom'

function Register(props) {
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
        <h1 className="entry-page__title">Регистрация</h1>
        <form
          className="entry-page__form"
          name="sign-up-form"
          onSubmit={handleSubmit}
        >
          <input
            className="entry-page__input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onEmailChange}
            required
          />
          <input
            className="entry-page__input"
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={onPasswordChange}
            required
          />
          <button className="entry-page__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <Link to="/sign-in" className="entry-page__link">
          Уже зарегистрированы? Войти
        </Link>
      </section>
    </main>
  )
}

export default Register
