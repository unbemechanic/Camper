import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MotorNavIn } from "../style";
import { campcar } from "..//page/data/mockdata";
import SizeCheckboxes from "./checkbox";
import "./mui.css";
import { useState } from "react";

export default function AccordionExpandDefault() {
  const data = campcar.maindata;
  // const license1 = data.filter((value)=>value.car.company == '1종 보통')
  const [licence, setLisence] = useState();
  const handleLicense = () => {
    setLisence(data.filter((value) => value.car.license == "1종 보통"));
  };
  return (
    <div>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "inherit",
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "inherits",
            border: "none",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)",
            marginBottom: "30px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <b>Cost of Car</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", gap: "30px" }}>
            <label style={{ display: "grid", gap: "5px" }}>
              from
              <MotorNavIn type="number" />
            </label>
            <label style={{ display: "grid" }}>
              to
              <MotorNavIn type="number" />
            </label>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "inherit",
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "inherits",
            borderTop: "none",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)",
            marginBottom: "30px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <b>Brand</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="p" style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>다온티앤티</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>제일모빌</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>스타모빌</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>영남캠핑카</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>한울캠핑카</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>훼미리캠핑카</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>에이스캠퍼</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>월든모빌</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>위드원모터스</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>미스터캠퍼</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>드림캠핑카</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes /> <div>모터홈코리아</div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "inherit",
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "inherits",
            borderTop: "none",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)",
            marginBottom: "30px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <b>License type</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" onChange={handleLicense} />
            <div>1종 보통</div>{" "}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>2종 보통</div>{" "}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "inherit",
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "inherits",
            borderTop: "none",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)",
            marginBottom: "30px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <b>Number of travelers</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>3인</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>4인</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>5인</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>6인</div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        defaultExpanded
        sx={{
          backgroundColor: "inherit",
          boxShadow:
            "0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 0px 3px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "inherits",
            borderTop: "none",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0, 0, 0, 0)",
            marginBottom: "50px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            <b>Location</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>수도권</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>경상권</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SizeCheckboxes />
            <div>충청권</div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
