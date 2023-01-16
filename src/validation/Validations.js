import { validation_rules } from "./Rules";

export const Validations = (states, rules) => {
    const errorObj = {};
    for (const property in states) {
        const ruleObj = rules.find((obj) => obj.field_key === property);
        errorObj[property] = "";
        if (ruleObj) {
            errorObj[property] = validation_rules(ruleObj, states[property]);
        }
    }
    return errorObj;
};