import React, { Component,useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Row, Input, InputGroup,Icon} from 'rsuite';
import ItemCard from './ItemCard'


export default function Search() {
    let itemsState = useSelector(state=>state.items)
    let [filteredItems, setItems] = useState([])
   
    const styles = {
      width: 400,
      marginBottom: 10
    };
    
    let handleSearch = (e) => {
        // console.log('hello')
        let filteredItemList = itemsState.filter(item => item.name.toLowerCase().includes(e.toLowerCase()))
        setItems(
             filteredItemList
        )
    }
    // console.log(filteredItems)
    return(
        <div>
             <h2 style={{color:"black", backgroundColor: "white"}}>Search Products</h2><InputGroup className='search-bar' inside style={styles} >
            <Input  onChange={(e)=>handleSearch(e)} />
            <InputGroup.Addon>
            <Icon icon="search" />
            </InputGroup.Addon>
            </InputGroup>
            <br />
                <Row>
                    {filteredItems.map(item => <ItemCard item={item} key={item.id}/>)}
                </Row>
        </div>
    )
}