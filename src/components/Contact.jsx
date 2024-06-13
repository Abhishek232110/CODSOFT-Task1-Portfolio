import "./contact.css";

function Contact() {
  return (
    <div className="flex-col pt-10 px-3">
      <h1 className="text-2xl text-center">Contact Details</h1>
      <div className="flex items-center justify-center space-x-10 pt-10">
        <h1>Gmail</h1>
        <h1 className="italic">abhi7376862392@gmail.com</h1>
      </div>
      <div className="flex items-center justify-center space-x-10 pt-10">
        <h1>Contact Number</h1>
        <h1 className="italic">7388334666</h1>
      </div>
      <div className="flex items-center justify-center space-x-10 pt-10">
        <h1>linkedin</h1>
        <a
          href="https://www.linkedin.com/in/abhishek-kumar-292362187"
          className="italic"
        >
          https://www.linkedin.com/in/abhishek-kumar-292362187
        </a>
      </div>
      <div className="flex items-center justify-center space-x-10 pt-10">
        <h1>GitHub</h1>
        <a href="https://github.com/Abhishek232110" className="italic">
          https://github.com/Abhishek232110
        </a>
      </div>
    </div>
  );
}

export default Contact;
