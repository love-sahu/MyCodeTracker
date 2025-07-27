import  { useState } from 'react';
import './FAQ.css'; // Add your CSS styles


const Faqpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is this platform?",
      answer: "Our platform conducts online coding examinations, ensuring a secure and fair environment for all participants by detecting cheating and blocking violators automatically."
    },
    {
      question: "How does the system detect cheating during coding tests?",
      answer: "The system monitors various parameters like code similarity, time spent on problems, unusual patterns in coding behavior, and copy-pasting activities to detect cheating."
    },
    {
      question: "What happens if someone is caught cheating?",
      answer: "If cheating is detected, the user is automatically blocked from further participation in the exam. A detailed report of the violation is generated."
    },
    {
      question: "Can I retake the exam if I'm blocked for cheating?",
      answer: "Unfortunately, once a user is blocked for cheating, they will not be allowed to retake the same exam. The issue will need to be reviewed by the examination administrators.."
    },
    {
      question: "Is it possible to appeal a cheating block?",
      answer: "Yes, if you believe you were wrongly flagged, you can submit an appeal, and the case will be manually reviewed by our team."
    },
    {
      question: "Is the data anonymous?",
      answer: "Yes, the data collected by the tracker is anonymous, ensuring privacy while providing insights into coding behavior."
    },
    {
      question: "Do I need to install any software to take the test?",
      answer: "Do I need to install any software to take the test?"
    },
    {
      question: "How do you ensure the privacy of users?",
      answer: "User privacy is a top priority. All activity is monitored anonymously, and personal data is securely encrypted and stored, ensuring a secure testing environment."
    },
    {
      question: "How user-friendly is the interface?",
      answer: "Our platform is designed to be intuitive and simple for all users, regardless of technical expertise. Both exam-takers and administrators can easily navigate and perform necessary tasks."
    },
    {
      question: "What languages are supported for coding tests?",
      answer: "Our platform supports a wide variety of programming languages including Python, Java, C++, JavaScript, and many others. A full list is provided before the exam begins."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className="faq-answer"
              style={{ display: activeIndex === index ? 'block' : 'none' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default Faqpage;