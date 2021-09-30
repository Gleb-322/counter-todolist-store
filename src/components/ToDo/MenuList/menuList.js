import React from "react";
import MenuListItem from '../MenuListItem'
import './menuList.scss'

const MenuList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
       
    return (
        <ul className='app-list'>
            {
                posts.map(item => {
                    const {id, ...itemProps} = item
                    return (
                        <li key={id} className="list-group-item">
                            <MenuListItem 
                                onDelete={() => onDelete(id)}
                                onToggleImportant={() => onToggleImportant(id, 'important')}
                                onToggleLiked={() => onToggleLiked(id, 'liked')}
                                {...itemProps}/>
                        </li>
                    )
                })     
            }
        </ul>
    )
    
}
export default MenuList