import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// use characters that match typical text (letters, numbers, common punctuation)
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// get a random character that matches the character type of the original
const getScrambledChar = (originalChar) => {
    if (originalChar === ' ' || originalChar === '\n' || originalChar === '\t') return originalChar
    // if it's a letter, use a random letter
    if (/[a-zA-Z]/.test(originalChar)) {
        return chars[Math.floor(Math.random() * chars.length)]
    }
    // if it's a number, use a random number
    if (/[0-9]/.test(originalChar)) {
        return Math.floor(Math.random() * 10).toString()
    }
    // for punctuation and other chars, use a random letter to maintain font consistency
    return chars[Math.floor(Math.random() * chars.length)]
}

const ScrambledText = ({ text, trigger, onScrambleComplete, className = '' }) => {
    const [displayText, setDisplayText] = useState(() => {
        // if trigger is 0 or not provided, show actual text immediately
        if (!trigger || trigger === 0) {
            return text
        }
        // otherwise start with scrambled text
        return text.split('').map(char => getScrambledChar(char)).join('')
    })
    const [isScrambling, setIsScrambling] = useState(false)
    const intervalRef = useRef(null)
    const lastTriggerRef = useRef(trigger || 0)
    const hasMountedRef = useRef(false)

    useEffect(() => {
        // if trigger is 0 or not provided, show actual text
        if (!trigger || trigger === 0) {
            setDisplayText(text)
            setIsScrambling(false)
            lastTriggerRef.current = 0
            return
        }
        
        // scramble if trigger is greater than 0
        if (trigger > 0) {
            // start animation if trigger changed OR on initial mount with trigger > 0
            if (trigger !== lastTriggerRef.current || !hasMountedRef.current) {
                hasMountedRef.current = true
                lastTriggerRef.current = trigger
                
                const originalText = text
                let iteration = 0
                const duration = 1000 // total animation duration in ms for longer text
                const steps = 30
                const stepDuration = duration / steps

                // ensure we start scrambled
                setIsScrambling(true)
                
                // start with fully scrambled text immediately
                setDisplayText(
                    originalText
                        .split('')
                        .map((char) => getScrambledChar(char))
                        .join('')
                )

                // clear any existing interval
                if (intervalRef.current) {
                    clearInterval(intervalRef.current)
                }

                // start animation immediately - scramble phase first, then reveal
                let frameCount = 0
                intervalRef.current = setInterval(() => {
                    frameCount++
                    
                    // first few frames: keep scrambling all characters
                    if (frameCount < 5) {
                        setDisplayText(
                            originalText
                                .split('')
                                .map((char) => getScrambledChar(char))
                                .join('')
                        )
                    } else {
                        // then start revealing from left to right
                        setDisplayText(
                            originalText
                                .split('')
                                .map((char, index) => {
                                    // preserve spaces, newlines, and punctuation
                                    if (char === ' ' || char === '\n' || char === '\t') return char
                                    if (index < iteration) {
                                        return originalText[index]
                                    }
                                    return getScrambledChar(char)
                                })
                                .join('')
                        )

                        iteration += originalText.length / steps

                        if (iteration >= originalText.length) {
                            clearInterval(intervalRef.current)
                            setDisplayText(originalText)
                            setIsScrambling(false)
                            if (onScrambleComplete) {
                                setTimeout(onScrambleComplete, 50)
                            }
                        }
                    }
                }, stepDuration)

                return () => {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current)
                    }
                }
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [trigger, text, onScrambleComplete])

    return (
        <span className={className} style={{ userSelect: 'none', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', fontStyle: 'inherit' }}>
            {displayText.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={false}
                    animate={{
                        opacity: isScrambling && displayText[index] !== text[index] ? [1, 0.3, 1] : 1,
                        scale: isScrambling && displayText[index] !== text[index] ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                        duration: 0.15,
                        repeat: isScrambling && displayText[index] !== text[index] ? Infinity : 0,
                        ease: 'easeInOut',
                    }}
                    style={{ display: 'inline-block', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', fontStyle: 'inherit' }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    )
}

export default ScrambledText

