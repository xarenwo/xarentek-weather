/*
function getTempCallBack(location,callback) {
callback(undefined,78);
callback('City not found');
}

getTempCallBack('Milan',function (err,temp) {
if(err) {
    console.log(err);
} else {
    console.log(temp);
}
});


function getTempPromise(location) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(79);
            reject('City n found');
        },1000);

    });
}


getTempPromise('Milan').then(function (temp) {
console.log('promise success',temp);
}, function (err) {
    console.log('promise error',err);
});
*/

function addPromise(a,b) {
    return new Promise(function (resolve,reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('A and b need to be numbers');
        }
    });
}

addPromise(230125.41240218502,5).then(function (sum) {
    console.log('success', sum);
},function (error) {
  console.log('error',error);
});