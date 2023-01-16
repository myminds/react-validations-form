
const mob_regex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/;
export const validation_rules = (rule, value) => {
    let error = "";
    if (
        value === "" ||
        value === null ||
        value === undefined ||
        (Array.isArray(value) && value.length === 0)
    ) {
        error = `${rule.field_name} is Required`;
    }
    if (rule.type === "number") {
        error = `${rule.field_name} is Required`;
    }
    if (rule.type === "mobile" && !mob_regex.test(value)) {
        error = `Please enter correct mobile.`;
    }
    if (rule.type === "email" && !validateEmail(value)) {
        error = `Please enter correct email.`;
    }
    return error;
};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};