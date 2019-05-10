import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

// import scrollToElement from 'scroll-to-element';

import { fetchProjects } from "../../redux/actions/projects";

// import Navbar from "./Navbar";
import Header from "./header/Header";

// import homeSections from "./homeSections"

import "./home.css"

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { currentScroll: 0, currentSection: "" };
    }

    componentWillMount = () => {
        this.props.fetchProjects()
    }

    componentDidMount = () => {        
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render = () => {
        // const { currentSection, currentScroll } = this.state;        
        return (
            <div className="root-home" >
                <Header />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    projects: store.projects
})

const mapDispatchToProps = dispatch => ({
    fetchProjects: (args) => dispatch(fetchProjects(args))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));