import React, { useContext, useEffect } from 'react';
import { Button, Row,Col,Form} from 'react-bootstrap';
import InputForm from '../components/InputForm';
import ItemTable from '../components/ItemTable';

const ListPage = (props) =>{



    return <div className='container'>
        <Row>
            <Col md={{span:5}}>
                <InputForm></InputForm>
            </Col>
            <Col md={{span:7}}>
                <ItemTable></ItemTable>
            </Col>
        </Row>
    </div>;
}

export default ListPage;
