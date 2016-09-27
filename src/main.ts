function DrawPyramid(num:number):void{

    var a, b, c: number=0;
    var star, space: string="";

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

window.onload = () => {
    DrawPyramid(5);
};