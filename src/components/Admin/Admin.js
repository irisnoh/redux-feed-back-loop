
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import AdminItem from '../AdminItem/AdminItem'

class Admin extends Component {
   
    componentDidMount= () => {
        this.refreshFeedback();
    }


    refreshFeedback = () => {
        axios({
            method:"GET",
            url:"/form"
        }).then(response => {
            console.log(response.data)
            this.props.dispatch({type:"GET_ADMIN", payload:response.data})
        }).catch(error => {
            console.log('error in GET in Admin.js',error)
        })
    }


    render() {
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Feeling
                           </TableCell>
                            <TableCell>
                                Comprehension
                           </TableCell>
                            <TableCell>
                                Support
                           </TableCell>
                            <TableCell>
                                Comments
                           </TableCell>
                            <TableCell>
                                delete
                           </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.adminReducer.map(feedback => 
                            <AdminItem    
                            refreshFeedback={this.refreshFeedback}
                            feedback={feedback}
                            key={feedback.id} />)}
                    </TableBody>
                </Table>
                <Link to="/Feeling">
                    <button onClick={this.handleClearAll}>NEXT</button>
                </Link>
                <pre>
                    {JSON.stringify(this.props.adminReducer, null, 2)}
                </pre>

            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Admin);
