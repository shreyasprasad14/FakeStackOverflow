interface Question {
    id: number;
    askedBy?: string;
    askedAt?: string;
    title?: string;
    text?: string;
    link?: string;
}

export default Question;