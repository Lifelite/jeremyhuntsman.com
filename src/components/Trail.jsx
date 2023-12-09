import {Children} from "react";
import {useTrail, a} from '@react-spring/web'
import PropTypes from "prop-types";
import styles from '../styles/Trail.css'

export function Trail(props) {
    const {
        open,
        children,
    } = props;

    const items = Children.toArray(children);
    const trail = useTrail(items.length, {
        config: {mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: {opacity: 0, x: 30, height: 0},
    })

    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={styles.trailsText} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    );

}

Trail.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.func,
};