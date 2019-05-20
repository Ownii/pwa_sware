import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';

const Button = props => {
    const { text, onClick, className, icon } = props;
    return (
        <div
            className={
                'inline-block p-3 ripple select-none cursor-pointer uppercase font-bold text-sm ' +
                (icon && !text ? 'rounded-full' : 'rounded') +
                ' ' +
                className
            }
            onClick={onClick}
        >
            {icon && <Icon path={icon} size={1} />}
            {text}
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.any
};

export default Button;
