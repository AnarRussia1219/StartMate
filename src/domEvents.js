import {toggleSidebarOpenVar, toggleSidebarOpen, userInfo, loadAfterNewUserForm} from ".";

function addDomEvents() {
    ////// CLOSING AND OPENING THE SIDEBAR //////
    // close btn
    document.getElementById("page-navigation-top-options-close-sidebar").addEventListener("click", () => {
        toggleSidebarOpenVar();
        toggleSidebarOpen();
    });
    // open btn
    document.getElementById("page-top-row-options-open-sidebar").addEventListener("click", () => {
        toggleSidebarOpenVar();
        toggleSidebarOpen();
    });

    ////// NEW USER FORM CARD //////
    // submit btn
    document.getElementById("new-user-form-card").addEventListener("submit", (event) => {
        event.preventDefault();
        localStorage.setItem("isNewUser", "false");

        // set the first name based on the first name inputs value
        userInfo["first-name"] = document.getElementById("new-user-form-card-first-name-input").value.trim();
        // for the ;ast name
        userInfo["last-name"] = document.getElementById("new-user-form-card-last-name-input").value.trim();
        console.log(userInfo);
        // save to localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        // remove the new-user-card-backdrop itself because no more need, right?
        // we need an animation!!
        document.getElementById("new-user-form-card").style.transform = "translateY(-250%)";
        setTimeout(() => {
            loadAfterNewUserForm();
            document.getElementById("new-user-form-card-backdrop").remove();
            // set the page navigation overlay display to flex so that you can see it
            document.getElementById("page-navigation-overlay").style.display = "flex";
        }, 50);
    });
};

export {
    addDomEvents
};