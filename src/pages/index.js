import * as React from 'react'

import '../theme/reset.css'
import './styles.scss'
import SocialIcons from '../components/SocialIcons'

const IndexPage = () => {
  return (
    <main className='main'>
      <div className='content'>
        <h1>Nicolás Fetter</h1>
        <p>Javascript Fullstack Developer & Tech Leader | 10+ Years of experience</p>
        <SocialIcons size='1px' />
        <a rel='noreferrer' href='mailto:hi@nicofetter.com'>hi@nicofetter.com</a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Nicolás Fetter | Fullstack Developer & Technical Leader</title>
