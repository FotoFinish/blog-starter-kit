type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={picture}
        className="w-10 h-10 rounded-full object-cover"
        alt={name}
      />
      <span className="text-sm font-semibold" style={{ color: "#003F73" }}>
        {name}
      </span>
    </div>
  );
};

export default Avatar;
