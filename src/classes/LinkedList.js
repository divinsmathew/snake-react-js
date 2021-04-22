export class Snake {
    constructor() {
        this.head = null;
        this.tail = true;
        this.size = 0;
    }

    isHead(coordinates) {
        return (
            this.head.coordinates[0] === coordinates[0] &&
            this.head.coordinates[1] === coordinates[1]
        );
    }

    isOn(coordinates, skipHead) {
        if (this.head == null) return false;

        var current = skipHead ? this.head.next: this.head;

        while (current) {
            if (
                current.coordinates[0] === coordinates[0] &&
                current.coordinates[1] === coordinates[1]
            )
                return true;

            current = current.next;
        }
        return false;
    }

    eat() {
        let current = this.head;

        while (current.next) current = current.next;

        let tailDirection = current.direction;
        let newTailCoordinates = "R";

        switch(tailDirection) {
            case "T":
                newTailCoordinates = [current.coordinates[0] + 1, current.coordinates[1]];
                break;

            case "R":
                newTailCoordinates = [current.coordinates[0], current.coordinates[1] - 1];
                break;

            case "B":
                newTailCoordinates = [current.coordinates[0] - 1, current.coordinates[1]];
                break;

            case "L":
                newTailCoordinates = [current.coordinates[0], current.coordinates[1] + 1];
                break;

            default:
                break;
        }

        this.add(new Body(newTailCoordinates, tailDirection));
    }

    add(body) {
        var current;
        body.tail = true;

        if (this.head == null) this.head = body;
        else {
            current = this.head;

            while (current.next) current = current.next;
            current.tail = false;

            current.next = body;
        }
        this.size++;
    }

    clear(body) {
        this.head = null;
        this.size = 0;
    }
}

export class Body {
    constructor(coordinates, direction) {
        this.coordinates = coordinates;
        this.direction = direction;
        this.next = null;
    }
}
