class Trap extends LivingCreature { 





eat() {
    var emptyCells = this.chooseCell(3);
    var newCell = random(emptyCells);
    if(newCell) {
        this.energy--
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 0
        for (var i in predatorArr) {
            if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                
                break;
            }
        }
        
    }if (this.energy <= 0) {
        this.die()
    }
 }
 

die() {

    matrix[this.y][this.x] = 0
    for (var i in trapArr) {
        if (this.x == trapArr[i].x && this.y == trapArr[i].y) {
            trapArr.splice(i, 1);
            break;
        }
    }
}


}
