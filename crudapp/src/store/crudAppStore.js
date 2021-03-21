import React,{useReducer} from 'react';
import { CREATE_ITEM ,REMOVE_ITEM } from './crudActions';

const CrudAppContext = React.createContext();

const CrudReducer = (state,action) =>{
    switch(action.type){
        case CREATE_ITEM:
            return {
                ...state,
                items:[...state.items,action.payload]
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items:state.items.filter(
                    item => item.id !== action.payload
                )
            };
        // case UPDATE_ITEM:
        //     return null;
        // case REMOVE_ITEM_MULTI:
        //     return null;
        default:
            return state;
    }
};

const CrudAppStore = (props) => {
    const initiaState = {
        items: [
            {
                id:'1',
                desc:'For test purpose',
                cate:'css',
                content:'test123123123',
                
            },
            {
                id:'2',
                desc:'For test purpos eaa',
                cate:'html',
                content:'test1231231232323',
                
            },
            {
                id:'3',
                desc:'For test purpose bbb',
                cate:'react',
                content:'test123gasgwea123123',
                
            },
        ],
        categories:['css','html','react'],        
    };

    const [state,dispatch] = useReducer(CrudReducer,initiaState);

    const createItem = (newitem) =>{
        dispatch({
            type:CREATE_ITEM,
            payload:newitem
        })
    }

    const removeItem = (id) => {
        console.log('removed' + id);
        dispatch({
            type:REMOVE_ITEM,
            payload:id
        })
    }


    return <CrudAppContext.Provider value = {{
        itemList:state.items,
        categories:state.categories,        
        createItem
        ,removeItem
    }}>{props.children}</CrudAppContext.Provider>
}

export default CrudAppStore;
export {CrudAppContext};