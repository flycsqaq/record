import { Api, Data } from './type'

const mockData: Api[] = [
    {
        context: "0602040000", 
        id: 8, 
        visitId: "6668542", 
        hisPtId: "0002607105", 
        regId: 5, 
        recorder: {
            name: "超级管理员", 
            id: 1
        }, 
        cardNo: "0002607105", 
        patientName: "童华娅", 
        sex: 2, 
        recordTime: "2019-08-15 10:33:47", 
        formId: 1, 
        score: 12,
        record: [
            '',
            '骨痛病',
            '(显示治疗项目)',
            '(显示手法)'
        ]
    },
    {
        context: "^脊椎病,骨痹病^温针 1 次",
        id: 41, 
        visitId: "6677934", 
        hisPtId: "0002450053", 
        regId: 17, 
        recorder: {
            name: "超级管理员", 
            id: 1
        }, 
        cardNo: "0002450053", 
        patientName: "宋娟", 
        age: "40岁", 
        sex: 2, 
        recordTime: "2019-08-22 15:13:32", 
        formId: 3, 
        score: 0, 
        dept: "针灸科门诊",
        record: [
            '',
            '骨痛病',
            '(显示治疗项目)',
            '(显示手法)'
        ]
    }
]

const changeData = (arr: Api[]): Data[] => {
    return arr.map((item, index) => ({
        ...item,
        recorderName: item.recorder.name,
        seq: index + 1,
        key: item.id
    }))
}

export const getData = async () => {
    const data: Api[] = await mockData
    return changeData(data)
}