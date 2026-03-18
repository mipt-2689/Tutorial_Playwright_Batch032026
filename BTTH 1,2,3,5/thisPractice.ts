class Counter {
    count: number = 0; // mặc định bằng 0

    // tăng count lên 1
    increment(): void{
        this.count++;
        console.log(`Count is now: ${this.count}`);
    }

    // reset về 0
    reset (): void{
        this.count = 0;
        console.log(`Counter reset: ${this.count}`);
    }
}

// tạo instance
const counter = new Counter();

// gọi method
counter.increment();
counter.increment();
counter.reset();
