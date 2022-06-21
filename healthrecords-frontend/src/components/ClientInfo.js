import { useState } from "react";
import APIService from "../REST/APIService";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";


export function ClientInfo(props) {

    const [clientId, setClientId] = useState();
    const [invalidClientId, setInvalidClientId] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [doctorFullName, setDoctorFullName] = useState('');
    const [doctorPhoneNumber, setDoctorPhoneNumber] = useState(0);
    const [allergies, setAllergies] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [highBloodPressure, setHighBloodPressure] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // if (props.id !== '') (
    //     setClientId(props.id)
    // )

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let clientInfo = await APIService.getClientInfo(clientId);
        if (clientInfo === '') { // invalid id input
            setInvalidClientId(true);
        } else {
            setFirstName(clientInfo.firstName);
            setLastName(clientInfo.lastName);
            setDob(clientInfo.dob);
            setDoctorFullName(clientInfo.doctorFirstName + ' ' + clientInfo.doctorLastName);
            setDoctorPhoneNumber(clientInfo.doctorPhoneNumber);
            setAllergies(clientInfo.allergies);
            setDiabetes(clientInfo.diabetes);
            setHighBloodPressure(clientInfo.highBloodPressure);
        }
    }
    
    if (firstName === '' && lastName === '') {
        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    {invalidClientId === true &&
                        <p style={{color: "red"}}>
                            This ID is invalid. Please enter a valid health ID number.
                        </p>
                    }
                    <Form.Label htmlFor="inputClientID">Health ID number  </Form.Label>
                    <Form.Control
                        type="number"
                        id="inputClientID"
                        onChange={e => setClientId(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                
                <br/>

                <h4>OR</h4>

                <br/>

                <div id="create-new-client">
                    <Link to="/newclient">
                        <button variant="outlined">
                            Create New Client
                        </button>
                    </Link>
                </div>
            </div>
        );
    } 

    return (
        // if isLoading is set to true, then return the loading spinner
        isLoading ?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            :
            <div>
                <h1>Hi, {firstName}.</h1>
                <h3>Here is the information we currently have on you in your file: </h3>
                <Table striped bordered hover variant="dark" align="center">
                    <thead>
                        <tr>
                        <th>Client ID: {clientId}</th>
                        <th colSpan={2}>{firstName}</th>
                        <th>{lastName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DOB</td>
                            <td colSpan={3}>{dob}</td>
                        </tr>
                        <tr>
                            <td>Doctor Name:</td>
                            <td colSpan={3}>{doctorFullName}</td>
                        </tr>
                        <tr>
                            <td>Doctor Number</td>
                            <td colSpan={3}>{doctorPhoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Allergies</td>
                            {allergies === true &&
                                <td colSpan={3}>Yes</td>
                            }
                            {allergies === false &&
                                <td colSpan={3}>No</td>
                            }
                        </tr>
                        <tr>
                            <td>Diabetes</td>
                            {diabetes === true &&
                                <td colSpan={3}>Yes</td>
                            }
                            {diabetes === false &&
                                <td colSpan={3}>No</td>
                            }
                        </tr>
                        <tr>
                            <td>High Blood Pressure</td>
                            {highBloodPressure === true &&
                                <td colSpan={3}>Yes</td>
                            }
                            {highBloodPressure === false &&
                                <td colSpan={3}>No</td>
                            }
                        </tr>
                    </tbody>
                </Table>
            </div>
    );
}