import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TodoList from '../components/Todo/TodoList';
import TodoForm from '../components/Todo/TodoForm';
import TodoHeader from '../components/Todo/TodoHeader';
import { Container } from 'reactstrap';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <Container fluid="sm">
            <div className="todo-container">
                <TodoHeader />
                <TodoForm />
                <TodoList />
            </div>
        </Container>
    );
}

export default HomePage;