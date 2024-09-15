import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddDataButton, ModalImg, ModalInputs } from "./style";
import ImageIcon from "@mui/icons-material/Image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function MotorAddModal({ onSubmit, names, handlers }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    name,
    company,
    license,
    cost,
    passanger,
    type,
    date,
    location,
    rating
  } = names;
  const {
    onClick,
    onCompany,
    onLicense,
    onPassanger,
    onCost,
    onDate,
    onType,
    onRating,
    onLocation,
  } = handlers;

  return (
    <div>
      <AddDataButton onClick={handleOpen}>Add data</AddDataButton>
      <Modal
        style={{ zIndex: "99999" }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5"
            component="h2"
            style={{ color: "#006DAB", marginBottom: "20px" }}
          >
            Add new car
          </Typography>
          <form onSubmit={onSubmit}>
            <ModalImg>
              <input
                style={{ width: "95%", height: "100%", cursor: "pointer" }}
                type="file"
              />
              <div>
                <ImageIcon fontSize="large" />
                Upload car image
              </div>
            </ModalImg>
            <ModalInputs
              type="text"
              placeholder="Car name"
              name="name"
              onChange={onClick}
              value={name}
            />
            <ModalInputs
              type="text"
              placeholder="Car company"
              name="company"
              onChange={onCompany}
              value={company}
            />
            <ModalInputs
              type="text"
              placeholder="Car type"
              value={type}
              onChange={onType}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="License type"
                name="license"
                onChange={onLicense}
                value={license}
              />
              <ModalInputs
                type="number"
                placeholder="Passangers"
                name="passanger"
                onChange={onPassanger}
                value={passanger}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="Manufactured date"
                name="date"
                onChange={onDate}
                value={date}
              />
              <ModalInputs
                type="number"
                placeholder="Cost"
                name="cost"
                onChange={onCost}
                value={cost}
              />
            </div>
            <ModalInputs
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onLocation}
            />
            <ModalInputs
              type="text"
              placeholder="Rating"
              name="rating"
              value={rating}
              onChange={onRating}
            />
            <ModalInputs
              $submit
              type="submit"
              value="Add"
              onClick={() => setOpen(false)}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}


export function CaravanAddModal({ onSubmit, names = {}, handlers = {} }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    name = '',
    company = '',
    license = '',
    cost = '',
    passanger = '',
    type = '',
    date = '',
    location = '',
    rating = '',
  } = names;

  const {
    onClick = () => {},
    onCompany = () => {},
    onLicense = () => {},
    onPassanger = () => {},
    onCost = () => {},
    onDate = () => {},
    onType = () => {},
    onRating = () => {},
    onLocation = () => {},
  } = handlers;

  return (
    <div>
      <AddDataButton onClick={handleOpen}>Add data</AddDataButton>
      <Modal
        style={{ zIndex: 99999 }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5"
            component="h2"
            style={{ color: "#006DAB", marginBottom: "20px" }}
          >
            Add new car
          </Typography>
          <form onSubmit={onSubmit}>
            <ModalImg>
              <input
                style={{ width: "95%", height: "100%", cursor: "pointer" }}
                type="file"
              />
              <div>
                <ImageIcon fontSize="large" />
                Upload car image
              </div>
            </ModalImg>
            <ModalInputs
              type="text"
              placeholder="Car name"
              name="name"
              onChange={onClick}
              value={name}
            />
            <ModalInputs
              type="text"
              placeholder="Car company"
              name="company"
              onChange={onCompany}
              value={company}
            />
            <ModalInputs
              type="text"
              placeholder="Car type"
              name="type"
              onChange={onType}
              value={type}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="License type"
                name="license"
                onChange={onLicense}
                value={license}
              />
              <ModalInputs
                type="text"
                placeholder="Passangers"
                name="passanger"
                onChange={onPassanger}
                value={passanger}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="date"
                placeholder="Manufactured date"
                name="date"
                onChange={onDate}
                value={date}
              />
              <ModalInputs
                type="number"
                placeholder="Cost"
                name="cost"
                onChange={onCost}
                value={cost}
              />
            </div>
            <ModalInputs
              type="text"
              placeholder="Location"
              name="location"
              onChange={onLocation}
              value={location}
            />
            <ModalInputs
              type="text"
              placeholder="Rating"
              name="rating"
              onChange={onRating}
              value={rating}
            />
            <ModalInputs
              $submit
              type="submit"
              value="Add"
              onClick={handleClose}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export function TuningAddModal({ onSubmit, names, handlers }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    name,
    company,
    license,
    cost,
    passanger,
    type,
    date,
    location,
    rating,
  } = names;
  const {
    onClick,
    onCompany,
    onLicense,
    onPassanger,
    onCost,
    onDate,
    onType,
    onRating,
    onLocation,
  } = handlers;
  return (
    <div>
      <AddDataButton onClick={handleOpen}>Add data</AddDataButton>
      <Modal
        style={{ zIndex: "99999" }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5"
            component="h2"
            style={{ color: "#006DAB", marginBottom: "20px" }}
          >
            Add new car
          </Typography>
          <form onSubmit={onSubmit}>
            <ModalImg>
              <input
                style={{ width: "95%", height: "100%", cursor: "pointer" }}
                type="file"
              />
              <div>
                <ImageIcon fontSize="large" />
                Upload car image
              </div>
            </ModalImg>
            <ModalInputs
              type="text"
              placeholder="Car name"
              name="name"
              onChange={onClick}
              value={name}
            />
            <ModalInputs
              type="text"
              placeholder="Car company"
              name="company"
              onChange={onCompany}
              value={company}
            />
            <ModalInputs
              type="text"
              placeholder="Car type"
              value={type}
              onChange={onType}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="License type"
                name="license"
                onChange={onLicense}
                value={license}
              />
              <ModalInputs
                type="text"
                placeholder="Passangers"
                name="passanger"
                onChange={onPassanger}
                value={passanger}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="date"
                placeholder="Manufactured date"
                name="date"
                onChange={onDate}
                value={date}
              />
              <ModalInputs
                type="number"
                placeholder="Cost"
                name="cost"
                onChange={onCost}
                value={cost}
              />
            </div>
            <ModalInputs
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onLocation}
            />
            <ModalInputs
              type="text"
              placeholder="Rating"
              name="rating"
              value={rating}
              onChange={onRating}
            />
            <ModalInputs
              $submit
              type="submit"
              value="Add"
              onClick={() => setOpen(false)}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export function UsedCarAddModal({ onSubmit, names, handlers }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    name,
    company,
    license,
    cost,
    passanger,
    type,
    date,
    location,
    rating,
  } = names;
  const {
    onClick,
    onCompany,
    onLicense,
    onPassanger,
    onCost,
    onDate,
    onType,
    onRating,
    onLocation,
  } = handlers;
  return (
    <div>
      <AddDataButton onClick={handleOpen}>Add data</AddDataButton>
      <Modal
        style={{ zIndex: "99999" }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5"
            component="h2"
            style={{ color: "#006DAB", marginBottom: "20px" }}
          >
            Add new car
          </Typography>
          <form onSubmit={onSubmit}>
            <ModalImg>
              <input
                style={{ width: "95%", height: "100%", cursor: "pointer" }}
                type="file"
              />
              <div>
                <ImageIcon fontSize="large" />
                Upload car image
              </div>
            </ModalImg>
            <ModalInputs
              type="text"
              placeholder="Car name"
              name="name"
              onChange={onClick}
              value={name}
            />
            <ModalInputs
              type="text"
              placeholder="Car company"
              name="company"
              onChange={onCompany}
              value={company}
            />
            <ModalInputs
              type="text"
              placeholder="Car type"
              value={type}
              onChange={onType}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="License type"
                name="license"
                onChange={onLicense}
                value={license}
              />
              <ModalInputs
                type="text"
                placeholder="Passangers"
                name="passanger"
                onChange={onPassanger}
                value={passanger}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="date"
                placeholder="Manufactured date"
                name="date"
                onChange={onDate}
                value={date}
              />
              <ModalInputs
                type="number"
                placeholder="Cost"
                name="cost"
                onChange={onCost}
                value={cost}
              />
            </div>
            <ModalInputs
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onLocation}
            />
            <ModalInputs
              type="text"
              placeholder="Rating"
              name="rating"
              value={rating}
              onChange={onRating}
            />
            <ModalInputs
              $submit
              type="submit"
              value="Add"
              onClick={() => setOpen(false)}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export function CampingAddModal({ onSubmit, names, handlers }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { name, company, license, cost, passanger, type, date, location } =
    names;
  const {
    onClick,
    onCompany,
    onLicense,
    onPassanger,
    onCost,
    onDate,
    onType,
    onLocation,
  } = handlers;
  return (
    <div>
      <AddDataButton onClick={handleOpen}>Add data</AddDataButton>
      <Modal
        style={{ zIndex: "99999" }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h5"
            component="h2"
            style={{ color: "#006DAB", marginBottom: "20px" }}
          >
            Add new car
          </Typography>
          <form onSubmit={onSubmit}>
            <ModalImg>
              <input
                style={{ width: "95%", height: "100%", cursor: "pointer" }}
                type="file"
              />
              <div>
                <ImageIcon fontSize="large" />
                Upload car image
              </div>
            </ModalImg>
            <ModalInputs
              type="text"
              placeholder="Place name"
              name="name"
              onChange={onClick}
              value={name}
            />
            <ModalInputs
              type="text"
              placeholder="City"
              name="company"
              onChange={onCompany}
              value={company}
            />
            <ModalInputs
              type="text"
              placeholder="Contact number"
              value={type}
              onChange={onType}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="From"
                name="license"
                onChange={onLicense}
                value={license}
              />
              <ModalInputs
                type="text"
                placeholder="To"
                name="passanger"
                onChange={onPassanger}
                value={passanger}
              />
            </div>
            <ModalInputs
              type="text"
              placeholder="Website"
              name="website"
              onChange={onDate}
              value={date}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <ModalInputs
                type="text"
                placeholder="Latitude"
                name="location"
                value={location}
                onChange={onLocation}
              />
              <ModalInputs
                type="text"
                placeholder="Longitude"
                name="cost"
                onChange={onCost}
                value={cost}
              />
            </div>
            <ModalInputs
              $submit
              type="submit"
              value="Add"
              onClick={() => setOpen(false)}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
