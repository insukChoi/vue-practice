$(document).ready(function(){
    _thisPage.onload();

    $("#btn").on("click", function () {
        _thisPage.btnClick();
    });
});

var _thisPage = {
    onload : function () {
        console.log("onload = "+vm.object.firstName);
    },
    btnClick : function () {
        console.log("click = "+vm.object.firstName);
    }
};