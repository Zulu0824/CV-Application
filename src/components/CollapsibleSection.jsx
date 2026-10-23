import { useId, useState } from "react";
import { ChevronIcon } from "./Icons";

export function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const contentId = useId();

  return (
    <section className={`form-section${isOpen ? " is-open" : ""}`}>
      <h2>
        <button
          type="button"
          className="section-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={contentId}
        >
          {title}
          <span className={`chevron${isOpen ? " open" : ""}`}>
            <ChevronIcon />
          </span>
        </button>
      </h2>

      {isOpen && <div id={contentId}>{children}</div>}
    </section>
  );
}
