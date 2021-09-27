import React from "react";
import MenuListItem from '../MenuListItem'
import './menuList.scss'

const MenuList = ({posts}) => {
       
    return (
        <ul className='app-list'>
            {
                posts.map(item => {
                    const {id, ...itemProps} = item
                    return (
                        <li key={id} className="list-group-item">
                            <MenuListItem {...itemProps}/>
                        </li>
                    )
                })     
            }
        </ul>
    )
    
}
export default MenuList