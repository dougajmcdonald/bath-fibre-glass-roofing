import PropTypes from "prop-types"
import React from "react"

import Phone from "../svg/call-outline.svg"
import MobilePhone from "../svg/phone-portrait-outline.svg"
import Email from "../svg/mail-outline.svg"
import Website from "../svg/globe-outline.svg"


const Header = () => (
  <footer
    className="bg-gray-800 font-body flex"
    style={{ minHeight: `220px` }}
  >
    <div className="w-4/5 md:w-1/3 mx-auto text-white flex flex-column flex-wrap py-16">
      <span className="w-full text-center text-l">For more information or to make a general enquiry please contact us</span>
      <section className="w-1/2 text-center text-white">
        <ul className="text-white">
          <li><Phone className="w-4 h-4 mr-4 inline-block" />01761 436692</li>
          <li><MobilePhone className="w-4 h-4 mr-4 inline-block" />07966 232134</li>
        </ul>
      </section>
      <section className="w-1/2 text-center">
        <ul>
          <li><Email className="w-4 h-4 mr-4 inline-block" />email@domain.com</li>
          <li><Website className="w-4 h-4 mr-4 inline-block" />www.website.com</li>
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
