import { OptionCondition } from "./option-condition";
export interface Badge {
    text: string;
    badgeColor: string;
    badgeTextColor: string;
    condition: OptionCondition;
}
