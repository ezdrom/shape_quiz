import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import useSWR from "swr";
import { TSavedAnswer } from "../types/quiz";
import styles from "../styles/Quiz.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Quiz() {
  const router = useRouter();
  const Ref = useRef<NodeJS.Timer | null>(null);

  const [pageIndex, setPageIndex] = useState(0);
  const [answered, setAnswered] = useState<TSavedAnswer>({});

  const { data, error } = useSWR(`/api/quiz?page=${pageIndex}`, fetcher);

  if (error) {
    return (
      <div className={styles.info}>
        <h3>Failed to load</h3>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.info}>
        <h3>Loading...</h3>
      </div>
    );
  }
  const { quiz, next, prev, page, total } = data;

  const addAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const latestAnswers = { ...answered, [name]: value };
    setAnswered(latestAnswers);
    window.localStorage.setItem("quiz", JSON.stringify(latestAnswers));
  };


  return (
    <>
      <div className={styles.info}>
        <p>
          {parseInt(page) + 1} of {total}
        </p>
      </div>
      <div>
        <div key={quiz.id}>
          <p>{quiz.question}</p>
        </div>
        <ul>
          {quiz.options.map((option: string, i: number) => (
            <li className={styles.option} key={i}>
              <input
                type="radio"
                name={quiz.id.toString()}
                onChange={(e) => addAnswer(e)}
                value={option}
                checked={answered[quiz.id] === option}
              />
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navBtns}>
        {prev ? (
          <button onClick={() => setPageIndex(pageIndex - 1)}>
            Previous Question
          </button>
        ) : (
          <Link href="/">Cancel
          </Link>
        )}
        {next ? (
          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={answered[quiz.id] === undefined}
            className={
              answered[quiz.id] === undefined ? "disabledBtn" : "activeBtn"
            }
          >
            Next Question
          </button>
        ) : (
          answered[quiz.id] !== undefined && (
            <Link href="/result">
              <a className={styles.finish}>Finish</a>
            </Link>
          )
        )}
      </div>
    </>
  );
}
