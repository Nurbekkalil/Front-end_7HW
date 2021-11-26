//Реализовать иерархию класса Транспорт
//
// То есть абстрактный класс транспорт
// Будет метод startEngine
//
// После Car
// И у этого Car переопределить метод startEngine
//
// И можете добавить ещё что то там воздушный транспорт или водный транспорт


class Transport {
    constructor(modes, functions, engine) {
        this.modes = modes;
        this.functions = functions;
        this.engine = engine
    }
    startEngine(){
        console.log(this.engine)
    }
}
const transport = new Transport ('land transport', 'moving of people', 'Bu, Bu, Bu' )
console.log(transport)
transport.startEngine()

class Car extends Transport {
    constructor(modes, functions, engine, brand, model) {
        super(modes, functions);
        this.brand = brand;
        this.model = model;
        this.engine = engine;
    }
    startEngine() {
        super.startEngine(this.engine);
    }
}
const car = new Car ('land transport', 'moving of people',
    'Bu, Bu, Bu', 'Subaru', 'Legacy B4 Twin Turbo' )
console.log(car)
car.startEngine()