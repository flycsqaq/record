export interface Api {
    context: string; 
    id: number | string; 
    visitId: string; 
    hisPtId: string; 
    regId: number | string; 
    recorder: {
        name: string; 
        id: number
    }; 
    cardNo: string; 
    patientName: string; 
    sex: number | string; 
    recordTime: string; 
    formId: number | string; 
    score: number | string;
    age?: string;
    dept?: string;
    record: string[]
}

export interface Data extends Api {
    recorderName: string;
    seq: number | string;
    key: number | string;
}