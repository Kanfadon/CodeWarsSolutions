function makeAWindow(num) {
    let window = '';
    const len = num * 2 + 1;

    window += '-'.repeat(num * 2 + 3) + '\n';

    for (let i = 1; i !== len; i++) {
        window += '|' + '.'.repeat(num) + '|' + '.'.repeat(num) + '|\n';

        if (i === num) {
            window += '|' + '-'.repeat(num) + '+' + '-'.repeat(num) + '|\n';
        }
    }

    window += '-'.repeat(num * 2 + 3);
    return window;
}