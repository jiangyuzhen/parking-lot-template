const Ticket = require('./ticket.class');

class ParkingLot {
    constructor(capacity) {
        this.capacity = capacity;
    }

    park(car) {
        return new Ticket();
    }
}

module.exports = ParkingLot;