export interface IFactorialFunc { 
    (x: number): number;
}

export interface IMemoFunc { 
    (): (func: IFactorialFunc, x: number) => number
}

export interface IMemoCache { 
    [key: number]: number
}

export const factorialFunc: IFactorialFunc = (x) => { 
    if (x > 0) {
        let result: number = x;
        while (x >= 2) {
            --x;
            result *= x;
        }
        return result;
    } else { 
        throw new Error("Value given must be greater than 0!");
    }
};

export const memo: IMemoFunc = () => { 
    let cache: IMemoCache = {};

    return (func, x) => { 
        if (x in cache) {
            console.time("Cache");
            console.timeEnd("Cache");
            return cache[x];
        } else { 
            console.time("Calculating ...");
            let result = func(x);
            cache[x] = result;
            console.timeEnd("Calculating ...");
            return result;
        }
    }
};

/* const memoFunc = memo();
console.log(memoFunc(factorialFunc, 144));
console.log(memoFunc(factorialFunc, 144)); */