import React from 'react'
import { useTrail, a } from '@react-spring/web'

// import styles from '../../styles/Styles.module.scss'

const AnimatedText: React.FC<{ open: boolean }> = ({ children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 20,
    height: 110,
    width: '100%',
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default AnimatedText
