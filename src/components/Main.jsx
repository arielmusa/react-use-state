import { useState } from "react";
import Button from "./ui/Button";
import { languages } from "../data/languages";

export default function Main() {
  const [activeLanguage, setActiveLanguage] = useState(undefined);

  return (
    <div className="container my-5">
      <h1>Learn Web Development</h1>
      <div className="row gap-3">
        {languages.map((lang) => (
          <Button
            type={activeLanguage === lang.title ? "warning" : "primary"}
            text={lang.title}
            key={lang.id}
            handleClick={() => setActiveLanguage(lang.title)}
          />
        ))}
        <div class="card">
          <div class="card-body">
            <h2>{activeLanguage || "No language selected"}</h2>
            <p>
              {activeLanguage
                ? languages.find((lang) => lang.title === activeLanguage)
                    .description
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
