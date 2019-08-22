import React, { useState, useEffect, Dispatch } from 'react';
import { Table, Row, Col, Divider } from 'antd';
import { getData } from './service';
import { Data } from './type'

const columns: any = [
    {
        title: '序号',
        dataIndex: 'seq',
        key: 'seq',
        align: 'center'
    },
    {
        title: '记录时间',
        dataIndex: 'recordTime',
        key: 'recordTime',
        align: 'center'
    },
    {
        title: '记录者',
        dataIndex: 'recorderName',
        key: 'recorderName',
        align: 'center'
    },
]

const centerStyle = {
    display: 'flex', 
    justifyContent: 'center'
}

const borderStyle = {
    border: '1px solid #C0C0C0',
    minHeight: 100,
    marginBottom: 20,
    padding: 5,
}
const rightStyle = {
    display: 'flex', 
    justifyContent: 'flex-end'
}

const rowHeight = '1.3em'

const borderBottomStyle = {
    height: rowHeight,
    borderBottom: '1px solid'
}

const defaultData: Data = {
    context: "", 
    id: "", 
    visitId: "", 
    hisPtId: "", 
    regId: "", 
    recorder: {
        name: "", 
        id: 1
    }, 
    cardNo: "", 
    patientName: "", 
    sex: "", 
    recordTime: "", 
    formId: "", 
    score: "",
    record: [
        '',
        '',
        '',
        ''
    ],
    recorderName: '',
    seq: '',
    key: '1'
}

export default () => {
    const [dataSource, setDataSource]: [Data[], Dispatch<Data[]>] = useState([] as Data[])
    const [showData, setShowData] = useState(defaultData)
    useEffect(() => {
        getData().then(res => {
            setDataSource(res)
        })
    }, [])
    useEffect(() => {
        if (dataSource.length > 0) {
            setShowData(dataSource[0])
        }
    }, [dataSource])
    return (
        <Row style={{padding: 10}}>
            <Col span={15} style={{...centerStyle, boxShadow: '3px -3px 3px #888888 inset', padding: '10px 0', border: '1px solid #707070'}}>
                <Col span={22}>
                    <Row style={centerStyle}>
                        <Col span={12}>
                            <Row style={{...centerStyle, fontSize: 25}}>南京市中医院</Row>
                            <Row style={{...centerStyle, fontSize: 22}}>南京市中医院大学附属南京中医院</Row>
                            <Row style={{...centerStyle, fontSize: 18}}>治疗记录单</Row>
                        </Col>
                    </Row>
                    <Row style={{height: rowHeight}}>
                        <Col span={4}>
                            <Col span={9}>
                                门诊号：
                            </Col>
                            <Col span={12} style={borderBottomStyle}>
                                {showData.visitId}
                            </Col>
                        </Col>
                        <Col span={4}>
                            <Col span={7}>
                                姓名：
                            </Col>
                            <Col span={12} style={borderBottomStyle}>                          
                                {showData.patientName}
                            </Col>
                        </Col>
                        <Col span={4}>
                            <Col span={7}>
                                性别：
                            </Col>
                            <Col span={12} style={borderBottomStyle}>
                                {showData.sex === 1 ? '男' : '女'}
                            </Col>
                        </Col>
                        <Col span={4}>
                            <Col span={7}>
                                年龄：
                            </Col>
                            <Col span={12} style={borderBottomStyle}>
                                {showData.age}
                            </Col>
                        </Col>
                        <Col span={4}>
                            <Col span={11}>
                                就诊卡号：
                            </Col>
                            <Col span={12} style={borderBottomStyle}>
                                {showData.cardNo}
                            </Col>
                        </Col>
                        <Col span={4}>
                            <Col span={7}>
                                科室：
                            </Col>
                            <Col span={12} style={borderBottomStyle}>
                                {showData.dept}
                            </Col>
                        </Col>
                    </Row>
                    <Divider style={{margin: '10px 0'}} />
                    <Row>
                        诊断：
                        {showData.record[1]}
                    </Row>
                    <Row>
                        治疗计划：
                    </Row>
                    <Row style={borderStyle}>
                        {showData.record[2]}
                    </Row>
                    <Row>
                        处方：
                    </Row>
                    <Row style={borderStyle}>
                        {showData.record[3]}
                    </Row>
                    <Row>
                        疗程：
                    </Row>
                    <Row style={borderStyle}>
                        {showData.record[4]}
                    </Row>
                    <Row>
                        健康教育：
                    </Row>
                    <Row style={borderStyle}>
                        {showData.record[5]}
                    </Row>
                    <Row>
                        备注：
                    </Row>
                    <Row style={borderStyle}>
                        {showData.record[6]}
                    </Row>
                    <Row style={rightStyle}>
                        <Col>
                            医生签名：
                        </Col>
                        <Col span={1}>
                        </Col>
                        <Col>
                            {showData.recorderName}
                        </Col>
                    </Row>
                    <Row style={rightStyle}>
                        <Col>
                            清单时间：
                        </Col>
                        <Col span={1}>
                        </Col>
                        <Col>
                            {showData.recordTime}
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col span={1} />
            <Col span={8}>
                <Table 
                    onRow={(record: Data) => {
                        return {
                            onClick: () => {
                                setShowData(dataSource.find(item => item.id === record.id) as Data)
                                console.log(showData)
                            }
                        }
                    }} 
                    dataSource={dataSource} 
                    pagination={false} 
                    bordered 
                    columns={columns}
                />
            </Col>
        </Row>
    )
}