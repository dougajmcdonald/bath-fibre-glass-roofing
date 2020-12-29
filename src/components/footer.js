import PropTypes from "prop-types"
import React from "react"

import Phone from "../svg/call-outline.svg"
import MobilePhone from "../svg/phone-portrait-outline.svg"
import Email from "../svg/mail-outline.svg"
import Website from "../svg/globe-outline.svg"

const Header = () => (
  <footer className="bg-gray-800 font-body flex" style={{ minHeight: `220px` }}>
    <div className="w-4/5 md:w-1/3 mx-auto text-white flex flex-row md:flex-column flex-wrap justify-center py-10 md:py-16">
      <span className="w-full text-center md:text-l">
        For more information or to make a general enquiry please contact us
        using the details below
      </span>
      <section className="md:w-1/2 md:text-center text-white my-2 pt-6">
        <ul>
          <li>
            <Website className="w-4 h-4 mr-4 my-2 inline-block" />
            <a href="https://www.bathfibreglassroofing.com">
              https://www.bathfibreglassroofing.co.uk
            </a>
          </li>
          <li>
            <Email className="w-4 h-4 mr-4 my-2 inline-block" />
            <a href="mailto:wj@bathfibreglassroofing.co.uk">
              wj@bathfibreglassroofing.co.uk
            </a>
          </li>
          <li>
            <Phone className="w-4 h-4 mr-4 my-2 inline-block" />
            01761 436692
          </li>
          <li>
            <MobilePhone className="w-4 h-4 mr-4 my-2 inline-block" />
            07966 232134
          </li>
        </ul>
      </section>
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
