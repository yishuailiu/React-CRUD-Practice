import React, { useState ,useContext} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Form,Input,Button,Select} from 'antd';
import { useHistory } from "react-router-dom";
import {CrudAppContext} from '../store/crudAppStore';

const {Option} = Select;

const InputForm = (props) =>{
    const {itemList,categories,createItem} = useContext(CrudAppContext);
    let history = useHistory();
    const renderCategories = (props) =>{
        return categories.map(c => {
            return <Option key={c}>{c}</Option>
        }

        );
    };
    
    const submitHandler = (value) =>{
        let newItem = {
            id:Date.now().toString(),
            desc:value.description,
            cate:value.category,
            content:value.content,
            
        };
        createItem(newItem);
        console.log(itemList);
        history.push('/list')
    };

    return <Form name='crudForm' onFinish={submitHandler}>
        <Form.Item label='Description' name='description'>
            <Input />
        </Form.Item>

        <Form.Item label="Category" name='category'>
          <Select>
              {renderCategories()}            
          </Select>
        </Form.Item>

        <Form.Item label ='Content' name='content'>
            <Input.TextArea />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType='submit'>
                submit
            </Button>
        </Form.Item>
</Form>;
};

export default InputForm;