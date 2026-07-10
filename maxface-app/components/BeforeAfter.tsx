"use client";

import { useState } from "react";
import CompareSlider from "./CompareSlider";
import SectionNote from "./SectionNote";
import { serviceIcons } from "./icons";
import { transformationTabs } from "@/lib/site";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">After/Before</span>
          <h2 className={styles.title}>
            Stunning Smile Transformations Before &amp; After Treatment @
            MaxFace Dental Care
          </h2>
        </div>

        <div className={styles.tabs} role="tablist">
          {transformationTabs.map((tab, i) => {
            const Icon = serviceIcons[tab.icon];
            return (
              <button
                key={tab.label}
                role="tab"
                aria-selected={i === active}
                className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                onClick={() => setActive(i)}
              >
                <Icon size={24} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className={styles.panel}>
          {transformationTabs[active].pairs.map((n) => (
            <CompareSlider
              key={`${active}-${n}`}
              before={`/images/transformation-img-before-${n}.jpg`}
              after={`/images/transformation-img-after-${n}.jpg`}
              alt={`${transformationTabs[active].label} result`}
            />
          ))}
        </div>

        <SectionNote
          pill="Free"
          text="Crafted for Your Cravings: Today's Must–"
          linkLabel="Try Selection"
          href="#appointment"
        />
      </div>
    </section>
  );
}
