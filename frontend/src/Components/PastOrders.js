import React, { Component } from 'react';
import { Divider, Icon,Sidenav,Nav , Panel, PanelGroup} from 'rsuite'
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Profile from './Profile'

export default function PastOrders() {
    let history = useHistory()

    return(
        <Profile/>
       
    )
}
