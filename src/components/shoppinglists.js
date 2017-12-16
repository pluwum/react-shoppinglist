import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';
import { Link } from 'react-router-dom';
import Spinner from './spinner';

class ShoppingLists extends Component {
    componentWillMount(){
        this.props.shoppingLists.isFetching = true;
    }
    
    componentDidMount() {
        
        this.props.fetchLists();
    }

    renderShoppingLists() {
        return _.map(this.props.shoppingLists.data, shoppinglist => {
            return (
                <tr key={shoppinglist.id}>
                    <td></td>
                    <td>{shoppinglist.name}</td>
                    <td>{shoppinglist.description}</td>
                    <td>
                        <div className="pull-right">
                            <Link to={`/shoppinglists/${shoppinglist.id}/items`} className="btn btn-sm btn-primary">View</Link>
                            <Link to={`/shoppinglists/${shoppinglist.id}/edit`} className="btn btn-sm btn-info">Edit</Link>
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </td >
                </tr >
            );
        });
    }

    render() {
        console.log("Loaded lists:", this.props.shoppingLists);
        if (!this.props.shoppingLists) {
            return (
                <div className="alert alert-success">
                    <strong>Opps! </strong> You have no Shopping Lists at the moment :-(. To create one, click <Link to="/shoppinglists/new">here</Link>
                </div>
            );
        }
        if(this.props.shoppingLists.isFetching){
            return (
                <Spinner/>
            );
        }
        return (
            <div>
                <div className="page-header">
                    <h1> Here's Your Shopping lists </h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                                {this.renderShoppingLists()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { shoppingLists: state.shoppingLists }
}

export default connect(mapStateToProps, { fetchLists })(ShoppingLists);