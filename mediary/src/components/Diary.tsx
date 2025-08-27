import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Diary = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const date = new Date();
  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });
  const year = date.getFullYear();

  return (
    <>
      <div className="padding-global">
        <div className="container">
          <h1 className="margin-b-128">{user.email}'s mental health diary</h1>
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
              <div className="days-grid">
                <div className="day-block is-top-left-corner">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="diary-btn-wrapper">
                    <div className="add-btn is-add">
                      <img src="../assets/green-plus.svg" alt="Green Plus" />
                    </div>
                    <div className="add-btn is-remove">
                      <img src="../assets/red-x.svg" alt="Red X" />
                    </div>
                    <div className="add-btn is-menu">
                      <img src="../assets/blue-menu.svg" alt="Blue Menu" />
                    </div>
                  </div>
                  <div className="day-number">01</div>
                </div>

                <div className="day-block ">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">02</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">03</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">04</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">05</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">06</div>
                </div>

                <div className="day-block is-top-right-corner">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">07</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">08</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">09</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">10</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">11</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">12</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">13</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">14</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">15</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">16</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">17</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">18</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">19</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">20</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">21</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">22</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">23</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">24</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">25</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">26</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">27</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">28</div>
                </div>

                <div className="day-block is-bottom-left-corner">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">29</div>
                </div>

                <div className="day-block">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">30</div>
                </div>

                <div className="day-block ">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">31</div>
                </div>

                <div className="day-block wrong-month">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">01</div>
                </div>

                <div className="day-block wrong-month">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">02</div>
                </div>

                <div className="day-block wrong-month">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">03</div>
                </div>

                <div className="day-block wrong-month is-bottom-right-corner">
                  <div className="add-btn">
                    <img src="../assets/plus-non-hover.svg" alt="Plus Icon" />
                  </div>
                  <div className="day-number">04</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diary;
