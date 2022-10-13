import React from 'react'
import './ReviewComponent.css';

function ReviewComponent({item}) {

    let body = (item ? item.attributes.body : "")
    let imageUrl = (item ? item.attributes.imageUrl : "")
    let locale = (item ? item.attributes.locale : "")
    let title = (item ? item.attributes.title : "")
    let writtenBy = (item ? item.attributes.writtenBy : "")

  return (
    <div id="wholecard">
        <h1>{title}</h1>
        <img id="images" src={imageUrl}/>
        <p id="body">{body}</p>
    </div>
  )
}

export default ReviewComponent