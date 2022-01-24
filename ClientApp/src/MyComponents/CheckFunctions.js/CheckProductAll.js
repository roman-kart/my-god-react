import { CheckElementInList } from "./CheckElementInList";
import { CheckEmptyConstraint } from "./CheckEmptyConstraint";
import { CheckAreNumbersMoreThanZero } from "./CheckAreValuesValid";
import { CheckAreNumbersMoreThanOrEqualsToZero } from "./CheckAreValuesValid";

export function CheckProductAll(productForAdd, forCheckIsEmpty, forCheckMoreThanZero, forCheckMoreThanOrEqualsToZero, userProductList, alertForUser){
        let isProdValid = true;
        // если такой продукт уже есть в списке, то делаем продукт невалидным
        if (CheckElementInList(productForAdd, userProductList, alertForUser)) {
            isProdValid = false;
        }

        // если не прошел проверку на пустые значения, то делаем продукт невалидным
        if (!CheckEmptyConstraint(forCheckIsEmpty, alertForUser)) {
            isProdValid = false;
        }

        // если количество меньше или равно 0, то делаем продукт невалидным
        if (!CheckAreNumbersMoreThanZero(forCheckMoreThanZero, alertForUser)) {
            isProdValid = false;
        }

        // если стоимость продукта меньше 0, то делаем продукт невалидным
        if (!CheckAreNumbersMoreThanOrEqualsToZero(forCheckMoreThanOrEqualsToZero, alertForUser)) {
            isProdValid = false;
        }

        return isProdValid;
}