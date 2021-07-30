import { useCallback, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { iDate } from "../utils";

const StudentForm = ({ student = {}, submitHandler, children }) => {

    const isNotNull = useCallback((value) => (value || "").trim() !== "", []);
    const isEmail = useCallback((value) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
    }, []);
    const isPhoneNumber = useCallback((value) => {
        const re =
            /^((09[0-9]{8})|(08([1-9])[0-9]{7})|(01(2|6|8|9)[0-9]{8})|(069[2-9][0-9]{4,5})|(080(4|31|511|8)[0-9]{4})|(0([2-8])[0-9]{1,2}[0-9]{1,3}[0-9]{5}))$/;
        return re.test(String(value).toLowerCase());
    }, []);

    const fullname = useInput(isNotNull, { type: "text", label: "Fullname:", placeholder: "Enter fullname", errorMessage: "Fullname cannot be empty", default: student.fullname });
    const birthday = useInput(isNotNull, { type: "date", label: "Birthday:", placeholder: "Enter birthday", errorMessage: "Birthday cannot be empty", default: student.birthday ? iDate(student.birthday, "{f}-{n}-{j}") : "" });
    const email = useInput(isEmail, { type: "email", label: "Email:", placeholder: "Enter email", errorMessage: "Email invalidate", default: student.email });
    const phoneNumber = useInput(isPhoneNumber, { type: "text", label: "Phone number:", placeholder: "Enter phone number", errorMessage: "Phone invalidate", default: student.phoneNumber });
    const inputs = { fullname, birthday, email, phoneNumber };
    const isSubmit = useMemo(() => {
        let d = true;
        for (const k in inputs) {
            inputs[k].isValid === false && (d = false);
        }
        return d;
    }, Object.keys(inputs).map(k => inputs[k].isValid));
    const dataForm = useMemo(() => {
        const data = {};
        for (const k in inputs) {
            data[k] = inputs[k].value;
        }
        return data;
    }, Object.keys(inputs).map(k => inputs[k].value));
    return (
        <Form
            style={{ minWidth: "350px" }}
            onSubmit={(e) => {
                e.preventDefault();
                isSubmit && submitHandler(dataForm)
            }}
            onReset={() => {
                for (const k in inputs) {
                    inputs[k].reset();
                }
            }}
        >

            {Object.keys(inputs).map(k => {
                const input = inputs[k];
                return (
                    <Form.Group className="mb-3">
                        <Form.Label>{input.label}</Form.Label>
                        <Form.Control
                            type={input.type}
                            placeholder={input.placeholder}
                            onChange={input.changeHandler}
                            onBlur={input.blurHandler}
                            value={input.value}
                        />
                        {input.hasError && (
                            <Form.Text className="text-danger">
                                {input.errorMessage}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
            })}
            {!isSubmit && <div className="tar mb-3">
                <Form.Text className="text-danger">
                    "An invalid value cannot be submit"
                </Form.Text>
            </div>}
            {children}
        </Form>
    )
}

export default StudentForm;