import { useState } from "react";

export function EditClientInfo(props) {
    const [clientId, setClientId] = useState(props.match.params.id);
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
}