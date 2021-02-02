import React from 'react'
import moment from 'moment'

const Article = ({ title, snippet, date, length }) => {
  console.log(date)
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>
          <strong>Date:</strong> {moment(date).format('MMM Do, YYYY')}.
        </span>
        <span>About {length} min to read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
