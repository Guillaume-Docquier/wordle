///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Stone } from "./stone";

export class FloorTiles extends Item {
    constructor() {
        super(
            "floor tiles",
            [Professions.Stonemason],
            [Rarities.Common],
            [
                new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(25, new Stone()),
				new CraftingMaterial(25, new Stone()),
				new CraftingMaterial(25, new Stone()),
            ],
            1,
            ""
        );
    }
}