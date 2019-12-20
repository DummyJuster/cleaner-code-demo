function getDay (index) {
    return (index <=6 && index >=0) ? ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"][index] : "Invalid Index";
}
module.exports = getDay