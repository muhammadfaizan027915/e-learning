import "./Faqaccordian.css"
function Faqaccordian({ faqlist }) {
    return (
        <div className="faqaccordcontainer">

            {
                faqlist.map(
                    ({ question, answer }, index) =>
                    (
                        <div className="question" key={index}>
                            <input type="radio" name={`faq-r`} id={`faq-rd${index}`} />
                            <label htmlFor={`faq-rd${index}`}>
                                {question}
                                <i className="fa-solid fa-angle-up"></i>
                            </label>
                            <div className="answer">
                                <p>{answer}</p>
                            </div>
                        </div>
                    )
                )
            }

        </div>
    );
}

export default Faqaccordian;