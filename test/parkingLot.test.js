const ParkingLot = require('../src/parkingLot.class');
const Car = require('../src/car.class');

test('should get ticket when parking 1 car in available parking lot', () => {
    let parkingLot = new ParkingLot(1);
    let car = new Car("川AE0000");
    let ticket = parkingLot.park(car);
    expect(ticket).not.toBeNull();
});

