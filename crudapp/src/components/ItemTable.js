import {CrudAppContext} from '../store/crudAppStore';
import {Row,Col,Button} from 'react-bootstrap';
import { Checkbox } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import {useHistory, Link } from "react-router-dom";



const ItemTable = (props) =>{
    const {itemList,removeItem} = useContext(CrudAppContext);
    let history = useHistory();
    let selected =[];

    useEffect(() =>{
        renderTableRows();
    },[itemList]);

    const removeSelected =() =>{
        if(selected.length > 0){
            selected.forEach(id => {
                removeItem(id);
            });
        }
    }

    

    const renderTableRows =() =>{
        
        if(itemList){
            return itemList.map((itemDetail,index) =>{
                const{id,desc,cate,content} = itemDetail;
                const checkBoxChange = (e) =>{
                    console.log(e.target.checked);
                    console.log(selected);
                    if((e.target.checked)&&(!selected.includes(id))){
                        selected.push(id);
                    } else if ((!e.target.checked)&&(selected.includes(id))){
                        console.log('else')
                        selected = selected.filter(item => item !== id);
                    }
                };                
                return <tr>
                    <td>
                        <Checkbox onChange={checkBoxChange}></Checkbox>
                    </td>
                    <td><Link to={`/detail/${id}`}>{desc}</Link></td>
                    <td>{cate}</td>
                    <td>
                        <Button className='btn' onClick={()=>removeItem(id)}>Delete</Button>
                    </td>
                </tr>
            })
        } 
    }

    
    return <div>
        <Row className ='justify-content-center'>
            <Col>
                <table className='table table-bordered'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>select</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Operate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
            </Col>
        </Row>
        <Button className='btn' onClick={()=>removeSelected()}>Delete Selected</Button>
    </div>
};

export default ItemTable;