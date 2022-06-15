import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import APIService from '../REST/APIService';

export function CreateNewClient() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [doctorFirstName, setDoctorFirstName] = useState('');
    const [doctorLastName, setDoctorLastName] = useState('');
    const [doctorPhoneNumber, setDoctorPhoneNumber] = useState(0);
    const [allergies, setAllergies] = useState(false);
    const [diabetes, setDiabetes] = useState(false);
    const [highBloodPressure, setHighBloodPressure] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newClientInfo = await APIService.createNewClient(
            firstName,
            lastName,
            dob,
            doctorFirstName,
            doctorLastName,
            doctorPhoneNumber,
            allergies,
            diabetes,
            highBloodPressure
        )
        navigate('/');
        alert('New Client ID: ' + newClientInfo.id + '. Please save the ID number for future reference.');
    }

    return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="firsName">First Name  </Form.Label>
                <Form.Control
                    type="text"
                    id="firsName"
                    onChange={e => setFirstName(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="lastName">Last Name  </Form.Label>
                <Form.Control
                    type="text"
                    id="lastName"
                    onChange={e => setLastName(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="dob">DOB  </Form.Label>
                <Form.Control
                    type="date"
                    id="dob"
                    onChange={e => setDob(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="doctorFirstName">Doctor First Name  </Form.Label>
                <Form.Control
                    type="text"
                    id="doctorFirstName"
                    onChange={e => setDoctorFirstName(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="doctorLastName">Doctor Last Name  </Form.Label>
                <Form.Control
                    type="text"
                    id="doctorLastName"
                    onChange={e => setDoctorLastName(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="doctorPhoneNumber">Doctor Phone Number  </Form.Label>
                <Form.Control
                    type="text"
                    id="doctorPhoneNumber"
                    onChange={e => setDoctorPhoneNumber(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check 
                        type="checkbox"
                        id={`default-"checkbox"`}
                        label={`Allergies`}
                        onChange={e => e.target.value === 'on' ? setAllergies(true) : setAllergies(false)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check 
                    type="checkbox"
                    id={`default-"checkbox"`}  
                    label={`Diabetes`}
                    onChange={e => e.target.value === 'on' ? setDiabetes(true) : setDiabetes(false)}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check 
                    type="checkbox"
                    id={`default-"checkbox"`}
                    label={`High Blood Pressure`}
                    onChange={e => e.target.value === 'on' ? setHighBloodPressure(true) : setHighBloodPressure(false)}
                />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
    );
}