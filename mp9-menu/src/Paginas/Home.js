import React from 'react'

const href="https://medium.com/@simonhoyos/creemos-un-blog-con-react-y-c%C3%B3mo-enrutar-nuestra-aplicaci%C3%B3n-con-react-router-parte-ii-44835476bbcf"

const Home = () => (
  <section>
    <h3>Desde Formadores IT</h3>
    <p>Nuestra aplicación con React y Route</p>
    <p>Otro ejemplo <a href={href}>aquí</a></p>
  </section>
)

export default Home;