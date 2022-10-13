import React, {useState, useEffect} from 'react'
import './home.css';
import ReviewComponent from '../components/ReviewComponent';

function Home() {
    let [displayContent, setDisplayContent] = useState(null)

    useEffect(() => {
      fetch("http://localhost:1337/api/newsposts")
        .then((resp) => resp.json())
        .then((data) => setDisplayContent(data));
    }, [])

    let arrOfData = (displayContent ? displayContent.data : "")

    let mapOfData = (displayContent ? arrOfData.map(item => {
        return (
            <ReviewComponent
                key={item.id}
                item={item}
                />
        )
    }) : "")

  return (
    <div id="wholepage">
      <div id="centerpage">
        <h1 id="heading">Strapi CMS Overview</h1>
        <p id="subtext">A quick product description of what we can expect using Strapi!</p>
      </div>
      <div id="map">
        {mapOfData}
      </div>
    </div>
  )
}

export default Home