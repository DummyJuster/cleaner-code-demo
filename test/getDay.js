const expect = require('chai').expect
const getDay = require('../getDay'); 

describe ("#getDay", function () {
	it ("Get Day of the week based on Index", function () {
		expect(getDay(0)).to.eql("Sunday");
    })
    it ("Get Day of the week based on Index", function () {
		expect(getDay(1)).to.eql("Monday");
    }) 
    it ("Get Day of the week based on Index", function () {
		expect(getDay(2)).to.eql("Tuesday");
    }) 
    it ("Get Day of the week based on Index", function () {
		expect(getDay(3)).to.eql("Wednesday");
    })
    it ("Get Day of the week based on Index", function () {
		expect(getDay(4)).to.eql("Thursday");
    })
    it ("Get Day of the week based on Index", function () {
		expect(getDay(5)).to.eql("Friday");
    })
    it ("Get Day of the week based on Index", function () {
		expect(getDay(6)).to.eql("Saturday");
    })
    it ("Get Day of the week based on Index", function () {
		expect(getDay(7)).to.eql("Invalid Index");
	}) 
})
