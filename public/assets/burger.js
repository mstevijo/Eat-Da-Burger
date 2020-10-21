$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newburger").val().trim(), devoured: 0
        };
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        });
    });
    $(".eatburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger has been devoured");
            location.reload();
        });
    });
    $(".trashburger").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});