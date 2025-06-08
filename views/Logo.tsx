interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-12 w-auto",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo placeholder */}
      <div
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center px-1 py-1`}
      >
        <img
          src="/images/logos/logo.svg"
          alt="Oryza Logo"
          className="h-full w-full object-contain"
        />
      </div>
      {/* Company name */}
      <span className="text-2xl font-bold text-black">Oryza</span>
    </div>
  );
};

export default Logo;
