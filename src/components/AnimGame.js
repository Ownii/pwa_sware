import React from 'react';
import Game from './Game';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import { List } from 'immutable/dist/immutable';

function AnimGame(props) {
    const { size, blocks, anim } = props;
    const animation = useSpring({
        number: anim + 1,
        from: { number: anim },
        config: { duration: 200 },
        reset: true
    });
    const AGame = animated(Game);
    return (
        <AGame
            size={size}
            blocks={blocks}
            anim={animation.number}
            animValue={anim}
        />
    );
}

export default AnimGame;

AnimGame.propTypes = {
    size: PropTypes.number.isRequired,
    anim: PropTypes.number,
    blocks: PropTypes.instanceOf(List).isRequired
};
