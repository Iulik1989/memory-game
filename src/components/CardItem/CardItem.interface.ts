import {CardItem} from "entity/card.ts";

export interface CardItemProps {
    item: CardItem;
    index: number;
    handleClick: (idx: number) => void;
    open: boolean;
}
