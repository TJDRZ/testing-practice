function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
}

function reverseString(str) {
    const split = str.split('');
    const reverse = split.reverse();
    return reverse.join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

function caesar(n, s) {
    return s
      .split('')
      .map(c => {
        const ascii = c.charCodeAt(0);
        if (c.match(/\W/)) return c;
        return c.toUpperCase().charCodeAt(0) + n > 90
          ? String.fromCharCode(ascii + n - 90 + 64)
          : String.fromCharCode(ascii + n);
      })
      .join('');
  }

  function analyze(arr) {
    return {
        average: arr.reduce((a,b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
  }

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesar,
    analyze
};