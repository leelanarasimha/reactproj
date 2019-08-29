
import React, {Component} from 'react';
import Modal from '../components/UI/Modal/Modal';

const errorhandler = (wrappedcomponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request(req => {
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response(res => res, error => {
                this.setState({error: error});
            })
        }

        onModalClosed = () => {
            this.setState({error: null});
        }

        render() {
            return (
            <Modal show={this.state.error} modalClosed={this.modalClosed}>
                {wrappedcomponent}
            </Modal>
            );
        }


    }
}

export default errorhandler;