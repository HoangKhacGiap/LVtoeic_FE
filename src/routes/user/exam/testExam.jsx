import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAPIConText } from "../../../lib/context/APIContextProvider";
import axios from "axios";


import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";

const TestExam = () => {
    const [seconds, setSeconds] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isRunning, setIsRunning] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const [exams, setTest] = useState([]);
    const { id } = useParams();

    const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);

    const handleQuestionClick = (id) => {
        if (!selectedQuestionIds.includes(id)) {
            setSelectedQuestionIds([...selectedQuestionIds, id]);
        }
    };

    useEffect(() => {
        const fetchExam = async () => {
            try {
                const response = await axios.get(`http://localhost:8085/api/ExamTest/${id}`);
                console.log(response.data);
                setTest(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        if (id) {
            fetchExam();
        }
    }, [id]);
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (selectedQuestionIds.length > 0) {
                event.preventDefault();
                event.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [selectedQuestionIds]);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isRunning]);
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsLeft = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    };
    if (exams.length === 0) {
        return <div>Loading...</div>;
    }
    let questionNumber = 0;
    let questionNumber1 = 0;


    const scrollToQuestion = (questionId) => {
        const element = document.getElementById(questionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const isConfirmed = confirm('Bạn có chắc chắn muốn nộp bài không?');

        if (isConfirmed) {
            setIsSubmitted(true);
            setIsRunning(false);
            setIsButtonDisabled(true);
            console.log('Bài thi đã được lưu');
        } else {
            console.log('Bài thi đã bị hủy.');
        }

    };
    const handleAnswerChange = (questionId, answerId, isCorrect) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: { answerId, isCorrect }
        }));
    };
    return (

        <div>
            <HeaderUser />
            <div className="w-1/6 bg-gray-200 p-4 float-right" style={{ position: 'fixed', top: '100px', right: '10px', display: 'flex', flexWrap: 'wrap', maxWidth: '300px' }}>
                <h2>{formatTime(seconds)}</h2>

                <h2 className="font-bold mb-4" style={{ width: '100%' }}>Danh sách câu hỏi</h2>
                {exams.map((exam) =>
                    exam.topics.map((topic) =>
                        topic.questions.map((question) => {
                            return (
                                <div
                                    key={question.id}
                                    className={`cursor-pointer p-2 ${selectedQuestionIds.includes(question.id) ? 'bg-blue-500' : 'hover:bg-gray-300'}`}
                                    onClick={() => {
                                        scrollToQuestion(question.id);
                                    }}
                                    style={{ borderRadius: '30%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px' }}
                                >
                                    {++questionNumber1}
                                </div>
                            );
                        })
                    )
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-5/6 p-4">
                    {exams.map((exam) => (
                        <div key={exam.id} className="shadow p-4 mb-4 bg-white">
                            <h1 className="text-2xl font-bold">{exam.name}</h1>
                            <p className="text-md mb-2">Number of Topics: {exam.number_of_topic}</p>
                            <p className="text-md mb-2">Level of Topic: {exam.level_of_topic}</p>

                            {exam.topics?.length > 0 ? (
                                exam.topics.map(topic => (
                                    <div key={topic.id} className="bg-gray-100 p-3 mb-3">
                                        {/* <h2 className="text-xl font-semibold">{topic.name}</h2> */}
                                        <p className="text-md mb-2">{topic.content}</p>
                                        <img src={topic.pathImage} alt={topic.imageName} className="max-w-full mb-2" />
                                        <audio controls className="mb-2">
                                            <source src={topic.pathAudio} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                        </audio>

                                        {topic.questions?.map((question) => (
                                            <div key={question.id} id={question.id} className="pl-4 mb-2">
                                                {isSubmitted && !userAnswers[question.id] && <p className="text-red-500">Bạn chưa làm câu hỏi này</p>}
                                                <h3 className="font-semibold">{`${++questionNumber}. ${question.name}`}</h3>

                                                {question.answers?.map((answer) => (
                                                    <div
                                                        key={answer.id}
                                                        // className={`flex items-center mb-2 ${userAnswers[question.id]?.answerId === answer.id ? (answer.correctAnswer ? 'bg-green-500' : 'bg-red-500') : ''}`}
                                                        className={`flex items-center mb-2 ${isSubmitted && userAnswers[question.id]?.answerId === answer.id ? (answer.correctAnswer ? 'bg-green-500' : 'bg-red-500') : ''}`}
                                                        onClick={() => {
                                                            handleQuestionClick(question.id);
                                                            handleAnswerChange(question.id, answer.id, !!answer.correctAnswer)
                                                        }}>
                                                        <input
                                                            type="radio"
                                                            id={`${answer.id}+${questionNumber}`}
                                                            name={`question-${question.id}`}
                                                            value={answer.content}
                                                            className="mr-2"
                                                        />
                                                        <label htmlFor={`${answer.id}+${questionNumber}`} className="text-md">
                                                            <div className="flex items-center">
                                                                {answer.content}
                                                                {isSubmitted && answer.correctAnswer &&
                                                                    <svg className="w-6 h-6 text-green-500 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path d="M5 13l4 4L19 7"></path>
                                                                    </svg>
                                                                }
                                                            </div>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <p>No topics available for this exam.</p>
                            )}
                        </div>
                    ))}
                </div>
                <button type="submit" 
                        disabled={isButtonDisabled}
                        className="p-2 bg-blue-500 text-white rounded cursor-pointer">Chấm điểm
                </button>
            </form>
            <FooterUser />
        </div>
    );
}
export default TestExam; 