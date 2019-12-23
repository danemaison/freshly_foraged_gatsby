import React, { useState, useEffect, useCallback, useRef } from "react"
import styled, { keyframes } from "styled-components"

const keyFrame = keyframes`
  0%{
    top: -100px;
  }
  70%{
    top: 85px;
  }
  100%{
    top:74px;
  }
`

const NotificationWrapper = styled.div`
  position: fixed;
  text-align:center;
  font-size:.75rem;
  text-shadow: 0 0 3px rgba(0,0,0,.25);
  width: 350px;
  height: 50px;
  background-color: ${({ theme }) => theme.primary};
  z-index: 9999;
  transition:.3s ease-in-out;
  top: ${({ isActive }) => (isActive ? "74px" : "-100px")};
  left: 50%;
  transform: translate(-50%);
  border-radius: 25px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 0 15px;
`

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}


const Notification = ({ notificationText, clearNotification }) => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const prevNotification = usePrevious(notificationText);

  useEffect(() => {
    let interval = null

    if(prevNotification !== notificationText && notificationText){
      setSeconds(0);
      setIsActive(true);
    }
    else if (seconds >= 4) {
      clearNotification();
      setSeconds(0)
      setIsActive(false);
      return () => clearInterval(interval)
    }

    if (notificationText && seconds === 0) {
      setIsActive(true)
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }
    return () => clearInterval(interval)

  }, [notificationText, clearNotification, isActive, seconds, prevNotification])


  return (
    <NotificationWrapper isActive={isActive}>{notificationText}</NotificationWrapper>
  )
}



export default Notification
