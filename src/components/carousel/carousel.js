import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ImageTemplate from "./image-template"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { useWindowSize } from '../utils/window-size';

const CarouselContainer = styled.div`
  overflow-x: hidden;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
`
const Dots = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  right: 50%;
  bottom: 25px;
  z-index: 5;
  transform: translate(50%);
`
const Dot = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 1rem;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.6);
  z-index: 5;
  &:last-child {
    margin: 0;
  }
`
const Images = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  transition: 0.8s ease-in-out;
  transform: translateX(${({ translateX }) => `${translateX}px`});
`

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/hero-content/" }
        }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                header
                subheader
                linkTo
                linkName
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const arrLength = data.allFile.edges.length;
  const [translateX, setTranslateX] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  let timer = null
  const size = useWindowSize()

  function nextImage(){
    if(currentImage + 1 >= arrLength){
      setCurrentImage(0);
      setTranslateX(0);
    }
    else{
      setTranslateX(currentImage + 1 * -size.width)
      setCurrentImage(currentImage + 1)
    }
  }

  function goToImage(e) {
    clearInterval(timer);
    const id = e.currentTarget.id
    setCurrentImage(id);
    setTranslateX(-size.width * id);
  }

  useEffect(() => {
    setTranslateX(currentImage * -size.width)
    timer = setInterval(nextImage, 4000)
    return ()=>clearInterval(timer);
  }, [currentImage, size.width])

  return (
    <CarouselContainer>
      <Images translateX={translateX}>
        {data.allFile.edges.map(data => {
          return <ImageTemplate key={data.node.id} data={data} />
        })}
      </Images>
      <Dots>
        {data.allFile.edges.map((data, index) => {
          return (
            <Dot icon={faCircle} key={index} id={index} onClick={goToImage} />
          )
        })}
      </Dots>
    </CarouselContainer>
  )
}

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       translateX: 0,
//       currentImage: 0,
//       imagesLength: 0,
//     }
//     this.timer = null
//     this.goToImage = this.goToImage.bind(this)
//     this.resetTimer = this.resetTimer.bind(this)
//   }
//   resetTimer() {
//     clearInterval(this.timer)
//     this.timer = setInterval(this.nextImage, 1000)
//   }
//   componentDidMount() {
//     this.resetTimer()
//   }
//   nextImage() {
//     const { currentImage, imagesLength } = this.state
//     if (currentImage + 1 > imagesLength)
//       this.setState({
//         currentImage: 0,
//         translateX: 0,
//       })
//     else {
//     }
//   }
//   goToImage(e) {
//     const id = e.currentTarget.id
//     this.setState({ translateX: -window.innerWidth * id })

//     // calculate width and transform
//     // this.setState({translateX: -id * })
//   }
//   render() {
//     const { translateX } = this.state
//     return (
//       <StaticQuery
//         query={graphql`
//           query {
//             allFile(
//               filter: {
//                 sourceInstanceName: { eq: "content" }
//                 extension: { eq: "md" }
//                 relativeDirectory: { regex: "/hero-content/" }
//               }
//               sort: { fields: [dir], order: DESC }
//             ) {
//               edges {
//                 node {
//                   id
//                   childMarkdownRemark {
//                     frontmatter {
//                       header
//                       subheader
//                       image {
//                         childImageSharp {
//                           fluid(maxWidth: 800, quality: 80) {
//                             ...GatsbyImageSharpFluid_tracedSVG
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         render={data => (
//           <CarouselContainer>
//             <Images translateX={translateX}>
//               {data.allFile.edges.map(data => {
//                 return <ImageTemplate key={data.node.id} data={data} />
//               })}
//             </Images>
//             <Dots>
//               {data.allFile.edges.map((data, index) => {
//                 return (
//                   <Dot
//                     icon={faCircle}
//                     key={index}
//                     id={index}
//                     onClick={this.goToImage}
//                   />
//                 )
//               })}
//             </Dots>
//           </CarouselContainer>
//         )}
//       />
//     )
//   }
// }

export default Carousel
