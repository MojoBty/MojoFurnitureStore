import React, {useState, useEffect} from "react"

import Product from "./Product"
import furniture from "../resources/furnitureData.js"
import leftArrow from "../resources/leftarrow.png"
import rightArrow from "../resources/rightarrow.png"


const FeatureDisplay = () => {

  const [transitioningR, setTransitioningR] = useState(false)
  const [transitioningL, setTransitioningL] = useState(false)
  const [firstProductIndex, setFirstProductIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })
  
  const backClick = () => {
    setTransitioningR(true)
    setTimeout(() => {
      setFirstProductIndex((prevIndex) => 
        prevIndex === 0 ? featureProducts.length - 1 : prevIndex - 1
      );
      setTransitioningR(false)
    }, 300)
    
  }

  const forwardClick = () => {
    setTransitioningL(true)
    setTimeout(() => {
      setFirstProductIndex((prevIndex) => 
      (prevIndex + 1) % featureProducts.length);
      setTransitioningL(false)
    }, 300)
  }

  const featureProducts = furniture.slice(0,6)

  const secondProductIndex = ((firstProductIndex + 1) % featureProducts.length)
  const thirdProductIndex = ((firstProductIndex + 2) % featureProducts.length)
  const fourthProductIndex = ((firstProductIndex + 3) % featureProducts.length)
  const fifthProductIndex = ((firstProductIndex + 4) % featureProducts.length)


  return (
    <div className="feature-display-container">
      <div className="feature-text">
        <span>what's popular right now?</span>
      </div>
      <div className="sliding-showcase">
        <div className="arrow-container">
          <button className="arrow-button" onClick={backClick}><img src={leftArrow} style={{height: "50px"}}/></button>
          <button className="arrow-button" onClick={forwardClick}><img src={rightArrow} style={{height: "50px"}}/></button>
        </div>
        <div className="feature-display">
          <div className="feature-items">
            <Product padding = "30px"
              id = {featureProducts[firstProductIndex].id}
              name = {featureProducts[firstProductIndex].name}
              img = {featureProducts[firstProductIndex].img}
              price ={featureProducts[firstProductIndex].price}
              description ={featureProducts[firstProductIndex].description}
              transition = {transitioningR ? 'enter' : (transitioningL ? 'exit' : '')}
            />
          </div>
          <div>
          <Product padding = "30px"
              id = {featureProducts[secondProductIndex].id}
              name = {featureProducts[secondProductIndex].name}
              img = {featureProducts[secondProductIndex].img}
              price ={featureProducts[secondProductIndex].price}
              description ={featureProducts[secondProductIndex].description}
              transition = {transitioningR ? 'enter' : (transitioningL ? 'exit' : '')}
          />
          </div>
          <div>
          <Product padding = "30px"
              id = {featureProducts[thirdProductIndex].id}
              name = {featureProducts[thirdProductIndex].name}
              img = {featureProducts[thirdProductIndex].img}
              price ={featureProducts[thirdProductIndex].price}
              description ={featureProducts[thirdProductIndex].description}
              transition = {transitioningR ? 'enter' : (transitioningL ? 'exit' : '')}
          />
          </div>
          <div>
          <Product padding = "30px"
              id = {featureProducts[fourthProductIndex].id}
              name = {featureProducts[fourthProductIndex].name}
              img = {featureProducts[fourthProductIndex].img}
              price ={featureProducts[fourthProductIndex].price}
              description ={featureProducts[fourthProductIndex].description}
              transition = {transitioningR ? 'enter' : (transitioningL ? 'exit' : '')}
          />
          </div>
          <div>
          <Product padding = "30px"
              id = {featureProducts[fifthProductIndex].id}
              name = {featureProducts[fifthProductIndex].name}
              img = {featureProducts[fifthProductIndex].img}
              price ={featureProducts[fifthProductIndex].price}
              description ={featureProducts[fifthProductIndex].description}
              transition = {transitioningR ? 'enter' : (transitioningL ? 'exit' : '')}
          />
        </div>
      </div>
    </div>
  </div>
  )
}


export default FeatureDisplay