import React from 'react'

import { ReactComponent as XIcon } from '../static/x-icon.svg'
import { ReactComponent as LinkedinIcon } from '../static/linkedin-icon.svg'
import { ReactComponent as MailIcon } from '../static/mail-icon.svg'

import './SocialIcons.scss'

const SocialIcons = () => {
  return (
    <div className='socialContent'>
      <a rel='noreferrer' href='mailto:hi@nicofetter.com'><MailIcon width={60} /></a>
      <a rel='noreferrer' href='https://www.linkedin.com/in/nicofetter/' target='_blank'><LinkedinIcon width={50} /></a>
      <a rel='noreferrer' href='https://x.com/nicofetter' target='_blank'><XIcon width={50} /></a>
    </div>
  )
}

export default SocialIcons