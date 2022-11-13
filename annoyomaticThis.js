const annoyer = {
    phrases: ['literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't Stop, Won't Stop"],
    pickPhrase() {
        const {
            phrases
        } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start() {
        this.timerID = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerID);
        console.log("PHEW THANK HEAVENS THAT IS OVER!")
    }
}