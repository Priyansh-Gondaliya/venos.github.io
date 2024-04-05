// Setting icon Toggle
$(document).ready(function () {
    $(".set-icon").click(function () {
        $(".set-menu").slideDown(1);
        $(".set-icon").hide(1);
        $(".set-icon-2").show(1);
    });

    $(".set-icon-2").click(function () {
        $(".set-menu").slideUp(1);
        $(".set-icon-2").hide(1);
        $(".set-icon").show(1);
    });
});

$(document).ready(function () {
    $(".navi-menu").click(function () {
        $(".navbar").animate({ width: "3.5%" });
        $('.navbar').hide(1);
        $(".navbar-2").animate({ width: "3.5%" });
        $('.navbar-2').show(10);
        $('.card').animate({ left: "6.2%", width: "91%" });

    });
    $(".navi-menu-2").click(function () {
        $('.navbar-2').hide(1);
        $('.navbar').show(10);
        $(".navbar").animate({ width: "15%" });
        $('.card').animate({ left: "17.5%", width: "79%" });

    });

});

$(document).ready(function () {
    $(".edit-profile").click(function () {
        $(".edit-user-info").show(1);
    });
});

// Retrieve submitted text from localStorage and update the display
const submittedNewUsername = localStorage.getItem('submittedNewUsername');
if (submittedNewUsername) {
    document.getElementById('edit-name').innerText = submittedNewUsername;
}

function submitNewUsername() {
    const newText = document.getElementById('username-input').value;
    localStorage.setItem('submittedNewUsername', newText);
    window.location.href = '/Pages/HTML Pages/Profile.html'; // Redirect back to the main page
}