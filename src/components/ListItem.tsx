import React from 'react';

interface IListItem {
    children: React.ReactNode;
}



const ListItem: React.FC<IListItem> = (props) => {
    const {children} = props;

    return <li className='list__item'>{children}</li>;

};

export default ListItem;