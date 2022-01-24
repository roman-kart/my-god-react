import { AlertsForUser } from "./AlertsForUser";

/**этот метод получает на вход:
 *     Поля, значение которых необходимо проверить, 
 *     массив предупреждений для пользователя.
 * Возвращает:
 *     true - прошел проверку,
 *     false - не прошел проверку.
 */
export function CheckElementInList(element, listOfElement, alertsForUser){
    let variantOfAlertForUser = AlertsForUser.dict;
    if (listOfElement.findIndex(item => item.name == element.name) !== -1) {
        // добавлено ли уже предупреждение в список 
        if (alertsForUser.indexOf(variantOfAlertForUser["elementInList"]) == -1) {
            alertsForUser.push(variantOfAlertForUser["elementInList"]);
        }
        return true; // элемент существует в массиве
    }
    else{
        const alertForRemoveIndex = alertsForUser.indexOf(variantOfAlertForUser["elementInList"]);
        if (alertForRemoveIndex !== -1) {
            alertsForUser.splice(alertForRemoveIndex, 1);
        }
        return false; // элемента в массиве нет
    }
}