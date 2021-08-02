function get(date) {
    try {
        const _d = new Date(date);
        return `${_d.getFullYear()}-${_d.getMonth() >= 9 ? _d.getMonth()+1 : "0"+(_d.getMonth()+1)}-${_d.getDate() >= 10 ? _d.getDate() : "0"+_d.getDate()}`
        //return `${_d.getFullYear()}-${_d.getMonth()+1}-${_d.getDate()}`
    } catch {
        return null;
    }
}


module.exports = {
    get
}