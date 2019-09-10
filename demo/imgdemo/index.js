function loadImg(src) {
    let promise = new Promise((reslove, reject) => {
        let img = document.createElement('img');
        img.onload = () => {
            reslove(img);
        };
        img.oneror = () => {
            reject('图片加载失败');
        };
        img.src = src;
    });
    return promise;
}
let src = 'http://img05.tooopen.com/images/20150401/tooopen_sy_84100486967.jpg';
let result = loadImg(src);
result
    .then(res => {
        console.log(`width :${res.width}`);
        return res;
    })
    .then(res => {
        console.log(`height :${res.height}`);
        return res;
    })
    .catch(err => {
        console.log(err);
    });
