import PropTypes from "prop-types";
import Star from './Star'
import {nanoid} from 'nanoid';

function Stars({count}) {
    const checkCount = ( count < 1 || count > 5 || typeof(count) !== 'number') ? false : true;
    const starsArr = [];
    if (checkCount) {
        for (let i = 0; i < count; i++) {
            starsArr.push(<Star key={nanoid(2)}/>)
        }
    }

    return (
        checkCount && 
            <ul className="card-body-stars u-clearfix">
                {starsArr.map(el => el)}
            </ul>
            
    )
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}

export default Stars;