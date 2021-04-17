import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

function Nav({ Link }) {
  let path = useRouteMatch().path;
  const Des = styled.p`
    font-size: 12px;
    font-weight: 200;
  `;
  return (
    <footer className="Nav">
      <ul className="Navitems">
        <li className="Navitem">
          <Link to="/" className="NavLink">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.5"
                height="30"
                viewBox="0 0 27.5 30"
              >
                <g
                  id="组_3"
                  data-name="组 3"
                  transform="translate(-86.99 -354.71)"
                >
                  <path
                    id="路径_30"
                    data-name="路径 30"
                    d="M88.7,359.4a3.442,3.442,0,0,0,3.692,3.136h21.222a.829.829,0,0,1,.877.757v20.657a.829.829,0,0,1-.877.757H92.391c-2.983-.007-5.393-2.093-5.4-4.671V359.374c.008-2.571,2.418-4.664,5.4-4.664h21.222a.824.824,0,0,1,.877.75v.007a.818.818,0,0,1-.877.743H92.322A3.434,3.434,0,0,0,88.7,359.4Z"
                    transform="translate(0)"
                    fill={path === "/" ? "#FF8839" : "#FEBA83"}
                  />
                  <path
                    id="路径_29"
                    data-name="路径 29"
                    d="M94.289,360.285a.973.973,0,0,0-1.072.839.943.943,0,0,0,.906.993,1.076,1.076,0,0,0,.166,0h22.475a.943.943,0,0,0,.906-.993.958.958,0,0,0-.906-.839Z"
                    transform="translate(-3.38 -1.769)"
                    fill={path === "/" ? "#FF8839" : "#FEBA83"}
                  />
                </g>
              </svg>
            </i>
            <Des>日记</Des>
          </Link>
        </li>
        <li className="Navitem">
          <Link to="/statistics">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="29.996"
                viewBox="0 0 32 29.996"
              >
                <path
                  id="路径_27"
                  data-name="路径 27"
                  d="M130.651,164.293h-1.68a1.7,1.7,0,0,1-1.732-1.664v-8.607a1.7,1.7,0,0,1,1.732-1.668h1.68a1.7,1.7,0,0,1,1.732,1.668v8.607A1.7,1.7,0,0,1,130.651,164.293Zm8.655,0h-1.68a1.7,1.7,0,0,1-1.732-1.664v-19.21a1.7,1.7,0,0,1,1.732-1.668h1.68a1.7,1.7,0,0,1,1.732,1.668v19.21A1.7,1.7,0,0,1,139.306,164.293Zm8.827,0h-1.68a1.7,1.7,0,0,1-1.732-1.664V149.207a1.7,1.7,0,0,1,1.732-1.668h1.68a1.7,1.7,0,0,1,1.732,1.668v13.422A1.7,1.7,0,0,1,148.133,164.293Zm3.036,5H122.632a1.7,1.7,0,0,1-1.732-1.668V140.964a1.733,1.733,0,0,1,3.464,0v25h26.8a1.669,1.669,0,1,1,0,3.336Z"
                  transform="translate(-120.9 -139.3)"
                  fill={path === "/statistics" ? "#FF8839" : "#FEBA83"}
                />
              </svg>
            </i>
            <Des style={{ textIndent: "3px" }}>统计</Des>
          </Link>
        </li>
        <li className="Navitem">
          <Link to="/topics">
            <i>
              <svg
                id="组件_7_1"
                data-name="组件 7 – 1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="30"
                viewBox="0 0 32 30"
              >
                <rect
                  id="矩形_19"
                  data-name="矩形 19"
                  width="32"
                  height="30"
                  fill="#fff"
                />
                <path
                  id="路径_31"
                  data-name="路径 31"
                  d="M48.529,204.766a4.77,4.77,0,0,0,.331,1.75A4.612,4.612,0,0,0,49.807,208a4.316,4.316,0,0,0,1.416.991,4.166,4.166,0,0,0,3.343,0A4.406,4.406,0,0,0,55.985,208a4.617,4.617,0,0,0,.947-1.485,4.8,4.8,0,0,0,0-3.5,4.586,4.586,0,0,0-.947-1.485,4.352,4.352,0,0,0-1.419-.994,4.23,4.23,0,0,0-1.672-.35,4.178,4.178,0,0,0-1.672.35,4.325,4.325,0,0,0-1.416.994,4.609,4.609,0,0,0-.944,1.485A4.793,4.793,0,0,0,48.529,204.766Zm20.086-1.106s-.019-.438-3.868-4.207c-5.506-4.991-10.412-5.707-14.058-5.232a15.725,15.725,0,0,0-6.615,2.66,42.173,42.173,0,0,0-6.921,6.664,3.383,3.383,0,0,0,.256,2.991s7.9,8.9,15.074,8.9A16.928,16.928,0,0,0,64.5,211.023a27.588,27.588,0,0,0,4.112-4.579,3.638,3.638,0,0,0,0-2.785ZM52.9,212.448a7.694,7.694,0,1,1,7.334-7.685A7.516,7.516,0,0,1,52.9,212.448Zm0,0"
                  transform="translate(-36.897 -188.097)"
                  fill={path === "/topics" ? "#FF8839" : "#FEBA83"}
                />
              </svg>
            </i>
            <Des style={{ textIndent: "3px", marginTop: "-1px" }}>监督</Des>
          </Link>
        </li>
        <li className="Navitem">
          <Link to="/upload">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g
                  id="组_4"
                  data-name="组 4"
                  transform="translate(-31.319 -279.17)"
                >
                  <path
                    id="路径_36"
                    data-name="路径 36"
                    d="M45.081,279.17h-.072a9.046,9.046,0,1,0,.072,0Zm3.224,9.884c0,.986-.372,1.474-1.137,1.474s-1.136-.487-1.136-1.474v-1.818c0-.975.382-1.462,1.136-1.462s1.137.487,1.137,1.462Zm-4.3,0c0,.986-.382,1.474-1.137,1.474s-1.136-.487-1.136-1.474v-1.818c0-.975.372-1.462,1.136-1.462s1.137.487,1.137,1.462Z"
                    transform="translate(2.537 0)"
                    fill={path === "/upload" ? "#FF8839" : "#FEBA83"}
                  />
                  <path
                    id="路径_37"
                    data-name="路径 37"
                    d="M31.338,307.916H63.316s.613-12.875-16.289-13S31.338,307.916,31.338,307.916Z"
                    transform="translate(0 3.254)"
                    fill={path === "/upload" ? "#FF8839" : "#FEBA83"}
                  />
                </g>
              </svg>
            </i>
            <Des style={{ textIndent: "3px" }}>我的</Des>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
export default Nav;
