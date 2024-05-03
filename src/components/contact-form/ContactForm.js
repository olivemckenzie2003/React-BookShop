import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default reloading of the page
    alert("A name is submitted: " + name);
    alert("A mail is submitted: " + email);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Name: {name}
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </label>
        </div>
        Email: {email}
      <div>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ContactForm;
//add email address and message andsubsit message
//when click submit subit form shoukld disappear and message saye detail 
//submit sucessfully