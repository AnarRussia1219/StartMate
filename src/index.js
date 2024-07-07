import "./root.css";
import {Project} from "./constructors/Project.js";
import {Task} from "./constructors/Task.js";
import {domElements} from "./domElements.js";
import {addDomEvents} from "./domEvents.js";
import {colorThemes, colorThemesVariables} from "./colorThemes.js";
// use the root.css for setting the layout
// use the themes object to customize apppearance and colors

let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {
    "first-name": "",
    "last-name": "",
};
let isNewUser = localStorage.getItem("isNewUser") || "true";

// reference to the dom elements that are somewhat important
const domElementsVar = domElements();

let selectedTheme = 0;
let cachedStyleTag = document.createElement("style");

let sidebarOpen = true;
function toggleSidebarOpenVar() {
    sidebarOpen = !sidebarOpen;
};
function toggleSidebarOpen() {
    if (sidebarOpen) {
        document.getElementById("page-top-row-options-open-sidebar").style.display = "none";
        document.getElementById("page-navigation-overlay").style.display = "flex";
        document.getElementById("page-navigation").style.width = "310px";
        document.getElementById("page-top-row-options-open-sidebar").style.display = "none";
    } else {
        document.getElementById("page-navigation-overlay").style.display = "none";
        document.getElementById("page-navigation").style.width = "0px";
        document.getElementById("page-top-row-options-open-sidebar").style.display = "flex";
    };
};

/*
the myProject array is the main entrypoint of the app,
the myProject array will always contain an OBJECT, this object is the same as a project constructor object
*/
const myProjects = [
    // starter projects
    new Project("Home", "Tasks for my home", true, [
        new Task("Set up the garden", "It will make my home look better", true),
        new Task("Decorate the kitchen", "it will make my cooking experience better", false),
    ]),
    new Project("Work", "Tasks for work", false, [
        new Task("Finish desiging the structure of the buildingn", "It will make my boss happy", true),
        new Task("Gather the materials needed to build", "My boss will give me a raise", false),
    ]),
];

console.log(myProjects);

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    loadColorTheme();
    addDomEvents();

    // if the user is new then show the card
    if (isNewUser === "true") {

        document.getElementById("new-user-form-card-backdrop").style.display = "flex";
        // timeout for animation
        setTimeout(() => {
            document.getElementById("new-user-form-card").style.transform = "translateY(-50%)";
        }, 50);
    } else {
        loadAfterNewUserForm();
        // set the page navigation overlay display to flex, the display none is already set in the css
        document.getElementById("page-navigation-overlay").style.display = "flex";
    };

    toggleSidebarOpen();
    renderProjectsToNavigation();
});

function renderProjectsToNavigation() {
    // check if only one project selected
    let onlyOneProjectSelectedStr = ""; // use a string to check, if the string contains 2 true values then there are multiple projects selected, well it will only check if the length of the str is 4 since true length = 4 and false length = 5. clever?
    for (
        let myProjectsArrayIndex = 0; myProjectsArrayIndex < myProjects.length; myProjectsArrayIndex++
    ) {
        if (myProjects[myProjectsArrayIndex].selected) {
            onlyOneProjectSelectedStr += "true";
        };
    };

    if (onlyOneProjectSelectedStr.length <= 4 && onlyOneProjectSelectedStr === "true") {
        domElementsVar["#page-navigation-projects-viewer"].innerHTML = "";

        for (
            let myProjectsArrayIndex = 0; myProjectsArrayIndex < myProjects.length; myProjectsArrayIndex++
        ) {
            const newPageNavigationProjectItem = document.createElement("div");
            // add classes
            newPageNavigationProjectItem.classList.add("page-navigation-navigations-row");
            newPageNavigationProjectItem.classList.add("cursor-pointer");
            newPageNavigationProjectItem.classList.add("page-navigation-project-item");
            // add the selected class if myProjects[myProjectsarrayIndex].selected
            if (myProjects[myProjectsArrayIndex].selected) {
                newPageNavigationProjectItem.classList.add("project-item-selected");
            };

            // the start label
            const newPageNavigationProjectItemStartLabel = document.createElement("span");
            newPageNavigationProjectItemStartLabel.classList.add("page-navigation-project-item-start-label");
            newPageNavigationProjectItemStartLabel.textContent = "#";
            // append
            newPageNavigationProjectItem.appendChild(newPageNavigationProjectItemStartLabel);

        // the project name
        const newPageNavigationProjectItemProjectName = document.createElement("span");
        // this has no class, for now
        newPageNavigationProjectItemProjectName.textContent = myProjects[myProjectsArrayIndex].name;
        // append
        newPageNavigationProjectItem.appendChild(newPageNavigationProjectItemProjectName);

        // the tooltip
        const newPageNavigationProjectItemProjectTooltip = document.createElement("div");
        newPageNavigationProjectItemProjectTooltip.classList.add("tooltip");
        newPageNavigationProjectItemProjectTooltip.textContent = myProjects[myProjectsArrayIndex].name;
        // append
        newPageNavigationProjectItem.appendChild(newPageNavigationProjectItemProjectTooltip);

        ////// events //////
        newPageNavigationProjectItem.addEventListener("click", () => {
            // set the selected prop of all the myprojects to false
            myProjects.forEach((project) => {
                project.selected = false;
            });
            // set the current index projects selected prop to true
            myProjects[myProjectsArrayIndex].selected = true;
            // rerender
            // console.log(myProjects);
            renderProjectsToNavigation(); 
        });

        domElementsVar["#page-navigation-projects-viewer"].appendChild(newPageNavigationProjectItem);
    };
    } else {
        throw new Error("MORE THAN 2 PROJECTS CANT BE SELECTED");
    }
};

function loadAfterNewUserForm() {
    document.getElementById("page-navigation-top-profile-name").textContent = userInfo["first-name"];
};

// 0 = dark
// 1 = light
function loadColorTheme() {
    cachedStyleTag.innerHTML = "";

    if (selectedTheme === 0) {
        if (typeof colorThemes.dark === "function") {
            const darkTheme = colorThemes.dark();
            let cssString = "";

            Object.keys(darkTheme).forEach((selector) => {
                cssString += `${selector}{`;

                Object.keys(darkTheme[selector]).forEach((property) => {
                    cssString += `${property}: ${darkTheme[selector][property]};`;
                });

                cssString += "}";
            });

            cachedStyleTag.innerHTML = cssString;
            document.head.appendChild(cachedStyleTag);
        } else {
            throw new Error("colorThemes.js{colorThemes.dark} not found or data invalid");
        };
    };
};

export {
    userInfo, myProjects, toggleSidebarOpenVar, toggleSidebarOpen, loadAfterNewUserForm, renderProjectsToNavigation
};