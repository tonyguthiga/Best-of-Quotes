export class Quote {
    constructor(public id: number,public name: string,public author: string,public submittedBy: string,public date: Date,public upvote: number,public downvote: number) {
    }
}
