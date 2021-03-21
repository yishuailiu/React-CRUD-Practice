
import { useHistory, Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import {CrudAppContext} from '../store/crudAppStore';
import {Row,Col,Button} from 'react-bootstrap';

const DetailPage = (route) =>{
    let history = useHistory();

    const {itemList} = useContext(CrudAppContext);
    const itemId = route.match.params.id;    

    const selectedItem = itemList.find(item => item.id === itemId);    

    return <div className='container'>
        <Row>
            <Col>
            <p><strong>Description: </strong>{selectedItem.desc}</p>
            <p><strong>Category: </strong>{selectedItem.cate}</p>
            <p><strong>Content: </strong>{selectedItem.content}</p>
            </Col>
            <Col>
            <Link to="/list"><Button type="primary">back</Button></Link>
            </Col>
        </Row>
    </div>

}

export default DetailPage;
