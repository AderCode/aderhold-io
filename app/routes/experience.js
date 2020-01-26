import Route from '@ember/routing/route';

const blankCompany = {
  name: "",
  url: "",
  type: "",
  logo: {
    url: null,
    style: null,
  },
  duration: "",
  jobTitle: "",
  description: "",
  tags: []
}

const dotEdison = {};
dotEdison.name = "dotEdison";
dotEdison.url = "https://dotedison.com";
dotEdison.logo = { url: "https://www.dotedison.com/wp-content/uploads/2017/12/de-512x512.png" };
dotEdison.duration = "04.25.2018 => 03.15.2019";
dotEdison.jobTitle = "Full Stack Developer";
dotEdison.description = `Restaurant Management Software, ForkastRM, offered full inventory tracking, employee tracking, waste analysis, live PnL reporting and live predictive product projections based on inventory and integrations with over 14 POS, Time Management, and Accounting applications such as Square, Aloha, Toast, Aireus, Efficenter, and more.<br><br>Besides app and dual api development I was also responsible for live chat support/success of customers, ticketing management,team KPI/progress reporting, training/mentoring new employees, all while assisting the CTO and COO in product/team management.<br><br>Direct Reports: <a class="italic" href="https://www.linkedin.com/in/tim-busbee-97046b91/" target="_blank" rel="noopener"><u>Tim Busbee</u></a> && <a class="italic" href="https://www.linkedin.com/in/jason-hamer-b5b0b537/" target="_blank" rel="noopener"><u>Jason Hamer</u></a>`;
dotEdison.tags = ["jQuery", "PHP", "NodeJS", "ExpressJS", "MySQL"]

const caseStatus = {logo: {}};
caseStatus.name = "Case Status";
caseStatus.url = "https://casestatus.com";
caseStatus.logo.url = "https://casestatus.com/wp-content/uploads/2018/04/cropped-Favicon-1-270x270.png";
caseStatus.duration = "06.01.2019 => Current";
caseStatus.jobTitle = "Software Engineer";
caseStatus.description = `Case Status gives law firms one place to update all of their clients with a single click. Centralizes all of the firm communications into one location. Whether looping in multiple attorneys, case managers or clients, Case Status helps automate the client management process.<br><br>With a web application, an iOS app, an Android app, and SMS leverage, Case Status gives both firms and their clients much more control and insight into their case status with an organized way to communicate with one another delivering drastically improved response times proving profitable for all parties involved.<br><br>Direct Report: <a class="italic" href="https://www.linkedin.com/in/andyseavers/" target="_blank" rel="noopener"><u>Andy Seavers</u></a>`;
caseStatus.tags = ["EmberJS", "Python", "PostgreSQL"]


export default Route.extend({
  setupController(controller, model) {
    controller.set('companies', [
      dotEdison, 
      caseStatus,
    ].reverse());
  }
});
