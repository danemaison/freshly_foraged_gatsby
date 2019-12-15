import React from 'react';
import styled from 'styled-components';
import ImageTemplate from './image-template';
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircle} from "@fortawesome/free-solid-svg-icons";


const CarouselContainer = styled.div`
  overflow-x:hidden;
  height: 500px;
  background-color:rgba(0,0,0,.25);
  position:relative;
  display:flex;
  justify-content:center;
`
const Dots = styled.div`
  position:absolute;
  display:flex;
  justify-content:center;
  width:100%;
  right:50%;
  bottom: 25px;
  z-index:5;
  transform:translate(50%);
`
const Dot = styled(FontAwesomeIcon)`
cursor:pointer;
  font-size:1rem;
  margin-right:10px;
  color:rgba(255, 255, 255, .6);
  z-index:5;
  &:last-child{
    margin:0;
  }
`
const Images = styled.div`
  position:absolute;
  display:flex;
  top:0;
  left:0;
  height:100%;
  transition: .8s ease-in-out;
  transform: translateX(${({translateX})=>`${translateX}px`});
`

class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      translateX: 0,
      currentImage: 0,
      imagesLength: 0
    };
    this.timer = null;
    this.goToImage = this.goToImage.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  resetTimer(){
    clearInterval(this.timer);
    this.timer = setInterval(this.nextImage, 1000);
  }
  componentDidMount(){
    this.resetTimer();
  }
  nextImage(){
    const {currentImage, imagesLength} = this.state;
    if(currentImage + 1 > imagesLength)
    this.setState({
      currentImage: 0,
      translateX: 0,
    })
    else{

    }
  }
  goToImage(e){
    const id = e.currentTarget.id;
    this.setState({translateX: -window.innerWidth * id});

    // calculate width and transform
    // this.setState({translateX: -id * })
  }
  render(){
    const { translateX } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query {
            allFile(
              filter: {
                sourceInstanceName: { eq: "content" }
                extension: { eq: "md" }
                relativeDirectory: { regex: "/hero-content/" }
              }
              sort: { fields: [dir], order: DESC }
            ) {
              edges {
                node {
                  id
                  childMarkdownRemark {
                    frontmatter {
                      header
                      subheader
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
        `}
        render={data => (
          <CarouselContainer>
            <Images translateX={translateX}>
              {data.allFile.edges.map(data => {
                return <ImageTemplate key={data.node.id} data={data} />
              })}
            </Images>
            <Dots>
              {data.allFile.edges.map((data, index)=>{
                return <Dot icon={faCircle} key={index} id={index} onClick={this.goToImage} />
              })}
            </Dots>
          </CarouselContainer>
        )}
      />
    )

  }
}

export default Carousel;
