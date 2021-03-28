let size = 5;
let result = '';
let spaceCount = size;

for (let line = 1; line <= size; line += 1) {
    for (let column = 1; column <= size; column += 1) {
        if (column < spaceCount) {
            result += ' ';
        } else {
            result += '*';
        }
    }

    console.log(result);
    result = '';
    spaceCount -= 1;
}