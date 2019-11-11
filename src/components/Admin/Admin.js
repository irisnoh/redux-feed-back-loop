
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import AdminItem from '../AdminItem/AdminItem'
import Button from '@material-ui/core/Button';
import './Admin.css';
import CreateIcon from '@material-ui/icons/Create';

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

    handleNextButton = () => {
        this.props.history.push('/Feeling')
    }
    render() {
        return (
            <>
            <h1 className="tableHeader">Feedback Table</h1>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Feeling
                           </TableCell>
                            <TableCell>
                                Understanding
                           </TableCell>
                            <TableCell>
                                Support
                           </TableCell>
                            <TableCell>
                                Comments
                           </TableCell>
                            <TableCell>
                                Delete
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
                    <CreateIcon onClick={this.handleNextButton}>New FeedBack</CreateIcon>
                {/* <pre>
                    {JSON.stringify(this.props.adminReducer, null, 2)}
                </pre> */}

            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Admin);
