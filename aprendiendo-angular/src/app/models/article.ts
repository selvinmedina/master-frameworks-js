export class Article {
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ) {
        this.date = new Date();
    }
}

    // title: String,
    // content: String,
    // date: { type: Date, defaul: Date.now },
    // image: String