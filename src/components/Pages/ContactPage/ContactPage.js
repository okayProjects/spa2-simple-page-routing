import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../../../styles/contactPage.css';

class ContacPage extends Component {
    state = {
        value: '',
        isEmpty: true
    }

    inputChangeHandler = (e) => {
        const value = e.target.value
        if (value.length > 0) {
            this.setState(prevState => {
                return {
                    value: prevState.value = value,
                    isEmpty: prevState.isEmpty = false
                };
            });
        } else {
            this.setState(prevState => {
                return {
                    value: prevState.value = value,
                    isEmpty: prevState.isEmpty = true
                };
            });
        }
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                value: prevState.value = '',
                isEmpty: prevState.isEmpty = true
            };
        });
    }


    render() {
        return (
            <div className='contact'>
                <h3>We love to hear, we love to share</h3>
                <form onSubmit={this.formSubmitHandler}>
                    <textarea value={this.state.value}
                        placeholder='Drop us a line...'
                        onChange={this.inputChangeHandler}>
                    </textarea>
                    <button>SEND</button>
                </form>
                <Prompt
                    when={!this.state.isEmpty}
                    message='Your message has not been sent yet. Are you sure you want to leave?' />
            </div>
        );
    }
}

export default ContacPage;