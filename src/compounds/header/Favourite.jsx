import Heart from "../../assets/heart.svg";
const Favourite = ({ onShow }) => {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onShow}
    >
      <img src={Heart} alt="Favourite" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;