function doneOrNot(board) {
    let pattern = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 9; i += 3) {
        const cell1 = [].concat(board[i].slice(0, 3), board[i + 1].slice(0, 3), board[i + 2].slice(0, 3)).sort();
        const cell2 = [].concat(board[i].slice(3, 6), board[i + 1].slice(3, 6), board[i + 2].slice(3, 6)).sort();
        const cell3 = [].concat(board[i].slice(6, 9), board[i + 1].slice(6, 9), board[i + 2].slice(6, 9)).sort();
        for (let j = 0; j < 3; j++) {
            if (cell1[j] == pattern[j] && cell2[j] == pattern[j] && cell3[j] == pattern[j]) {
                continue;
            } else {
                return "Try again!";
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        const horizontal = [].concat(board[i]).sort();
        for (let j = 0; j < board[i].length; j++) {
            if (horizontal[j] == pattern[j]) {
                continue;
            } else {
                return "Try again!";
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        const vertical = [];
        for (let j = 0; j < board[i].length; j++) {
            vertical.push(board[j][i]);
        }
        vertical.sort();
        for (let j = 0; j < board[i].length; j++) {
            if (vertical[j] == pattern[j]) {
                continue;
            } else {
                return "Try again!";
            }
        }
    }
    return "Finished!";
}