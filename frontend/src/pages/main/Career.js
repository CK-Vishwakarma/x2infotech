import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: theme.typography.fontWeightRegular,
  },
  paragraph: {
    fontSize: "1.5rem",
  },
}));

const Career = () => {
  const classes = useStyles();
  return (
    <div className="career-page container-full">
      <section className="heading">
        <h1 data-aos="fade-down">
          <span>Career</span> Options
        </h1>
        <hr />
      </section>

      <section className="career-form" data-aos="fade-up">
        <div className="container">
          <h1>Send Your Resume Here. </h1>
          <h2>Please complete the form below to apply.</h2>

          <form
            autoComplete="off"
            action="https://formsubmit.co/05547deepak@gmail.com"
            method="POST"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_subject" value="New Resume..." />

            <div className="inp-grp">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                required
              />
              <label htmlFor="fullname">Full Name</label>
            </div>

            <div className="inp-grp">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="inp-grp">
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                required
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="inp-grp">
              <input
                type="text"
                name="qualification"
                id="qualification"
                placeholder="BE/B.Tech"
                required
              />
              <label htmlFor="qualification">Qualification</label>
            </div>
            <div className="select-grp">
              <label htmlFor="cars">Job Type</label>
              <select id="jobs">
                <option value="full time">Full Time</option>
                <option value="part time job">Part Time Job</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div className="inp-grp">
              <input
                type="number"
                name="zip"
                id="zip"
                placeholder="Zip"
                required
              />
              <label htmlFor="zip">Zip</label>
            </div>
            <div className="inp-grp">
              <textarea
                name="address"
                id="address"
                placeholder="Address"
                rows="5"
                required
              />
            </div>
            <div className="inp-grp-file">
              {/* <label htmlFor="fileupload">Resume</label> */}
              <input
                id="fileupload"
                type="file"
                name="attachment"
                accept="application/pdf,application/doc"
              />
            </div>
            <button className="btn contact-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="frequently-asked">
        <div className="container">
          <section className="heading" data-aos="fade-down">
            <h1>
              Frequently<span> Asked </span> Questions
            </h1>
            <hr />
          </section>

          <section className="accordions">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What is an internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.paragraph}>
                  An internship is an on-site work experience that is either
                  directly related to your major field of study or your career
                  interest. It can be paid or unpaid, and held during the summer
                  or throughout the academic year.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What are the benefits of an internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  How do I find an internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.paragraph}>
                  The most effective internship searches utilize a variety of
                  different search strategies. A great place to start is the X2
                  Infotech – many Internship programmer listings are available.
                  You can go to our career page on our website. If you want to
                  learn more about internships, contact us via website, email.
                  Also, take advantage of all your networking opportunities. In
                  addition to making contacts through friends, family,
                  current/former employers, classmates, and faculty members,
                  there are many other networking avenues you can pursue. A
                  great place to start is the X2 InfoTech Organization. You may
                  also learn about internship openings through newspapers,
                  newsletters, job fairs, work/study abroad programs, hometown
                  contacts, professional associations, student organizations,
                  trade magazines, community service/volunteer groups, and your
                  major department office. While there is a great deal of
                  information available, you must be persistent in your
                  internship search. Start early and seek out help from a career
                  counselor. Have a plan that includes a great resume and cover
                  letter, appropriate follow-up, and good record keeping. Be
                  prepared, open-minded, flexible, and professional. It’s up to
                  you to make all your contacts count!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  When is a good time to start looking for an internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.paragraph}>
                  If you mean during which year of academic study, the second
                  semester of your freshman year is not too soon. Allow yourself
                  at least one semester of academic study to adjust to the
                  rigors of life at X2 Infotech. Then, depending on your major,
                  GPA, and course load requirements, you may be ready to intern.
                  Remember that your academic work is always your first
                  priority. If you mean at which point during the year, the X2
                  InfoTech career council receives internship listings
                  continually. It’s probably best to begin your internship
                  search the semester prior to your desired placement. That way,
                  you’ll have time to respond to listed positions and initiate
                  contacts on your own as well. Lead time can give you a
                  competitive edge when it comes to composing an effective cover
                  letter or tailoring your resume to a desired internship.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Can I get academic credit for my internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.paragraph}>
                  It may be possible to get academic credit for your internship,
                  but not from the X2 InfoTech. Only academic departments can
                  offer credit, and policies differ greatly from one department
                  to the next. Often your internship must relate directly to
                  your major and will require you to complete a substantial
                  research project or writing component as part of special
                  studies course. For more information contact Us. Keep in mind
                  that some employers require students to receive academic
                  credit as a form of “payment” due to liability issues, but may
                  also be willing to classify you as a volunteer if receiving
                  credit is not an option.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  What if my question isn't answered here?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.paragraph}>
                  One of the most effective ways to get answers and plan for
                  your internship search is to contact with X2 InfoTech. We
                  offer appointments to make an appointment for general or
                  career field-specific internship counseling.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Career;
