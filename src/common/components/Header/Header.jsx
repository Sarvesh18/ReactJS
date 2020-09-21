import React from 'react';
//import PropTypes from 'prop-types';

import './Header.css';

const Header = (props) => {
	return (
        <div className='header'>
            {props.children}
            <h1 className='header__title'>SpaceX Launch Programs</h1>
        </div>
    );
};

Header.propTypes = {
//PropTypes.string.isRequired
//.object
//.array
//onOfType
};

Header.defaultProps = {

};

export default Header;


