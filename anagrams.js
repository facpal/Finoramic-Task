module.exports = {
    //param A : array of strings
    //return a array of array of integers
    anagrams: function (A) {
        var result = [];
        var hash = {};

        for (var i = 0; i < A.length; i++) {
            var word = A[i];

            var sorted = word.split('').sort().join('');

            if (hash[sorted]) {
                hash[sorted].push(i + 1);
            } else {
                hash[sorted] = [i + 1];
            }
        }

        for (var key in hash) {
            result.push(hash[key]);
        }

        return result;
    }
};

