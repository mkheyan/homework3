const one = function(a,b,c) {   
    let val = a*b-c;
    return val
};

const two = function() {
    return "No input required"
};

const three = function(d, e) {
   let val1 = d+e
};

const four = function (f,g,h) {
    f = f+'';
    g = g+'';
    h = h+'';
    if(f.length>g.length && f.length>h.length) {
        let longest = '';
        longest = f;
    } else if(g.length>f.length && g.length>h.length) {
        longest = g
    } else longest = h;

    return longest
};

const ten = function(i,j) {
    if (i === j) {
        return 0}
        else if (i>j) {
            return 1
        } else 
            return -1
        
    } 

const five = function (k,l) {
    return k*l
}

const six = function (m,n) {
    return m/n
}

const triangleArea = function(base,height) {
    let o = five(base, height)
    o = six(o,2)
    return o
}

const numLength = function (p) {
    p = p+'';
    return p.length
}

const eight = function (q,r,s) {
    t = q + r
    if (t.length>s) {
        return 1
    }
    else return -1
}

const nine = function (u,v,w) {
    if(w === 'rectangle') {
        return u*v
    }
    else if (w === 'traingle') {
        return triangleArea(u,v)
    }
    else return -1
}

//examples below show how the code works in console

console.log(one(3,2,1));
console.log(two());
console.log(three((1,2)));
console.log(four('big','bigger','biggest'));
console.log(ten(5,6));
console.log(five(7,8));
console.log(six(10,5));
console.log(triangleArea(3,6));
console.log(numLength(48598));
console.log(eight('hello', 'world', 11));
console.log(nine(4,5,'rectangle'))
