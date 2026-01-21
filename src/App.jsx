App.jsx

import "./App.css";

export default function App() {
  const student = {
    name: "Zenitsu Agatsuma.Reddy",
    No: "+11 205487",
    "Techincal Backgrounds": "CSE - AI & ML, Data Analyst",
    Graduated: "2002",
    email: "zenitsu.agatsuma@klu.edu.in",
    Role: "Web Developer(Python), UI/UX Designer",
    Bio: "Zenitsu Agatsuma (我あが妻つま 善ぜん逸いつ Agatsuma Zen'itsu?) is one of the main characters of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps and a travelling companion and friend of Tanjiro Kamado and Nezuko Kamado, along with Inosuke Hashibira.",
  };

  return (
    <div className="page">
      <h1 className="title">Profile Card</h1>

      <div className="card">
        <div className="badge">
          <img src="https://easydrawingguides.com/wp-content/uploads/2023/10/how-to-draw-zenitsu-agatsuma-from-demon-slayer-featured-image-1200.png" alt="Zenitsuu" />
        </div>

        <h2 className="name">{student.name}</h2>
        <p className="sub"> No: <b>{student.No}</b></p>

        <div className="grid">
          <div className="box">
            <p className="label">Bio</p>
            <p className="value">{student.Bio}</p>
          </div>
          <div className="box">
            <p className="label">Technical Background</p>
            <p className="value">{student["Techincal Backgrounds"]}</p>
          </div>
          <div className="box">
            <p className="label">Graduated Year</p>
            <p className="value">{student.Graduated}</p>
          </div>
          <div className="box">
            <p className="label">Email</p>
            <p className="value">{student.email}</p>
          </div>
          <div className="box">
            <p className="label">Role</p>
            <p className="value">{student.Role}</p>
          </div>
        </div>

        <button className="btn">Send Message</button>
      </div>
    </div>
  );
}