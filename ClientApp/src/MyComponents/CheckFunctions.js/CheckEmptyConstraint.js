import { AlertsForUser } from "./AlertsForUser";
import { IsDataEmpty } from "./IsEmpty";

/**этот метод получает на вход:
 *     Поля, значение которых необходимо проверить, 
 *     массив предупреждений для пользователя.
 * Возвращает:
 *     true - прошел проверку,
 *     false - не прошел проверку.
 */
export function CheckEmptyConstraint(fieldsArr, alertsForUser){
    let variantOfAlertForUser = AlertsForUser.dict;

    if (IsDataEmpty(fieldsArr)) {
        // добавлено ли уже предупреждение в список 
        if (alertsForUser.indexOf(variantOfAlertForUser["fieldsEmpty"]) == -1) {
            alertsForUser.push(variantOfAlertForUser["fieldsEmpty"]);
        }
        
        return false; // не прошел проверку
    }
    else{
        const alertForRemoveIndex = alertsForUser.indexOf(variantOfAlertForUser["fieldsEmpty"]);
        if (alertForRemoveIndex !== -1) {
            alertsForUser.splice(alertForRemoveIndex, 1);
        }
        return true; // прошел проверку
    }
}