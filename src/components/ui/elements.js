import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  padding-top:59px;
  &:last-child{
    padding-bottom: 59px;
  }
`

export const PageContainer = styled(Container)`
         padding-top: 25px;
       `

export const Header = styled.div`
  font-size: 2.5rem;
  position: relative;
  font-family: "Berkshire Swash";
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    width: 110%;
    left: -5%;
    bottom: 0;
    height: 15px;
    background-color: ${({ theme }) => theme.primaryLight};
    z-index: -1;
  }
`

export const Subheader = styled.div`
  margin-top: 15px;
  font-size: 1rem;
  text-align: center;
`
