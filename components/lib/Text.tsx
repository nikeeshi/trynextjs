type Props = {};
export const Text: React.FC<Props> = ({ children }) => {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          color: hotpink;
        }
      `}</style>
    </span>
  );
};
