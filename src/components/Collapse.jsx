import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        const { text, opened } = this.props;
        this.state = {
            text,
            opened
        }
    }

    handleClick = () => {
        this.setState(
            {
                opened: !this.state.opened
            }
        )
    }

    render() {
        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse"
                       href="#" role="button"
                       aria-expanded={this.state.opened}
                       onClick={this.handleClick}>Link with href</a>
                </p>

                <div className={cn("collapse", {show: this.state.opened})}>
                    <div className="card card-body">
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }
}

Collapse.propTypes = {
    text: PropTypes.string,
    opened: PropTypes.bool
}

export default Collapse;