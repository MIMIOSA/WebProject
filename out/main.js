function DrawPyramid(num) {
    var a, b, c = 0;
    var star, space = "";
    for (a = 0; a < num; a++) {
        star = "";
        space = "";
        for (b = 0; b < (num - a - 1); b++) {
            space += " ";
        }
        for (c = 0; c < (2 * a + 1); c++) {
            star += "*";
        }
        console.log(space + star);
    }
}
window.onload = function () {
    DrawPyramid(5);
};
//# sourceMappingURL=main.js.map