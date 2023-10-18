interface WrapProps {
  children: React.ReactNode;
}

export const Wrap: React.FC<WrapProps> = ({ children }) => {
  return (
    <>
      <div className="p-4 w-1/3">
        <div className="bg-white relative rounded-lg p-2 flex justify-end border">
          {children}
        </div>
      </div>
    </>
  );
};
