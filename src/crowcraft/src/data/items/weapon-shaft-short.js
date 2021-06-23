import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";

export class WeaponShaftShort extends Item {
    constructor() {
        super(
            "weapon shaft: short",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                // new CraftingMaterial(1, new MetalBarOrPlank()), // TODO Implement 'or' rule?
                new CraftingMaterial(1, new MetalBar()),
            ],
            1
        );
    }
}
    