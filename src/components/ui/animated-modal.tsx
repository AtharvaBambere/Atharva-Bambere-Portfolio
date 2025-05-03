
import * as React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextProps | undefined>(undefined);

export const Modal: React.FC<ModalProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn("relative", className)}>{children}</div>
    </ModalContext.Provider>
  );
};

interface ModalTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalTrigger: React.FC<ModalTriggerProps> = ({ children, className }) => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("ModalTrigger must be used within a Modal");

  return (
    <button
      className={cn("relative overflow-hidden rounded-md px-4 py-2", className)}
      onClick={() => context.setIsOpen(true)}
    >
      {children}
    </button>
  );
};

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("ModalBody must be used within a Modal");

  if (!context.isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm",
        className
      )}
      onClick={() => context.setIsOpen(false)}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-auto transform transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children, className }) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("ModalFooter must be used within a Modal");

  return (
    <div className={cn("flex justify-end p-4 bg-gray-50 dark:bg-gray-800 rounded-b-lg", className)}>
      {children}
    </div>
  );
};
