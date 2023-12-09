import { useInView, animated } from '@react-spring/web';
import '../styles/FadeInContainer.css';
import PropTypes from "prop-types";

export default function FadeInView (props) {
    const {
        children
    } = props

    const [ref, springs] = useInView(
    () => ({
        from: {
            opacity: 0,
            y:100,
        },
    to: {
            opacity: 1,
            y:0
    }
    }),
        {
            rootMargin: '-45% 0px -45% 0px',
        }
    )

    return(
        <animated.div ref={ref} style={springs}>
            {children}
        </animated.div>
    )
}

FadeInView.propTypes = {
    children: PropTypes.object,
};

