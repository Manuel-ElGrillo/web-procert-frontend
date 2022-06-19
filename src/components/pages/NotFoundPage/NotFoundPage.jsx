import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/img/logo-2.png"
import "./NotFoundPage.css"

const NotFoundPage = ({title, href, linkText}) => {
  return (
    <>
    
        <section className="not-found">

            <div className="not-found__content">

                <img src={logo} alt="Procert logo" />

                <h1>{title}</h1>

                <Link to={href}>{linkText}</Link>

            </div>

        </section>
    
    </>
  )
}

export default NotFoundPage