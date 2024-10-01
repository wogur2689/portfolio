$(document).ready(function() {
    // 진행률
    $('.skill').each(function(){
        var skill = $(this);
        var percentage = skill.find('.percentage').text();
        skill.find('.inner-bar').animate({width: percentage},1500)
    });
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}