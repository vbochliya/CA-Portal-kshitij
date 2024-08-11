import React, { useRef, useState, useEffect } from 'react'
import classes from './Registrations.module.css'
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Space, Table, Tag, Button, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import Api from '../../API/Api';
import { useNavigate } from 'react-router-dom';
import { MdEmail, MdFacebook } from 'react-icons/md';

function Registrations() {

    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'First Name',
            key: 'first',
            dataIndex: 'first',
            ...getColumnSearchProps('first' ),
        },
        {
            title: 'Last Name',
            key: 'second',
            dataIndex: 'second',
            ...getColumnSearchProps('second' ),
        },
        {
            title: 'Gender',
            dataIndex: 'Gender',
            key: 'Gender',
        },
        {
            title: 'Number',
            dataIndex: 'Number',
            key: 'Number',
            ...getColumnSearchProps('Number'),
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
            ...getColumnSearchProps('Email'),
        },
        {
            title: 'College',
            dataIndex: 'College',
            key: 'College',
            ...getColumnSearchProps('College'),
        },
        {
            title: 'City',
            dataIndex: 'City',
            key: 'City',
            ...getColumnSearchProps('City'),
        },
        {
            title: 'State',
            dataIndex: 'State',
            key: 'State',
            ...getColumnSearchProps('State'),
        },
        {
            title: 'Selection',
            key: 'Selection',
            dataIndex: 'Selection',
            filters: [
                {
                    text: 'Pending',
                    value: 'pending',
                },
                {
                    text: 'Yes',
                    value: 'yes',
                },
                {
                    text: 'No',
                    value: 'no',
                }
            ],
            onFilter: (value, record) => record.Selection.startsWith(value),
            filterSearch: true,
            render: (_, record) => (
                <Space size="middle" 
                // onClick={(record) => { handleClick(record) }}
                >
                    <div>{record.Selection} <span style={{textAlign:"center"}}><a href={`mailto:${record.Email}`}><MdEmail/></a></span></div>
                </Space>
            ),
        },
        // {
        //     title: 'Result',
        //     key: 'Selected',
        //     dataIndex: 'Selected',
        //     filters: [
        //         {
        //             text: 'Selected',
        //             value: 'Yes',
        //         },
        //         {
        //             text: 'Not Selected',
        //             value: 'No',
        //         },
        //     ],
        //     onFilter: (value, record) => record.Selected.startsWith(value),
        //     filterSearch: true,
        //     render: (_, record) => (
        //         <Space size="middle" 
        //         // onClick={(record) => { handleClick(record) }}
        //         >
        //             <div >{record.Selected === "No" ? `Not Selected` : `Selected`}</div>
        //         </Space>
        //     ),
            
        // },
        {
            title: 'Edit Selection',
            key: 'Selected',
            dataIndex: 'Selected',
            render: (_, record) => (
                <Space size="middle" >
                <Space size="middle" >
                    <a onClick={() => { handleClick(record, "yes") }}>Select {record.first}</a>
                </Space>
                <Space size="middle" >
                    <a onClick={() => { handleClick(record, "no") }}>Unselect {record.first}</a>
                </Space>
                </Space>
            ),
        }
    ];
    
    const handleClick = async (user, opt) => {
        // console.log(opt)
        try{
            const requestOptions = {
                headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
                },
            };
            const res = await Api.put("/user/update_ca",
            {
                ca_id: user.ca_id,
                selection: opt
            }
            , requestOptions);
            const data = await res.data;
            // console.log(data);
            await fetchUsers();
        }
        catch(e){
            console.log(e);
        }
    }

    const lout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/SignIn");
    }

    const fetchUsers = async()=>{
        try{
            const requestOptions = {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            };
            const res = await Api.get("/user/get_alluser", requestOptions);
            const data = await res.data;
            console.log(data)
            const newdata = data.map((e,index)=>{
                return{
                    "first": e.first_name,
                    "second" : e.last_name,
                    "Gender" : e.gender,
                    "Number" : e.phone,
                    "Email": e.email,
                    "College": e.college,
                    "City": e.city,
                    "State" : e.state,
                    "Selection": e.selection,
                    "ca_id": e.ca_id
                }
                
            })
            setData(newdata);

        }catch(e){
            console.log(e.response);
        }
    }

    useEffect(() => {
        // if(localStorage.getItem('token') == null)
        fetchUsers();
    }, [])
    

    return (
        <div className={classes.Registrations}>
            <div className={classes.head}>Registrations for Campus Ambassador Programme</div>
            <div className={classes.list}>
                <Table columns={columns} dataSource={data} />
            </div>
            <Button type="primary" size='large' onClick={()=>lout()} style={{marginBottom:"2rem"}}>LOG OUT</Button>
        </div>
    )
}

export default Registrations