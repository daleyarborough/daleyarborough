import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';



function App1(){
    const [data, setData] = useState({ Items: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://796v03gpf2.execute-api.us-east-1.amazonaws.com/patient_demo/patientid',
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    return (    
        <ul>
            {console.log(JSON.stringify(data.Items))}
            {data.Items.map(Items => (
                
            <li key={Items.patientid}>
            <Card>
                <Card.Title>
                Patient: {Items.name}
                </Card.Title>
            <Card.Body>
            <p>Age: {Items.age}</p>
            <p>Heart Rate: {Items.heartRate}</p>
            </Card.Body>
            </Card>
            </li>
            ))}
        </ul>  
    );
}

export default App1;
