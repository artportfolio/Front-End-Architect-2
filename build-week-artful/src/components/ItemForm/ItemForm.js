import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from 'reactstrap';

class ItemForm extends React.Component {

    render(){
        return (
            <Form className="ItemForm">
                <h1>Add a photo!</h1>
                <Input type="url" placeholder="Image URL" />
                <Input type="text" placeholder="Title" />
                <Input type="textarea" placeholder="Description" />
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    toggled: state.toggled
})

export default connect(mapStateToProps, {  } )(ItemForm);