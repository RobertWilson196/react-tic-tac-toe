import React, { Component } from 'react';

class Box extends Component 
{
    render()
    {
        const boxValueCheck = this.props.p1 ? "fa fa-circle-o fa-4x" : "fa fa-times fa-4x";
        return (
            <div className='col-md-4 border text-center'>
                <i className={boxValueCheck} aria-hidden="true" />
            </div>
        );
    }
}
export default Box;