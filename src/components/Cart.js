import React, {Component} from 'react';
import "./Cart.css";
import {connect} from 'react-redux';
import {updateUser} from '../redux/reducer';
import axios from 'axios'

const Cart = props => {
    const handleLogout = () => {
        axios
            .post('/auth/logout')
            .then(res => {
                props.history.push('/');
            })
            .catch(err => console.log(err));
    }
    console.log(props)




        return(
            <div className="CartPage">
                <div className='UserDisplay'>
                    <h3>{props.user.username}</h3>
                    <button onClick={handleLogout}>LogOut</button>
                </div>
                <div className="CartTitle">Cart</div>
                <div className="CartBox">
                    
                </div>
            </div>
        )
    
}

const mapStateToProps = reduxState => {
    const {user} = reduxState.reducer;
    return {
        user
    }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);