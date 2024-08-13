import type { NextApiRequest, NextApiResponse } from 'next'
import { TQuiz, TQuizResponse } from '../../types/quiz';

const questionsAndAnswers: TQuiz[] = [
    {
        id: 1,
        question: "1) I like to organize people, tasks, and events.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "A"
    },
    {
        id: 2,
        question: "2) I would like to start churches in places where they do not presently exist.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "B"
    },
    {
        id: 3,
        question: "3) I enjoy working creatively with wood, cloth, paints, metal, glass, or other materials.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "C"
    },
    {
        id: 4,
        question: "4) I enjoy challenging people’s perspective of God by using various forms of art.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "D"
    },
    {
        id: 5,
        question: "5) I can readily distinguish between spiritual truth and error, good and evil.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "E"
    },
    {
        id: 6,
        question: "6) I tend to see the potential in people.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "F"
    },
    {
        id: 7,
        question: "7) I communicate the gospel to others with clarity and effectiveness.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "G"
    },
    {
        id: 8,
        question: "8) I find it natural and easy to trust God to answer my prayers.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "H"
    },
    {
        id: 9,
        question: "9) I give liberally and joyfully to people in financial need or to projects requiring support.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "I"
    },
    {
        id: 10,
        question: "10) I enjoy working behind the scenes to support the work of others.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "J"
    },
    {
        id: 11,
        question: "11) I view my home as a place to minister to people in need.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "K"
    },
    {
        id: 12,
        question: "12) I take prayer requests from others and consistently pray for them.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "L"
    },
    {
        id: 13,
        question: "13) I am approached by people who want to know my perspective on a particular passage or biblical truth.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "M"
    },
    {
        id: 14,
        question: "14) I am able to motivate others to accomplish a goal.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "N"
    },
    {
        id: 15,
        question: "15) I empathize with hurting people and desire to help in their healing process.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "O"
    },
    {
        id: 16,
        question: "16) I can speak in a way that results in conviction and change in the lives of others.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "P"
    },
    {
        id: 17,
        question: "17) I enjoy spending time nurturing and caring for others.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "Q"
    },
    {
        id: 18,
        question: "18) I am able to communicate God’s work effectively.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "R"
    },
    {
        id: 19,
        question: "19) I am often sought out by others for advice about spiritual or personal matters.",
        options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
        answer: "S"
    },
    // {
    //     id: 20,
    //     question: "20) I am careful, thorough, and skilled at managing details.",
    //     options: ["Not at all, never", "Some of the time, once in a while", "Most of the time, usually true", "Consistently, definitely true"],
    //     answer: "Ensure our table is DRY"
    // }
]

interface Params {
    page: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<TQuizResponse>
) {
    try {
        let { page } = req.query as unknown as Params;

        // If the page is not applied in query.
        if (!page) {
            res.send(questionsAndAnswers);
        }

        let pageToNum = parseInt(page);

        const quiz = questionsAndAnswers[pageToNum];
        const lastPage = questionsAndAnswers.length - 1;
        const numOfQuestion = questionsAndAnswers.length;

        if (pageToNum === 0) {
            res.send({
                prev: false,
                next: true,
                page,
                quiz,
                total: numOfQuestion
            });
        } else if (pageToNum === lastPage) {
            res.send({
                prev: true,
                next: false,
                page,
                quiz,
                total: numOfQuestion
            })
        } else {
            res.send({
                prev: true,
                next: true,
                page,
                quiz,
                total: numOfQuestion
            });
        }
    }
    catch (error) {
        res.status(500);
    }
}
