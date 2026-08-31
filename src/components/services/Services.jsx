import React from "react";
import s from "./services.module.css";
import Heading from "../ui/heading/Heading";
import service from "./service";
const Services = () => {
  return (
    <section className={s.bg}>
   
        <Heading
          heading="My Services"
          para="I offer a range of web development services focused on building modern, responsive, and high-performing digital solutions tailored to your needs."
        />

      <div className={s.services}>
        {service.map((item) => {
          return (
            <div key={service.id} className={`${s.card} ${s[item.color]}`}>
              <div>
                <div className={s.icon}>{item.icon}</div>
                <h3 className={s.heading}>{item.heading}</h3>
                <p className={s.description}>{item.description}</p>
                <ul className={s.list}>
                  {item.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={s.readmore}
               
              >
                ↗
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
