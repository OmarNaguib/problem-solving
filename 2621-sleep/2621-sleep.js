/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
   let time= Date.now()
    while (Date.now()-time<millis){}
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */