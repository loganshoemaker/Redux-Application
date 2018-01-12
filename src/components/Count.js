import React from 'react';

// import { connect } from 'react-redux';

// const mapStateToProps = state => {
//     return {
//         count: state.count,
//     };
// };

// const ConnectedCounter = ({ count }) => (
const Counter = ({ count }) => (
    <h1>
        {count}
    </h1>
)

// const Counter = connect(mapStateToProps)(ConnectedCounter);

export default Counter;
