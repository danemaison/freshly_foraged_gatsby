import React from "react"
import styled from "styled-components"
import CarouselItem from "../../templates/carousel-item"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CarouselContainer = styled(Slider)`
  .slick-dots {
    z-index: 100;
    bottom: 15px;
    li {
      margin: 0 15px;
    }
    button::before {
      color: rgba(255, 255, 255, 1);
      font-size: 18px;
      opacity: .75;
    }
    li.slick-active button::before {
      opacity: 1;
      color: ${({ theme }) => theme.primary};
    }
  }
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: false,
    autoplaySpeed: 2000,
  }
  return (
    <CarouselContainer {...settings}>
      {data.allFile.edges.map(data => {
        return <CarouselItem key={data.node.id} data={data} />
      })}
    </CarouselContainer>
  )
}

export default Carousel
