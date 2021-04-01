import { Spell } from "./spell";

export class Monster {
    id: Number;
    name: String;
    image: String;
    detail?: String;
    spells?: Array<Spell>;
}
