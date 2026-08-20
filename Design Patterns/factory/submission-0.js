class Vehicle {
    getType() {
        throw new Error("getType method must be overridden");
    }
}

class Car extends Vehicle {
    getType() {
        return "Car";
    }
}

class Bike extends Vehicle {
    getType() {
        return "Bike";
    }
}

class Truck extends Vehicle {
    getType() {
        return "Truck";
    }
}

class VehicleFactory {
    createVehicle() {
        throw new Error("createVehicle method must be overridden");
    }
}

class CarFactory extends VehicleFactory {
    /**
     * @return {Car}
     */
    createVehicle() {
        return new Car();
    }
}

class BikeFactory extends VehicleFactory {
    /**
     * @return {Bike}
     */
    createVehicle() {
        return new Bike();
    }
}

class TruckFactory extends VehicleFactory {
    /**
     * @return {Truck}
     */
    createVehicle() {
        return new Truck();
    }
}
