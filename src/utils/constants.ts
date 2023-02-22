import { Phase } from "./types";

export const PHASES: Record<string, Phase[]> = {
    ELDRITCH_HORROR: [
        {
            name: "Action",
            icon: "https://health-infobase.canada.ca/img/workout.png",
            all: true,
        },
        {
            name: "Encounter",
            icon: "https://icones.pro/wp-content/uploads/2021/05/symbole-d-avertissement-rose.png",
            all: true
        },
        {
            name: "Mythos",
            icon: "https://icones.pro/wp-content/uploads/2021/05/icone-point-d-interrogation-question-rose.png",
            all: false,
        },
    ],
    DEAD_OF_WINTER : [
        {
            name: "Player Turn",
            icon: "https://health-infobase.canada.ca/img/workout.png",
            all: true,
        },
        {
            name: "Colony",
            icon: "https://www.styleconstruction.com.au/images/style_home.png",
            all: false,
        }
    ]
}