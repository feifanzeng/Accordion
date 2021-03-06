import React, { useState } from 'react';

const Accordion = ({title, children, isExpand = false}) => {
    
    const [expand, setExpand] = useState(isExpand);

    function toggleAccordion() {
        setExpand(expand ? false : true);
    }
    
    return (
        <div className="box">
            <div className="title-box" onClick={toggleAccordion}>
                <span className="title">{title}</span>
                <span className="icon"><i className={`fa fa-play-circle${!expand ? ' down' : ''}`}></i></span>
                <div className="clearfix"></div>
            </div>
            {expand && <div className="content">{children}</div>}
        </div>
    )
}
export default Accordion;

/*
export class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen : false };
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        //const newState = this.state.isOpen === true ? false : true;
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <div className="box">
                <div className="title-box" onClick={this.handleExpand}>
                    <span className="title">{this.props.title}</span>
                    <span className="icon"><i className={`fa fa-play-circle${!this.state.isOpen ? ' down' : ''}`}></i></span>
                    <div className="clearfix"></div>
                </div>
                {this.state.isOpen && <div className="content">{this.props.children}</div>}
            </div>
        )
    }
}
export default Accordion;
*/