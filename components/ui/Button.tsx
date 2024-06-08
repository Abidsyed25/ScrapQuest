

interface MagicButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const MagicButton: React.FC<MagicButtonProps> = ({ title, onClick, type = "button", disabled }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00509E_0%,#00C6A7_50%,#00509E_100%)]"  />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
      </span>
    </button>
  );
};

export default MagicButton;
