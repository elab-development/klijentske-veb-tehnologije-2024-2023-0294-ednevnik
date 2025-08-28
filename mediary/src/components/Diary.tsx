import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { supabase } from "../models/supabaseClients";
import { EmotionalState } from "../models/EmotionalState";

interface CalendarCell {
  date: number | null;
  currentMonth: boolean;
}

const Diary = () => {
  const date = new Date();
  const currentMonth = date.getMonth();
  const year = date.getFullYear();

  const { user } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [states, setStates] = useState<EmotionalState[]>([]);

  const loadUser = async () => {
    if (!user?.id) return;

    const { data: userName, error: userNameError } = await supabase
      .from("users")
      .select("name")
      .eq("id", user?.id)
      .single();

    if (userNameError) {
      console.error(userNameError);
      return;
    }

    setFirstName(userName.name);
  };

  useEffect(() => {
    loadUser();
  });

  useEffect(() => {
    const loadUserStates = async (year: number, month: number) => {
      if (!user?.id) return;

      const { data, error } = await supabase
        .from("emotionalStates")
        .select("*")
        .eq("userID", user.id)
        .gte("date", `${year}-${String(month + 1).padStart(2, "0")}-01`)
        .lte(
          "date",
          `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${new Date().getDate()}`
        );

      if (error) {
        console.error(error);
        return;
      }

      let states: EmotionalState[] = [];

      if (data) {
        data.map((object) => {
          if (object) {
            states.push(new EmotionalState(object));
          }
        });
      }

      setStates(states);
    };

    loadUserStates(year, new Date().getMonth());
  }, [user, year, currentMonth]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });

  const closeButtons = document.querySelectorAll(".modal-close-btn");

  const closeBtnRemoveModal = document.querySelector("#closeBtnRemoveModal");
  closeBtnRemoveModal?.addEventListener("click", () => {
    closeBtnRemoveModal
      .closest(".modals-wrapper")
      ?.classList.add("is-invisible");
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modals-wrapper")?.classList.add("is-invisible");
    });
  });

  const addFeelingButtons = document.querySelectorAll(".is-add");

  addFeelingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".is-add-modal-wrapper")
        ?.classList.remove("is-invisible");
    });
  });

  const removeFeelingButtons = document.querySelectorAll(".is-remove");

  removeFeelingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".is-remove-modal-wrapper")
        ?.classList.remove("is-invisible");
    });
  });

  const reviewFeelingButtons = document.querySelectorAll(".is-menu");

  reviewFeelingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelector(".is-menu-modal-wrapper")
        ?.classList.remove("is-invisible");
    });
  });

  function generateCalendar(year: number, month: number): CalendarCell[] {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1;

    const daysInMonth = lastDay.getDate();

    let totalCells = 35;
    if (startDay + totalCells > 39) totalCells = 42;

    const cells: CalendarCell[] = [];

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - startDay + 1;
      if (dayNumber > 0 && dayNumber <= daysInMonth) {
        cells.push({ date: dayNumber, currentMonth: true });
      } else {
        cells.push({ date: null, currentMonth: false });
      }
    }

    return cells;
  }

  const cells = generateCalendar(year, currentMonth);
  const rows = Math.ceil(cells.length / 7);

  function hexToRgba(hex: string, opacity: number) {
    const cleanedHex = hex.replace("#", "");

    const fullHex =
      cleanedHex.length === 3
        ? cleanedHex
            .split("")
            .map((c) => c + c)
            .join("")
        : cleanedHex;

    const r = parseInt(fullHex.substring(0, 2), 16);
    const g = parseInt(fullHex.substring(2, 4), 16);
    const b = parseInt(fullHex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  return (
    <>
      <div className="padding-global">
        <div className="container">
          <h1 className="margin-b-64">{firstName}'s mental health diary</h1>
          <div className="diary-wrapper margin-b-160">
            <span className="diary-month-year">
              {month}, {year}.
            </span>
            <div className="diary">
              <div className="day-name-row">
                <span className="day-name">Monday</span>
                <span className="day-name">Tuesday</span>
                <span className="day-name">Wednesday</span>
                <span className="day-name">Thursday</span>
                <span className="day-name">Friday</span>
                <span className="day-name">Saturday</span>
                <span className="day-name">Sunday</span>
              </div>
              <div
                className="days-grid"
                style={{ gridTemplateRows: `repeat(${rows}, 150px)` }}
              >
                {/* Days Modals */}
                <div className="modals-wrapper is-add-modal-wrapper is-invisible">
                  <div className="modal is-add-modal">
                    <div className="modal-close-btn">
                      <img
                        src="../assets/modal-x.svg"
                        alt="Modal Close Button"
                      />
                    </div>

                    <div className="modal-group">
                      <p>How are you feeling today?</p>
                      <input type="text" className="form-field form-width" />
                    </div>

                    <div className="modal-group">
                      <p>Describe it by the color</p>
                      <input type="color" className="form-field is-color" />
                    </div>

                    <div className="modal-group">
                      <p>Note more about it:</p>
                      <textarea className="form-field" />
                    </div>

                    <a className="cta primary">Add To Calendar</a>
                  </div>
                </div>

                <div className="modals-wrapper is-remove-modal-wrapper is-invisible">
                  <div className="modal is-remove-modal">
                    <p>Are you sure about deleting all entries for that day?</p>
                    <div className="modal-btn-group">
                      <a
                        id="closeBtnRemoveModal"
                        className="cta delete-secondary"
                      >
                        No, Go Back
                      </a>
                      <a className="cta delete-primary">Yes, Delete All</a>
                    </div>
                  </div>
                </div>

                <div className="modals-wrapper is-menu-modal-wrapper is-invisible">
                  <div className="modal is-menu-modal">
                    <div className="modal-close-btn">
                      <img
                        src="../assets/modal-x.svg"
                        alt="Modal Close Button"
                      />
                    </div>

                    <div className="modal-tags-group"></div>

                    <div className="modal-group">
                      <p>You noted for selectedFeeling:</p>
                      <textarea
                        id="infoTextArea"
                        className="form-field"
                        readOnly
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Days start */}
                {/* <div className="day-block is-top-left-corner">
                  <div className="add-btn is-absolute">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="diary-btn-wrapper">
                    <div className="add-btn is-add" id="openAdd">
                      <img src="../assets/green-plus.svg" alt="Green Plus" />
                    </div>
                    <div className="add-btn is-remove" id="openRemove">
                      <img src="../assets/red-x.svg" alt="Red X" />
                    </div>
                    <div className="add-btn is-menu">
                      <img src="../assets/blue-menu.svg" alt="Blue Menu" />
                    </div>
                  </div>

                  <div className="day-tags-wrapper">
                    <div className="tag-circles"></div>
                    <div className="tag"></div>
                  </div>

                  <div className="day-number">01</div>
                </div> */}

                {cells.map((cell, index) => {
                  const totalCells = cells.length;
                  const cols = 7;

                  let borderRadius = "";
                  if (index === 0) borderRadius = "12px 0 0 0";
                  if (index === cols - 1) borderRadius = "0 12px 0 0";
                  if (index === totalCells - cols) borderRadius = "0 0 0 12px";
                  if (index === totalCells - 1) borderRadius = "0 0 12px 0";

                  return (
                    <div
                      key={index}
                      className={`day-block ${
                        cell.currentMonth ? "" : "wrong-month"
                      }`}
                      style={{ borderRadius }}
                    >
                      <div id="menuButton" className="add-btn is-absolute">
                        <img
                          src="../assets/plus-non-hover.svg"
                          alt="Plus Icon"
                        />
                      </div>

                      <div className="diary-btn-wrapper">
                        <div className="add-btn is-add" id="openAdd">
                          <img
                            src="../assets/green-plus.svg"
                            alt="Green Plus"
                          />
                        </div>
                        <div className="add-btn is-remove" id="openRemove">
                          <img src="../assets/red-x.svg" alt="Red X" />
                        </div>
                        <div className="add-btn is-menu">
                          <img src="../assets/blue-menu.svg" alt="Blue Menu" />
                        </div>
                      </div>

                      <div className="day-tags-wrapper">
                        {/* <div className="tag-circles"></div>
                          <div className="tag"></div> */}
                        {states.slice(0, 2).map((state) => {
                          return cell.date ===
                            new Date(state.date).getDate() ? (
                            <div
                              className="tag"
                              style={{
                                color: `${state.color}`,
                                border: `1px solid ${state.color}`,
                                backgroundColor: hexToRgba(state.color, 0.1),
                              }}
                            >
                              {state.stateName}
                            </div>
                          ) : (
                            ""
                          );
                        })}
                      </div>

                      <div className="day-number">
                        {cell.date ? String(cell.date).padStart(2, "0") : ""}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diary;
