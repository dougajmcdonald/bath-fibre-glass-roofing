import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <footer
    className="bg-gray-800 font-body flex"
    style={{ minHeight: `220px` }}
  >
    <div className="w-4/5 md:w-1/3 mx-auto text-white flex flex-column flex-wrap py-16">
      <span className="w-full text-center text-l">For more information or to make a general enquiry please contact us</span>
      <section className="w-1/2 text-center">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className="w-1/2 text-center">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </section>
      <span className="w-full text-center text-primary mt-8">
        © {new Date().getFullYear()}, built with
        {` `}
        <a className="text-primary" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </span>
    </div>
  </footer>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
