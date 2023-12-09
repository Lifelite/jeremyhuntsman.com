import { useScroll, animated } from '@react-spring/web'
// import propTypes from "prop-types";

export function FadeInScroll(props) {
    const {
        children,
    } = props

    const { scrollYProgress } = useScroll()

    return (
        <animated.div style={{ opacity: scrollYProgress }}>
            {children}
        </animated.div>
    )

}

// FadeInScroll.propTypes = {
// }