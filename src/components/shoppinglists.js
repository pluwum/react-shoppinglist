import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';
import { Link } from 'react-router-dom';
import Spinner from './spinner';
import Pagination from './pagination';

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

        const { shoppingLists: { data, isFetching, error, message, meta } } = this.props;

        if (error) {
            return (
                <div className="alert alert-danger">
                    <strong>Opps! </strong> Something went terribly wrong
                </div>
            );
        }

        if(isFetching){
            return (
                <Spinner/>
            );
        }

        // Check if there data is not passed or if data is empty (helpful for search)
        if (!data || !_.size(data)) {
            return (
                <div className="alert alert-success">
                    <strong>Opps! </strong> You have no Shopping Lists matching this query at the moment :-(. To create one, click <Link to="/shoppinglists/new">here</Link>
                </div>
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
                       <Pagination meta ={meta} onClick={this.props.fetchLists}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        shoppingLists: state.shoppingLists, 
        authData: state.shoppingListItems.data 
    }
}

export default connect(mapStateToProps, { fetchLists })(ShoppingLists);