import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

class Layout extends Component {
    render() {
        return (
            <Aux>
            <div>Toolbar, sidebar, Build tool</div>
            <div>{this.props.children}</div>
            </Aux>
        );
    }
}


export default Layout;