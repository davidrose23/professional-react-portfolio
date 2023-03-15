import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <div className="container">
                <h1>Contact Me</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;