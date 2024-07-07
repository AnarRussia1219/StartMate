const colorThemesVariables = {
    "borderRadiusPrimary": "8px",
    "cardsBorderRadius": "12px",
    "accent-1": "#de4c4a",
    "accent-1-contrasting": "#ffffff",
    "accent-2": "rgba(222, 76, 74, 0.15)",
    "accent-3": "rgba(255, 217, 0, 0.05)",
    "accent-4": "rgba(222, 76, 74, 0.45)",
    dark: {
        "black-1": "#171717",
        "black-2": "#1a1a1a",
        "black-3": "#121212",
    },
};

const colorThemes = {
    dark: () => {
        return {
            ":root": {
                "color": "white",
            },
            "body": {
                "background-color": colorThemesVariables.dark["black-1"],
                "color": "white",
            },
            "button": {
                "background-color": colorThemesVariables["accent-1"],
                "color": colorThemesVariables["accent-1-contrasting"],
                "border-radius": colorThemesVariables["borderRadiusPrimary"],
            },
            "button:active": {
                "opacity": "1",
            },
            "input": {
                "background-color": colorThemesVariables.dark["black-3"],
                "border": "1px solid rgba(255, 255, 255, 0.15)",
                "border-radius": colorThemesVariables["borderRadiusPrimary"],
            },
            "input:focus": {
                "border": "1px solid rgba(255, 255, 255, 0.5)",
            },
            ".tooltip": {
                "border-radius": colorThemesVariables.borderRadiusPrimary,
                "background-color": colorThemesVariables.dark["black-2"]
            },
            ".page-navigation": {
                "background-color": "#2b2b2b",
            },
            ".card": {
                "border-radius": colorThemesVariables.cardsBorderRadius,
                "background-color": colorThemesVariables.dark["black-2"],
            },
            ".page-navigation-top-options-block": {
                "border-radius": colorThemesVariables.borderRadiusPrimary,
            },
            ".page-navigation-top-options-block:hover": {
                "background-color": colorThemesVariables["accent-3"],
            },
            ".page-top-row-options-block": {
                "border-radius": colorThemesVariables.borderRadiusPrimary,
            },
            ".page-top-row-options-block:hover": {
                "background-color": colorThemesVariables["accent-3"],
            },
            "#page-navigation-navigations-add-task svg": {
                "color": colorThemesVariables["accent-1"],
            },
            "#page-navigation-navigations-add-task span": {
                "color": "white",
            },
            ".page-navigation-navigations-row": {
                "color": "white",
                "border-radius": colorThemesVariables.borderRadiusPrimary,
            },
            ".page-navigation-navigations-row:hover": {
                "background-color": colorThemesVariables["accent-3"],
            },
            "#page-navigation-navigations-add-task, #page-navigation-navigations-search, #page-navigation-navigations-today": {
                "border-bottom": "1px solid rgba(255, 255, 255, 0.15)",
            },
            "#page-navigation-navigations-add-task:hover, #page-navigation-navigations-search:hover, #page-navigation-navigations-today:hover": {
                "border-bottom": "1px solid rgba(255, 255, 255, 0.35)",
            },
            "#page-navigation-label-my-projects": {
                "color": "#b8b8b8",
            },
            ".page-navigation-project-item": {
                "border-bottom": "1px solid rgba(255, 255, 255, 0.15)",
            },
            ".page-navigation-project-item:hover": {
                "border-bottom": "1px solid rgba(255, 255, 255, 0.35)",
                "background-color": colorThemesVariables["accent-2"],
            },
            ".page-navigation-project-item.project-item-selected": {
                "background-color": colorThemesVariables["accent-4"],
                "border-bottom": "1px solid rgba(255, 255, 255, 0.35)",
            },
            ".page-navigation-project-item-start-label": {
                "color": "rgba(255, 255, 255, 0.35)",
            },
        };
    },
};


export {
    colorThemes, colorThemesVariables
};