import { useState, useEffect, createRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import APIService from "../REST/APIService";

export function EditClientInfo(props) {
    let {id} = useParams();
    const [clientId, setClientId] = useState(id);
    const [invalidClientId, setInvalidClientId] = useState(false);
    const [prevDoctorFirstName, setPrevDoctorFirstName] = useState('');
    const [prevDoctorLastName, setPrevDoctorLastName] = useState('');
    const [prevDoctorPhoneNumber, setPrevDoctorPhoneNumber] = useState();
    const [prevAllergies, setPrevAllergies] = useState(false);
    const [prevDiabetes, setPrevDiabetes] = useState(false);
    const [prevHighBloodPressure, setPrevHighBloodPressure] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // uncontrolled form fields
    let doctorFirstName = createRef();
    let doctorLastName = createRef();
    let doctorPhoneNumber = createRef();
    let allergies = createRef();
    let diabetes = createRef();
    let highBloodPressure = createRef();

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchClientInfo() {
            setIsLoading(true);
            let clientInfo = await APIService.getClientInfo(clientId);
            if (clientInfo === '') { // invalid id input
                setInvalidClientId(true);
            } else {
                setPrevDoctorFirstName(clientInfo.doctorFirstName)
                setPrevDoctorLastName(clientInfo.doctorLastName);
                setPrevDoctorPhoneNumber(clientInfo.doctorPhoneNumber);
                setPrevAllergies(clientInfo.allergies);
                setPrevDiabetes(clientInfo.diabetes);
                setPrevHighBloodPressure(clientInfo.highBloodPressure);
                setIsLoading(false);
            }
        }
        fetchClientInfo();
      });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(diabetes.current.checked);
        await APIService.updateClientInfo(clientId, 
            doctorFirstName.current.value, 
            doctorLastName.current.value, 
            doctorPhoneNumber.current.value, 
            allergies.current.checked, 
            diabetes.current.checked, 
            highBloodPressure.current.checked);
        alert("Info updated successfully!");
        navigate("/");
    }

    return (
        <div>
            <h3>Edit Info</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label htmlFor="doctorFirstName">Doctor First Name  </Form.Label>
                <Form.Control
                    type="text"
                    id="doctorFirstName"
                    defaultValue={prevDoctorFirstName}
                    ref = {doctorFirstName}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="doctorLastName">Doctor Last Name  </Form.Label>
                <Form.Control
                    type="text"
                    id="doctorLastName"
                    defaultValue={prevDoctorLastName}
                    ref = {doctorLastName}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label htmlFor="doctorPhoneNumber">Doctor Phone Number  </Form.Label>
                <Form.Control
                    type="text"
                    id="doctorPhoneNumber"
                    defaultValue={prevDoctorPhoneNumber}
                    ref = {doctorPhoneNumber}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check 
                        type="checkbox"
                        id={`default-"checkbox"`}
                        label={`Allergies`}
                        defaultChecked={prevAllergies}
                        ref = {allergies}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check 
                    type="checkbox"
                    id={`default-"checkbox"`}
                    label={`Diabetes`}
                    defaultChecked={prevDiabetes}
                    ref = {diabetes}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Check 
                    type="checkbox"
                    id={`default-"checkbox"`}
                    label={`High Blood Pressure`}
                    defaultChecked={prevHighBloodPressure}
                    ref = {highBloodPressure}
                />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Submit Changes
                </Button>
            </Form>
        </div>
    );
}