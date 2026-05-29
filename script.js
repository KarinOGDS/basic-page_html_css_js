// Add a new recommendation

function addRecommendation() {

    // Get textarea element

    const recommendation =
        document.getElementById("new_recommendation");

    // Remove extra spaces

    const message =
        recommendation.value.trim();

    // Validate empty input

    if (message !== "") {

        console.log("New recommendation added");

        // Create recommendation card

        const element =
            document.createElement("div");

        // Add class

        element.setAttribute(
            "class",
            "recommendation"
        );

        // Add recommendation content

        element.innerHTML =

            "<span>&#8220;</span>" +

            message +

            "<span>&#8221;</span>";

        // Append to recommendations section

        document
            .getElementById("all_recommendations")
            .appendChild(element);

        // Clear textarea

        recommendation.value = "";

        // Show success popup

        showPopup(true);
    }

}

/* Popup controller */

function showPopup(show) {

    const popup =
        document.getElementById("popup");

    if (show) {

        popup.style.visibility =
            "visible";

    }

    else {

        popup.style.visibility =
            "hidden";

    }

}