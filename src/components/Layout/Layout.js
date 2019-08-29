import React, {Component} from 'react';

import Auxillary from '../../hoc/Auxillary';

class Layout extends Component {
    render() {
        return (
            <Auxillary>
            <div>Toolbar, sidebar, Build tool</div>
            <div>{this.props.children}</div>
            </Auxillary>
        );
    }
}


export default Layout;