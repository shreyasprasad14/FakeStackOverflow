interface Question {
    id: number;
    askedBy: string;
    askedAt: string;
    title: string;
    text: string;
    info?: string;
}

export default Question;