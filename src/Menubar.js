import React, { Component } from 'react';
import './Menubar.css';
import searchIcon from './search-icon.png';

class Menubar extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }
    handleSubmit(){
        alert('Login page');
    
    }
    render() {
        let searchForm = this.state.showForm ? (
            <form className="menu__search-form" method="POST">
                <input className="menu__search-input" placeholder="Type and hit enter" />
            </form>
        ) : '';

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo">Epic Co.</h1>

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                    <ul>
                    <button onClick={this.showForm.bind(this)} style={{
                    backgroundImage: 'url(' + searchIcon + ')'
                    }} className="menu__search-button"></button>
                    </ul>
                

                    {searchForm}
                </div>
                <div>
                <ul>
                    <input type="Submit" onClick={this.handleSubmit.bind(this)}block bsSize="large"  value="Login" className="login_button"/>
        </ul>
                </div>

            </nav>
            
        );
        
    }
}

export default Menubar;
