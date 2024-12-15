import { motion } from "framer-motion";
import { ArrowRight, UserPlus2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

const glowVariants = {
  initial: {
    opacity: 0.5,
    background:
      "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 70%)",
  },
  hover: {
    opacity: 0.8,
    background:
      "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 80%)",
    transition: { duration: 0.3 },
  },
};

const iconVariants = {
  initial: { y: 0 },
  hover: {
    y: [-2, 2, -2],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const arrowVariants = {
  initial: { x: 0 },
  hover: {
    x: [0, 5, 0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export default function GlowingButton({
  href,
  className,
  children,
  icon = <UserPlus2 className="w-5 h-5" />,
  showArrow = true,
  onClick,
}) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      className={cn("relative group isolate", className)}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        variants={glowVariants}
        className="absolute -inset-[0.3px] rounded-lg blur-sm -z-10"
        aria-hidden="true"
      />

      <div className="absolute -inset-[0.3px] rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Button Content */}
      <a
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className={cn(
          "relative flex items-center justify-center gap-2 px-8 py-4",
          "bg-background/95 rounded-lg",
          "text-lg font-medium text-foreground",
          "transition-colors duration-200",
          "group-hover:text-primary"
        )}
      >
        <motion.span variants={iconVariants} className="text-primary">
          {icon}
        </motion.span>

        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[0.5px] after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
          {children}
        </span>

        {showArrow && (
          <motion.span variants={arrowVariants} className="text-primary">
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        )}
      </a>
    </motion.div>
  );
}
