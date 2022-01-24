import { AlertsForUser } from "./AlertsForUser";

export function CheckAreNumbersMoreThanZero(valArr, alertsForUser) {
    let isValid = true;
    valArr.forEach(element => {
        isValid = isValid && (element > 0);
    });
    if (!isValid) {
        if (alertsForUser.indexOf(AlertsForUser.dict["numbersMoreThanZero"]) == -1) {
            alertsForUser.push(AlertsForUser.dict["numbersMoreThanZero"]);
        }
    }
    else{
        const alertForRemoveIndex = alertsForUser.indexOf(AlertsForUser.dict["numbersMoreThanZero"]);
        if (alertForRemoveIndex !== -1) {
            alertsForUser.splice(alertForRemoveIndex, 1);
        }
    }
    return isValid;
}

export function CheckAreNumbersMoreThanOrEqualsToZero(valArr, alertsForUser) {
    let isValid = true;
    valArr.forEach(element => {
        isValid = isValid && (element >= 0);
    });
    if (!isValid) {
        if (alertsForUser.indexOf(AlertsForUser.dict["numbersMoreThanOrEqualsToZero"]) == -1) {
            alertsForUser.push(AlertsForUser.dict["numbersMoreThanOrEqualsToZero"]);
        }
    }
    else{
        const alertForRemoveIndex = alertsForUser.indexOf(AlertsForUser.dict["numbersMoreThanOrEqualsToZero"]);
        if (alertForRemoveIndex !== -1) {
            alertsForUser.splice(alertForRemoveIndex, 1);
        }
    }
    return isValid;
}