let size = 5;
let result = '';
let spaceCount = size;
let mid = (size + 1) / 2;
let spaceLeft = mid;
let spaceRight = mid;

for (let line = 0; line <= mid; line += 1) {
    for (let column = 0; column <= size; column += 1) {
        if (column > spaceLeft && column < spaceRight) {
            result += '*';
        } else {
            result += ' ';
        }
    }

    console.log(result);
    result = '';
    spaceRight += 1;
    spaceLeft -= 1
}