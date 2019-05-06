module.exports = { 
	//param A : array of integers
	//param B : integer
	//return an integer
	threeSumClosest : function(A, B){
        A.sort(function(a, b){return a - b;});
        var best = B - A[0] - A[1] - A[2];
        if (best === 0) return B;
        var first, second, third, diff;
        for (first = 0; first < A.length -2; first++) {
            second = first + 1;
            third = A.length - 1;
            while (second < third) {
                diff = B - A[first] - A[second] - A[third];
                best = Math.abs(diff) < Math.abs(best) ? diff : best;
                
                if (diff < 0) {
                    third--;
                } else if (diff > 0) {
                    second++;
                } else if (diff === 0) {
                    return B;
                }
            }
        }
        return B - best;
	}
};


