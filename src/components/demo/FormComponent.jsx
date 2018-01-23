import React, { Component } from 'react';
import { Label, DropdownButton, MenuItem, Form } from 'react-bootstrap';

export default class FormComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <DropdownButton title="Dropdown">
                    <MenuItem href="#books">Books</MenuItem>
                    <MenuItem href="#podcasts">Podcasts</MenuItem>
                    <MenuItem href="#">Tech I Like</MenuItem>
                    <MenuItem href="#">About me</MenuItem>
                    <MenuItem href="#addBlog">Add a Blog</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}