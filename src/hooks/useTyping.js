import { useState, useEffect } from 'react'

export const useTyping = (strings, typeSpeed = 80, backSpeed = 50, backDelay = 2000) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let timeoutId

    const currentString = strings[currentStringIndex]
    const isAtEnd = text === currentString && !isDeleting
    const isAtStart = text === '' && isDeleting

    if (!isAtEnd && !isAtStart) {
      const typingSpeed = isDeleting ? backSpeed : typeSpeed
      timeoutId = setTimeout(() => {
        if (!isDeleting) {
          setText(currentString.substring(0, text.length + 1))
        } else {
          setText(currentString.substring(0, text.length - 1))
        }
      }, typingSpeed)
    } else {
      if (isAtEnd) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, backDelay)
      } else if (isAtStart) {
        setIsDeleting(false)
        setCurrentStringIndex((prev) => (prev + 1) % strings.length)
      }
    }

    const cursorTimeout = setTimeout(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(cursorTimeout)
    }
  }, [text, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, backDelay])

  return { text, cursorVisible }
}